import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { GoogleGenerativeAI } from '@google/generative-ai';

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
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Build chat history
    const chatHistory = history?.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    })) || [];

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
        ...chatHistory,
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    return NextResponse.json({
      message: response,
      model: 'gemini-1.5-flash',
    });
  } catch (error) {
    console.error('AI chat error:', error);
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 });
  }
}
