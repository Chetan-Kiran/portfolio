"use client";

import { motion } from "framer-motion";
import { Coffee, Brain, Database, FileCode2, TerminalSquare, GitBranch } from "lucide-react";

const technologies = [
  { name: "Java", icon: Coffee, color: "text-[#b07219]" },
  { name: "Python", icon: TerminalSquare, color: "text-[#3572A5]" },
  { name: "React", icon: FileCode2, color: "text-[#61dafb]" },
  { name: "Node.js", icon: Database, color: "text-[#339933]" },
  { name: "Machine Learning", icon: Brain, color: "text-[#ff6f00]" },
  { name: "Git", icon: GitBranch, color: "text-[#f34f29]" }
];

export default function TechStack() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The core tools and technologies I use to build robust software systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer"
              >
                <div className={`p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors ${tech.color} group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                  <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                </div>
                <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
