import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  Loader2, 
  Sparkles, 
  MessageSquare 
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact = ({ showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast?.('Please fix errors in the form before submitting.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New portfolio contact message',
          message: formData.message,
          _replyto: formData.email,
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send the message');
      }

      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      showToast?.('Thank you! Your message has been sent successfully.', 'success');
    } catch {
      setIsSubmitting(false);
      showToast?.('We could not send your message. Please try again.', 'error');
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors">
      
      {/* Background Accent */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-600 dark:text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>get_in_touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Contact <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Have an opportunity, project, or question? Feel free to send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                I am actively seeking software engineering internships, entry-level developer roles, and technical collaborations. Reach out via email or direct messages anytime!
              </p>

              {/* Direct Info Links */}
              <div className="space-y-3 pt-2">
                
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-xs sm:text-sm text-slate-800 dark:text-slate-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Email</div>
                    <div className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/30 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-xs sm:text-sm text-slate-800 dark:text-slate-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">LinkedIn</div>
                    <div className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      linkedin.com/in/parimaurya
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-xs sm:text-sm text-slate-800 dark:text-slate-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0 group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">GitHub</div>
                    <div className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      github.com/parimaurya
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400">
                  <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Location</div>
                    <div className="font-medium text-slate-700 dark:text-slate-300">{personalInfo.location} (Open to Relocation / Remote)</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative">
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Message Received!</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I will review your message and reply as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Send a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 dark:text-slate-300">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/80 border text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all ${
                          errors.name ? 'border-rose-500/60' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 dark:text-slate-300">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/80 border text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all ${
                          errors.email ? 'border-rose-500/60' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Engineering Opportunity / Project Discussion"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message details here..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950/80 border text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none ${
                        errors.message ? 'border-rose-500/60' : 'border-slate-300 dark:border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
