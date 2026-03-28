"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-12 md:p-20 relative overflow-hidden"
        >
          {/* Animated Background Gradients inside the card */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/30 rounded-full blur-[80px] animate-float pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Let's build something <br />
              <span className="gradient-text font-serif italic text-5xl md:text-7xl">amazing.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
              Looking for a robust backend architecture or a cutting-edge intelligent system? I'm always open to discussing new projects and opportunities.
            </p>

            <motion.a
              href="mailto:chetankiranstd@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </motion.a>

            <div className="mt-16 flex items-center justify-center gap-6">
              <motion.a 
                whileHover={{ y: -3, color: '#fff' }}
                href="https://github.com/Chetan-Kiran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors p-3 bg-white/5 rounded-full border border-white/10"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, color: '#0077b5' }}
                href="https://in.linkedin.com/in/chetan-kiran-b7263731b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0077b5] transition-colors p-3 bg-white/5 rounded-full border border-white/10"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, color: '#ea4335' }}
                href="mailto:chetankiranstd@gmail.com"
                className="text-gray-500 hover:text-[#ea4335] transition-colors p-3 bg-white/5 rounded-full border border-white/10"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
