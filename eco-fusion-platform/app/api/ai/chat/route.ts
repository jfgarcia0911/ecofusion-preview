import { NextResponse } from 'next/server';
import { z } from 'zod';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { activeOrg } from '@/lib/api-access';
import { checkRateLimit } from '@/lib/rate-limit';
import { readJson } from '@/lib/validation/request';
import { aiRateLimited, chatHistory, chatMessage } from '@/lib/validation/fields';

const chatSchema = z.object({
  message: chatMessage,
  history: chatHistory,
});

/** Messages one person may send the assistant in an hour. */
const AI_LIMIT = { interval: 60 * 60 * 1000, maxRequests: 60 };

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `You are EcoFusion AI, an intelligent assistant for aquaponics farm management. You help farmers with:

1. **Fish Management**: Advice on fish health, feeding schedules, growth optimization, water quality, and disease prevention for species like Tilapia, Catfish, Trout, etc.

2. **Plant Management**: Guidance on plant growth, nutrient deficiencies, pest control, harvesting timing, and optimal conditions for crops like Lettuce, Basil, Tomatoes, etc.

3. **System Optimization**: Tips on balancing the aquaponics ecosystem, pH management, nitrogen cycling, water temperature, and dissolved oxygen levels.

4. **Business Insights**: Help with inventory management, sales strategies, pricing, and production planning.

5. **Troubleshooting**: Diagnose problems with fish, plants, or system performance and suggest solutions.

Be concise, practical, and actionable in your responses. Use your knowledge of aquaponics, hydroponics, and aquaculture to provide expert-level advice. When relevant, suggest specific metrics or parameters to monitor.`;

export async function POST(request: Request) {
  try {
    // A business that is signed in and paid up, rather than any session: a
    // locked business, or somebody removed from it, is refused here too.
    const { ctx, refusal } = await activeOrg();
    if (refusal) return refusal;

    const body = await readJson(request, chatSchema);
    if (!body.ok) return body.response;
    const { message, history } = body.data;

    // Every message is paid for, so each person has an hourly allowance.
    const limit = await checkRateLimit(`ai:${ctx.userId}`, AI_LIMIT);
    if (!limit.success) return aiRateLimited();

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Build chat history
    const turns = history.map((turn) => ({
      role: turn.role,
      parts: [{ text: turn.content }],
    }));

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: 'You are an AI assistant. Here are your instructions:\n\n' + SYSTEM_PROMPT }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand. I am EcoFusion AI, ready to help with aquaponics farm management including fish care, plant cultivation, system optimization, business insights, and troubleshooting. How can I assist you today?' }],
        },
        ...turns,
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({
      message: response,
      model: 'gemini-2.0-flash',
    });
  } catch (error) {
    console.error('AI chat error:', error);
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 });
  }
}
