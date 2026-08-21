import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Code, 
  Award, 
  Flame, 
  CheckCircle2, 
  ExternalLink,
  Brain,
  Zap
} from 'lucide-react';
import { codingStats } from '../data/portfolioData';
import { IconResolver } from './IconResolver';

export const CodingAchievements = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = codingStats.problemsSolved;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative bg-slate-50/60 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-600 dark:text-cyan-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>coding_stats</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Coding & <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Verified problem-solving statistics, algorithmic practice, and competitive platform milestones.
          </p>
        </div>

        {/* Counter Hero Stat Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Solved Problems Counter */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl border border-cyan-500/30 text-center space-y-2 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
            <Code className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mx-auto mb-2" />
            <div className="text-4xl sm:text-5xl font-extrabold text-gradient-cyan font-mono">
              {count}+
            </div>
            <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">Coding Problems Solved</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Across LeetCode, CodeChef, GeeksforGeeks and HackerRank</p>
          </motion.div>

          {/* LeetCode Streak */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl border border-amber-500/30 text-center space-y-2 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
            <Flame className="w-8 h-8 text-amber-500 dark:text-amber-400 mx-auto mb-2 animate-bounce" />
            <div className="text-4xl sm:text-5xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">
              {codingStats.leetcodeStreak}
            </div>
            <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">Active Practice Streak</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Consistent daily algorithmic problem solving</p>
          </motion.div>

          {/* CodeChef Rating */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl border border-indigo-500/30 text-center space-y-2 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
            <Trophy className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
            <div className="text-4xl sm:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
              {codingStats.codechefRating}
            </div>
            <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">Leetcode Competitive Rank</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Regular contest participation & problem solving</p>
          </motion.div>

        </div>

        {/* Coding Platform Cards & Core Topics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Platform Cards */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Competitive Coding Profiles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {codingStats.platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400">
                        <IconResolver name={platform.icon} className="w-4 h-4" />
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-slate-200 text-sm">{platform.name}</div>
                      <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">{platform.metric}</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">{platform.subtext}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Core Computer Science & DSA Focus Areas */}
          <div className="lg:col-span-5 glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200 flex items-center gap-2">
              <Brain className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              DSA & CS Fundamentals
            </h3>
            <div className="space-y-2.5">
              {codingStats.dsaTopics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300"
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    {topic}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Practiced
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
