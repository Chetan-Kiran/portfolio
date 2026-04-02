"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";

export default function ProjectTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
          Project <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-gray-400">A detailed look at the problems solved and the impact created.</p>
      </div>

      {/* Progress Bar */}
      <motion.div 
        style={{ scaleY }}
        className="absolute left-4 md:left-1/2 top-40 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-600 to-transparent origin-top -translate-x-1/2 hidden md:block"
      />

      <div className="space-y-24 relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content Card */}
            <div className="w-full md:w-[45%] glass-card p-8 rounded-3xl border border-glass-border hover:border-primary/30 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">0{index + 1}</span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] uppercase font-black tracking-widest text-primary mb-1">The Challenge</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-black tracking-widest text-purple-400 mb-1">The Innovation</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-primary font-medium italic opacity-80 decoration-primary underline-offset-4 underline">{project.impact}</p>
                </div>
              </div>
            </div>

            {/* Visual indicator on line */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] -translate-x-1/2 z-20 hidden md:block" />

            {/* Spacer/Empty side */}
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
