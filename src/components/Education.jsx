import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  Building2,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Education = () => {
  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (Java/C++)',
    'Operating Systems & Computer Networks',
    'Data Science & Data Analytics',
    'Machine Learning & GenAI',
    'Web Software Engineering',
  ];

  return (
    <section className="py-16 relative bg-slate-50/60 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden space-y-6"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 shadow-lg shadow-cyan-500/10">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">
                    Higher Education
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                    {personalInfo.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-xs mt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{personalInfo.college}</span>
                  </div>
                </div>
              </div>

              {/* Status / CGPA Pill */}
              <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between gap-1">
                <span className="flex items-center gap-1.5 text-xs font-mono bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  Graduating {personalInfo.gradYear}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-bold">
                  <Award className="w-3.5 h-3.5" />
                  CGPA: {personalInfo.cgpa}
                </span>
              </div>
            </div>

            {/* Coursework Focus */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Key Academic & Specialized Coursework
              </h4>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
