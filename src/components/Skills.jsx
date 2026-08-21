import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';
import { IconResolver } from './IconResolver';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoriesList = ['All', ...skillsCategories.map((c) => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillsCategories
    : skillsCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-600 dark:text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>tech_stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Technical <span className="text-gradient-cyan">Skills & Tooling</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Languages, frameworks, databases, and AI technologies I utilize to build end-to-end applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredCategories.map((catGroup, idx) => (
              <motion.div
                key={catGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 space-y-4 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-3 mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${catGroup.color}`} />
                        {catGroup.category}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{catGroup.description}</p>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                      {catGroup.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {catGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/60 hover:border-cyan-500/30 hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all duration-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover/skill:scale-110 transition-all">
                            <IconResolver name={skill.icon} className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-xs text-slate-800 dark:text-slate-200 group-hover/skill:text-slate-900 dark:group-hover/skill:text-slate-100">
                            {skill.name}
                          </span>
                        </div>

                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                          skill.level === 'Advanced'
                            ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20'
                            : 'bg-slate-200 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/50'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Verified Competency</span>
                  <span className="text-cyan-600 dark:text-cyan-400">Ready</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
