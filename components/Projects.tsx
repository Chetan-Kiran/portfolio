"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI Development Agent",
    description: "An intelligent multi-agent system built using Next.js and Python. Automates coding tasks through LLM chains, with a custom tool calling framework.",
    tech: ["Next.js", "Python", "LangChain", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Microservices",
    description: "Scalable backend architecture using Java Spring Boot. Features event-driven communication, Redis caching, and PostgreSQL databases.",
    tech: ["Java", "Spring Boot", "Kafka", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Machine Learning Classifier",
    description: "A deep learning model for image classification deployed as a scalable API. Built with PyTorch and served using FastAPI for real-time predictions.",
    tech: ["Python", "PyTorch", "FastAPI", "React"],
    github: "#",
    live: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work bridging the gap between intelligent systems and robust software architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              className="glass-card rounded-2xl overflow-hidden group perspective"
            >
              <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-[#0a0a0a] relative flex items-center justify-center border-b border-glass-border overflow-hidden">
                {/* Image placeholder with subtle zoom on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 bg-gray-900/50 flex items-center justify-center text-gray-700 font-bold uppercase tracking-widest">
                  PROJECT PREVIEW
                </div>
              </div>

              <div className="p-6 relative">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 absolute bottom-6">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.live} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
