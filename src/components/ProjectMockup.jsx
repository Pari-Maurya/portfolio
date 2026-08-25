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
  GitFork,
  MessageSquare,
  Gem
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




      case 'minichat':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent pointer-events-none" />
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-emerald-500/20 text-xs">
              <div className="flex items-center justify-between mb-2 text-emerald-400">
                <span className="font-semibold flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> MiniChat</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded font-mono">CRUD</span>
              </div>
              <div className="space-y-1.5">
                <div className="bg-emerald-950/40 p-1.5 rounded text-[9px] text-emerald-200 border border-emerald-800/30 flex justify-between items-center">
                  <span>Chat message created</span>

                </div>
                <div className="bg-slate-800/60 p-1 rounded text-[9px] text-slate-300 flex justify-between items-center">
                  <span>View, Edit & Delete</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'manika':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-slate-900/90 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-rose-500/5 to-transparent pointer-events-none" />
            <div className="w-full max-w-[200px] glass-panel rounded-lg p-3 shadow-xl border border-amber-500/20 text-xs text-center">
              <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
                <Gem className="w-5 h-5 animate-pulse" />
                <span className="font-bold text-slate-100 text-sm">Manika</span>
              </div>
              <div className="text-[10px] text-amber-300/90 font-mono">Jewellery Website</div>
              <div className="mt-1 text-[9px] text-slate-400">HTML5 & CSS3 Responsive UI</div>
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
