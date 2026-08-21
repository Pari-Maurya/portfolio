import React from 'react';
import { 
  Sparkles, 
  Bot, 
  CreditCard, 
  CloudSun, 
  BarChart2, 
  BrainCircuit, 
  Kanban, 
  FileText, 
  GitFork 
} from 'lucide-react';

export const ProjectMockup = ({ project }) => {
  const { id, name, accentColor, gradient } = project;

  // Custom visual previews for each project type
  const renderVisual = () => {
    switch (id) {
      case 'careercraft':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-sky-500/5 to-transparent pointer-events-none" />
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-cyan-500/20 text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> CareerCraft AI
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 text-[10px] px-1.5 py-0.5 rounded">98% Match</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 bg-cyan-500/30 rounded w-full" />
                <div className="h-1.5 bg-slate-800 rounded w-3/4" />
                <div className="h-1.5 bg-slate-800 rounded w-1/2" />
              </div>
            </div>
          </div>
        );

      case 'alfred':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-indigo-500/5 to-transparent pointer-events-none" />
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-purple-500/20 text-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-purple-300 font-medium text-[11px]">ALFRED AI</div>
                  <div className="text-[9px] text-slate-400">Emotional Support Bot</div>
                </div>
              </div>
              <div className="bg-purple-950/40 p-2 rounded text-[10px] text-purple-200 border border-purple-800/30">
                "How are you feeling today? Let's process together..."
              </div>
            </div>
          </div>
        );

      case 'resolveiq':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent pointer-events-none" />
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-emerald-500/20 text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5" /> ResolveIQ
                </span>
                <span className="text-emerald-400 text-[10px] font-mono">-$149.00</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-950/30 p-1.5 rounded border border-emerald-800/30 text-[10px]">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300">Refund Approved & Dispatched</span>
              </div>
            </div>
          </div>
        );

      case 'weather-app':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-sky-500/5 to-transparent pointer-events-none" />
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-blue-500/20 text-xs text-center">
              <div className="flex items-center justify-center gap-2 text-sky-400 mb-1">
                <CloudSun className="w-6 h-6 animate-bounce" />
                <span className="text-2xl font-bold text-slate-100">24°C</span>
              </div>
              <div className="text-[10px] text-slate-400">Partly Cloudy • Humidity 45%</div>
            </div>
          </div>
        );

      case 'devmetrics':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent pointer-events-none" />
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-amber-500/20 text-xs">
              <div className="flex items-center justify-between mb-2 text-amber-400">
                <span className="font-semibold flex items-center gap-1"><BarChart2 className="w-3.5 h-3.5" /> DevMetrics</span>
                <span className="text-[10px] font-mono">+84 Commits</span>
              </div>
              <div className="flex gap-1 h-8 items-end">
                {[40, 75, 55, 90, 65, 80, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-amber-500/40 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        );

      case 'datapulse':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-pink-500/5 to-transparent pointer-events-none" />
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-rose-500/20 text-xs">
              <div className="flex items-center justify-between mb-2 text-rose-400">
                <span className="font-semibold flex items-center gap-1"><BrainCircuit className="w-3.5 h-3.5" /> DataPulse</span>
                <span className="text-[10px] text-rose-300">EDA Active</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-4 bg-rose-500/20 rounded border border-rose-500/20" />
                ))}
              </div>
            </div>
          </div>
        );

      case 'taskflow-pro':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-blue-500/5 to-transparent pointer-events-none" />
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-indigo-500/20 text-xs">
              <div className="flex items-center justify-between mb-2 text-indigo-400">
                <span className="font-semibold flex items-center gap-1"><Kanban className="w-3.5 h-3.5" /> TaskFlow</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-1 rounded">Board</span>
              </div>
              <div className="flex gap-1.5">
                <div className="flex-1 bg-slate-800/80 p-1 rounded space-y-1">
                  <div className="h-2 bg-indigo-500/40 rounded" />
                  <div className="h-2 bg-indigo-500/20 rounded" />
                </div>
                <div className="flex-1 bg-slate-800/80 p-1 rounded space-y-1">
                  <div className="h-2 bg-emerald-500/40 rounded" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'genai-docuassistant':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-purple-500/5 to-transparent pointer-events-none" />
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-violet-500/20 text-xs">
              <div className="flex items-center gap-1.5 text-violet-400 mb-2">
                <FileText className="w-3.5 h-3.5" />
                <span className="font-semibold">DocuAssistant</span>
              </div>
              <div className="bg-violet-950/40 p-1.5 rounded text-[9px] text-violet-200 border border-violet-800/30">
                Q: Summarize section 3...
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-cyan-500/20 text-xs text-center">
              <GitFork className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
              <div className="font-semibold text-slate-200">{name}</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-36 bg-slate-950 overflow-hidden rounded-t-xl border-b border-slate-800/80 group-hover:border-cyan-500/30 transition-colors">
      {/* Top Browser Bar */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900/90 border-b border-slate-800 flex items-center px-3 gap-1.5 z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        <div className="ml-2 text-[9px] font-mono text-slate-400 truncate">
          https://{id}.pari.dev
        </div>
      </div>
      <div className="pt-6 h-full">
        {renderVisual()}
      </div>
    </div>
  );
};
