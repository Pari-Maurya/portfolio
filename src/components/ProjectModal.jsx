import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Sparkles 
} from 'lucide-react';
import { Github } from './BrandIcons';
import { ProjectMockup } from './ProjectMockup';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-3xl glass-panel bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                {project.badge || 'Project Specs'}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
                ID: {project.id}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable */}
          <div className="p-6 space-y-6 overflow-y-auto">
            
            {/* Visual Mockup Header */}
            <div className="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
              <ProjectMockup project={project} />
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {project.name}
                </h3>
                {project.date && (
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    {project.date}
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">{project.subtitle}</p>
            </div>

            {/* Detailed Description */}
            <div className="space-y-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">Overview</h4>
              <p>{project.longDescription || project.description}</p>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">Tech Architecture</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-800 flex items-center gap-1.5"
                  >
                    <Code2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Features Checklist */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">Key Features & Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-100/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer Buttons */}
          <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 glass-panel border border-slate-300 dark:border-slate-700 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all shadow-md shadow-cyan-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              Close Details
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
