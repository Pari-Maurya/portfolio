import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Code, 
  Sparkles,
  Terminal,
  Play,
  CheckCircle2,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('developer.js');
  const [codeOutput, setCodeOutput] = useState(null);

  const runCode = () => {
    setCodeOutput('Ready for Software Engineering Roles ✨');
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-purple-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-medium text-cyan-600 dark:text-cyan-300 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                Hi, I'm <span className="text-gradient-cyan">{personalInfo.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="text-cyan-500 dark:text-cyan-400">&gt;</span> {personalInfo.title}
              </h2>
            </div>

            {/* Short Intro */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              {personalInfo.aboutMe}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 glass-panel border border-slate-300 dark:border-slate-700/80 hover:border-cyan-500/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Pari_Maurya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 glass-panel border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Icons & Quick Stats */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Connect:</span>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/40 hover:scale-110 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 hover:scale-110 transition-all duration-200"
                >
                  <Code className="w-5 h-5" />
                </a>
              </div>

              
            </div>

          </motion.div>

          {/* Right Column: Animated Developer Terminal / Code Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Tech Badges around Terminal */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 glass-panel px-3 py-1.5 rounded-xl border border-cyan-500/30 flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-300 shadow-xl"
            >
              <Cpu className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
              <span>Full Stack & GenAI</span>
            </motion.div>

            

            {/* IDE Window Frame (Terminal always stays sleek & dark) */}
            <div className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-950/20">
              
              {/* Window Controls & Tabs */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                
                {/* File Tabs */}
                <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800/60 text-xs font-mono">
                  <button 
                    onClick={() => setActiveTab('developer.js')}
                    className={`px-2.5 py-1 rounded ${activeTab === 'developer.js' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    developer.js
                  </button>
                  <button 
                    onClick={() => setActiveTab('skills.json')}
                    className={`px-2.5 py-1 rounded ${activeTab === 'skills.json' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    skills.json
                  </button>
                </div>

                <button 
                  onClick={runCode}
                  className="flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 text-xs font-mono transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Run</span>
                </button>
              </div>

              {/* Code Content Area */}
              <div className="p-5 font-code text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[280px] text-slate-300">
                {activeTab === 'developer.js' ? (
                  <div className="space-y-1.5 text-slate-300">
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-yellow-300">developer</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">name</span>: <span className="text-emerald-300">"{personalInfo.name}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">role</span>: <span className="text-emerald-300">"{personalInfo.title}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">college</span>: <span className="text-emerald-300">"{personalInfo.degree}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">passions</span>: [<span className="text-emerald-300">"Full Stack"</span>, <span className="text-emerald-300">"DSA"</span>, <span className="text-emerald-300">"AI/GenAI"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">solveProblems</span>: <span className="text-purple-400">function</span>() {'{'}
                    </div>
                    <div className="pl-8 text-slate-400">
                      <span className="text-purple-400">return</span> <span className="text-emerald-300">"Clean, performant & scalable code"</span>;
                    </div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'};'}</div>
                    <div className="pt-2 text-slate-500">// Click Run button to execute status check</div>
                  </div>
                ) : (
                  <div className="space-y-1 text-slate-300">
                    <div>{'{'}</div>
                    <div className="pl-4"><span className="text-cyan-400">"languages"</span>: [<span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"C++"</span>],</div>
                    <div className="pl-4"><span className="text-cyan-400">"frontend"</span>: [<span className="text-emerald-300">"React.js"</span>, <span className="text-emerald-300">"Tailwind CSS"</span>, <span className="text-emerald-300">"Redux"</span>],</div>
                    <div className="pl-4"><span className="text-cyan-400">"backend"</span>: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express.js"</span>, <span className="text-emerald-300">"REST API"</span>],</div>
                    <div className="pl-4"><span className="text-cyan-400">"databases"</span>: [<span className="text-emerald-300">"MongoDB"</span>, <span className="text-emerald-300">"Firebase"</span>, <span className="text-emerald-300">"SQL"</span>]</div>
                    <div>{'}'}</div>
                  </div>
                )}

                {/* Console Output Bar if clicked */}
                {codeOutput && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-3 border-t border-slate-800 text-emerald-400 flex items-center gap-2 bg-emerald-950/30 p-2 rounded-lg border border-emerald-500/20"
                  >
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span>&gt; {codeOutput}</span>
                  </motion.div>
                )}
              </div>

              {/* IDE Footer */}
              <div className="bg-slate-900/90 px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400">UTF-8</span>
                  <span>JavaScript React</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Vite Server Active</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
