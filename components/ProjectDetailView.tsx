"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, AlertTriangle, Cpu, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Milestone {
  year: string;
  title: string;
  description: string;
  type: "problem" | "tech";
}

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  milestones?: Milestone[];
}

export default function ProjectDetailView({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* High z-index overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[150] bg-background/95 backdrop-blur-xl overflow-y-auto"
      >
        {/* Top Spacer to avoid Navbar overlap */}
        <div className="h-24 md:h-28" />

        <div className="max-w-7xl mx-auto px-4 pb-20">
          <motion.div
            initial={{ scale: 0.98, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 20 }}
            className="bg-background border border-glass-border w-full rounded-[2rem] overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant Header */}
            <div className="bg-primary/5 p-8 md:p-12 border-b border-glass-border flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="space-y-4 max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-black gradient-text tracking-tight">{project.title}</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
               </div>
               <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-gray-300 hover:text-white">
                    <Github size={24} />
                  </a>
                  <a href={project.live} target="_blank" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-gray-300 hover:text-white">
                    <ExternalLink size={24} />
                  </a>
                  <button onClick={onClose} className="p-4 bg-primary/10 hover:bg-primary/20 rounded-2xl border border-primary/30 transition-all text-primary hover:text-primary-light">
                    <X size={24} />
                  </button>
               </div>
            </div>

            <div className="p-8 md:p-12 space-y-20">
               {/* Visual Hero */}
               <div className="relative h-[250px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-inner">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
               </div>

               {/* The Branched Timeline: Problem vs Solution */}
               <div className="space-y-12">
                  <div className="flex flex-col items-center gap-2 mb-10">
                     <span className="text-xs font-black uppercase tracking-[0.3em] text-primary/60">Story Mapping</span>
                     <h3 className="text-3xl font-black text-white">Challenges & Breakthroughs</h3>
                  </div>

                  <div className="relative max-w-5xl mx-auto pl-4 md:pl-0">
                     {/* Central Trunk */}
                     <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-primary/20 md:-translate-x-1/2" />

                     <div className="space-y-24">
                        {project.milestones?.map((m, i) => {
                           const isProblem = m.type === "problem";
                           return (
                              <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: isProblem ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 w-full ${isProblem ? 'md:pr-[50%]' : 'md:pl-[50%] md:flex-row-reverse'}`}
                              >
                                 {/* Connector Node */}
                                 <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-background z-10 transition-transform hover:scale-125 ${isProblem ? 'bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.4)]' : 'bg-primary shadow-[0_0_20px_rgba(59,130,246,0.4)]'}`} />

                                 {/* Content Card */}
                                 <div className={`w-full bg-white/5 border rounded-[2rem] p-8 shadow-xl backdrop-blur-md hover:bg-white/10 transition-all ${isProblem ? 'border-orange-500/20' : 'border-primary/20'}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                       <div className={`p-2 rounded-lg ${isProblem ? 'bg-orange-500/10 text-orange-400' : 'bg-primary/10 text-primary'}`}>
                                          {isProblem ? <AlertTriangle size={18} /> : <Cpu size={18} />}
                                       </div>
                                       <span className="text-xs font-black uppercase tracking-widest text-gray-500">{m.year}</span>
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-2">{m.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{m.description}</p>
                                 </div>

                                 {/* Direction Arrow (Desktop) */}
                                 <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isProblem ? 'left-[calc(50%+16px)]' : 'right-[calc(50%+16px)]'}`}>
                                    <ArrowRight size={20} className={isProblem ? 'text-orange-500 rotate-180' : 'text-primary'} />
                                 </div>
                              </motion.div>
                           )
                        })}
                     </div>
                  </div>
               </div>

               {/* Outcome Footer */}
               <div className="p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 text-center max-w-4xl mx-auto">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">The Result</h4>
                  <p className="text-2xl font-light italic text-gray-300">"{project.impact}"</p>
               </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
