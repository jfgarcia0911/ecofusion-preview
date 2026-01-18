"use client";

import { useState, useRef, useEffect } from "react";
import { Brain, Sparkles, Zap, Sprout, Send, Loader2, Trash2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What's the current status of all zones?",
  "Are there any issues with my fish or plants?",
  "When should I harvest next?",
  "How are my sensor readings looking?",
  "What recommendations do you have for optimization?",
];

export default function IntelligencePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(content: string) {
    if (!content.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/ai/intelligence", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content.trim(),
          history,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        const assistantMessage: Message = {
          role: "assistant",
          content: data.message,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        const errorMessage: Message = {
          role: "assistant",
          content: "Sorry, I encountered an error accessing system data. Please try again.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Intelligence chat error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I couldn't connect to the AI service. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function clearChat() {
    setMessages([]);
  }

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent flex items-center gap-3">
            <Brain className="text-accent" />
            NutriBalance AI
          </h1>
          <p className="text-white/50 mt-1">AI-driven ecosystem optimization and insights</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full pb-6">
        <div className="lg:col-span-2 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border border-accent/20">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Sparkles size={120} className="text-accent" />
            </div>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-accent" />
              Active Recommendations
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-accent/5 border border-accent/20 rounded-xl hover:bg-accent/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-accent flex items-center gap-2">
                    <Zap size={16} /> Water Quality Optimization
                  </span>
                  <span className="text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded">Confidence: 94%</span>
                </div>
                <p className="text-white/80 text-sm">Based on recent pH fluctuations in Zone B, increasing <strong>buffer solution dosing by 5%</strong> will stabilize overnight alkalinity drops.</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 bg-accent text-primary font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-accent/90 cursor-pointer">Apply Automatic Fix</button>
                  <button className="px-4 py-2 bg-white/5 text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-white/10 cursor-pointer">Simulate Impact</button>
                </div>
              </div>
              <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-xl hover:bg-secondary/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-secondary flex items-center gap-2">
                    <Sprout size={16} /> Harvest Prediction
                  </span>
                  <span className="text-xs text-secondary bg-secondary/10 border border-secondary/20 px-2 py-1 rounded">Confidence: 88%</span>
                </div>
                <p className="text-white/80 text-sm">Lettuce crop in Zone A is maturing <strong>1.5 days faster</strong> than scheduled due to optimized lighting conditions. Update harvest schedule?</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 bg-secondary/20 text-secondary border border-secondary/30 font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-secondary/30 cursor-pointer">Update Schedule</button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 min-h-[250px] flex flex-col items-center justify-center border-dashed border-2 border-white/10">
            <Brain size={48} className="text-white/10 mb-4" />
            <p className="text-white/30 font-medium">Machine Learning Model Training...</p>
            <p className="text-white/20 text-xs mt-2">Gathering more data points for Predictive Yield Engine</p>
          </div>
        </div>

        {/* AI Chat Panel */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col h-full max-h-[calc(100vh-12rem)]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Brain size={20} className="text-accent" />
              Ask EcoFusion AI
            </h3>
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="p-1.5 text-white/40 hover:text-white hover:bg-white/10 rounded-lg"
                title="Clear chat"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>

          {/* Messages Area */}
          <div className="flex-1 bg-black/20 rounded-xl p-4 mb-4 text-sm overflow-y-auto custom-scrollbar space-y-4">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <Brain size={32} className="text-accent/30 mb-3" />
                <p className="text-white/50 text-sm mb-4">
                  I have access to all your system data. Ask me anything about your zones, fish, plants, or performance.
                </p>
                <div className="space-y-2 w-full">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      className="w-full px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-white/60 hover:text-white text-left transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div key={i} className="flex flex-col">
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[95%] ${
                        msg.role === "user"
                          ? "bg-accent/20 text-white ml-auto rounded-tr-none border border-accent/10"
                          : "bg-white/10 text-white rounded-tl-none"
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
                    </div>
                    <span
                      className={`text-[10px] text-white/30 mt-1 ${
                        msg.role === "user" ? "text-right mr-2" : "ml-2"
                      }`}
                    >
                      {msg.role === "user" ? "You" : "EcoFusion AI"} •{" "}
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                ))}
                {loading && (
                  <div className="flex flex-col">
                    <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 max-w-[95%] flex items-center gap-2">
                      <Loader2 size={14} className="animate-spin text-accent" />
                      <span className="text-white/50 text-sm">Analyzing system data...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about system status..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-white/20"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="absolute right-2 top-2 p-1.5 bg-accent/20 hover:bg-accent/40 rounded-lg text-accent transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
