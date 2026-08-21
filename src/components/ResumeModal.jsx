import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, GraduationCap, Code2, Briefcase } from 'lucide-react';
import { personalInfo, codingStats } from '../data/portfolioData';

export const ResumeModal = ({ onClose }) => {
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-panel bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="font-bold text-slate-900 dark:text-slate-100">Pari Maurya – Resume Preview</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Resume Body */}
          <div className="p-6 space-y-6 overflow-y-auto text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
            {/* Header info */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{personalInfo.name}</h2>
              <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{personalInfo.title}</p>
              <p className="text-slate-600 dark:text-slate-400">{personalInfo.email} • {personalInfo.location} • {personalInfo.socials.github}</p>
            </div>

            {/* Summary */}
            <div className="space-y-1">
              <h3 className="font-bold uppercase text-xs tracking-wider text-cyan-600 dark:text-cyan-400">Professional Summary</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{personalInfo.aboutMe}</p>
            </div>

            {/* Education */}
            <div className="space-y-1.5">
              <h3 className="font-bold uppercase text-xs tracking-wider text-cyan-600 dark:text-cyan-400">Education</h3>
              <div className="bg-slate-100/80 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">{personalInfo.degree}</div>
                  <div className="text-slate-600 dark:text-slate-400">{personalInfo.college}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-cyan-600 dark:text-cyan-400">Graduation: {personalInfo.gradYear}</div>
                  <div className="font-mono text-emerald-600 dark:text-emerald-400">CGPA: {personalInfo.cgpa}</div>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div className="space-y-1.5">
              <h3 className="font-bold uppercase text-xs tracking-wider text-cyan-600 dark:text-cyan-400">Technical Skills</h3>
              <div className="space-y-1 text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80">
                <div><strong>Languages:</strong> Java, JavaScript, Python, C, C++</div>
                <div><strong>Frontend:</strong> HTML, CSS, React.js, Tailwind CSS, Redux Toolkit</div>
                <div><strong>Backend & DB:</strong> Node.js, Express.js, REST APIs, MongoDB, Firebase, SQL</div>
                <div><strong>AI & Data:</strong> Generative AI, Data Analytics, Python</div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-1.5">
              <h3 className="font-bold uppercase text-xs tracking-wider text-cyan-600 dark:text-cyan-400">Coding Achievements</h3>
              <div className="bg-slate-100/80 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 space-y-1">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="w-4 h-4" /> 500+ Algorithmic Coding Problems Solved (LeetCode & CodeChef)</div>
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400"><CheckCircle2 className="w-4 h-4" /> CodeChef 3-Star Rating (1650+)</div>
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400"><CheckCircle2 className="w-4 h-4" /> Active 120+ Day Daily Coding Streak</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
            <span className="text-xs text-slate-600 dark:text-slate-400">PDF path: {personalInfo.resumeUrl}</span>
            <a
              href={personalInfo.resumeUrl}
              download="Pari_Maurya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
