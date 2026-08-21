import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Sparkles, 
  Target, 
  GraduationCap,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  const highlights = [
    {
      title: "Software & Web Engineering",
      description: "Crafting modern, responsive full-stack applications with React, Node.js, and clean architecture.",
      icon: Code2,
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Strong problem-solving mindset with 800+ solved algorithmic problems on LeetCode & CodeChef.",
      icon: Brain,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "AI & Generative Tools",
      description: "Integrating modern AI APIs, natural language Q&A models, and data analytics into practical web software.",
      icon: Sparkles,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Practical Product Focus",
      description: "Passionate about building real, usable tools like ResolveIQ, CareerCraft and Weather App with seamless UX.",
      icon: Target,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-100/60 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-600 dark:text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>who_am_i</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            About <span className="text-gradient-cyan">Pari Maurya</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            CSE–Data Science student passionate about turning complex ideas into clean, functional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Story Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-2xl relative border border-slate-200 dark:border-slate-800"
          >
            <div className="absolute top-4 right-4 text-slate-300 dark:text-slate-800">
              <GraduationCap className="w-20 h-20 opacity-30" />
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed relative z-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                Aspiring Software Engineer & Problem Solver
              </h3>

              <p>
                I am currently pursuing my <strong>{personalInfo.degree}</strong> at {personalInfo.college}. My academic journey centers around computer science fundamentals, data analytics, and scalable web software development.
              </p>

              <p>
                From building full-stack applications to experimenting with AI-powered solutions, I love learning by creating. I’m currently focused on becoming a <strong>strong software engineer</strong>, contributing to impactful products, and growing through real-world development experiences.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-3 font-mono text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>React & Node.js</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>800+ DSA Solved</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>AI / GenAI APIs</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Graduating {personalInfo.gradYear}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 space-y-3"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.bg}`}>
                    <IconComp className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-200 text-sm">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
