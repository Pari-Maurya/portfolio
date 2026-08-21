import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ResumeModal } from './ResumeModal';

export const ResumeSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-cyan-500/30 text-center space-y-6 relative overflow-hidden bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mx-auto shadow-lg shadow-cyan-500/20">
            <FileText className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Want to know more about my experience?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Download my complete software engineering resume or view it online to explore my education, project history, and technical proficiencies.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={personalInfo.resumeUrl}
              download="Pari_Maurya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 glass-panel border border-slate-300 dark:border-slate-700 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all hover:scale-105 active:scale-95"
            >
              <Eye className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>View Resume</span>
            </button> */}
          </div>

        </motion.div>

      </div>

      {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
    </section>
  );
};
