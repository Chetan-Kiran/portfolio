"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "GFG Leaderboard Scraper",
    description:
      "A web scraping tool for GeeksforGeeks that lets users track and visualize their daily submission activity with interactive charts. Input your GFG ID and get beautiful data visualizations of your coding progress.",
    tech: ["JavaScript", "React", "Node.js", "Chart.js", "Web Scraping"],
    github: "https://github.com/Chetan-Kiran/GFG_WEB-Scraper",
    live: "https://chetan-gfg-scraper.netlify.app/",
    image: "/gfg-scraper.png",
  },
  {
    title: "AI Codebase Navigator",
    description:
      "An intelligent multi-agent system designed to explore and understand complex codebases. Automates documentation, code analysis, and feature implementation using LLM chains.",
    tech: ["Next.js", "Python", "LangChain", "OpenAI"],
    github: "https://github.com/Chetan-Kiran/AI-Codebase-Navigator",
    live: "https://ai-codebase.netlify.app/",
    image: "/ai-navigator.png",
  },
  {
    title: "MCP Calculator Server",
    description:
      "A robust Model Context Protocol (MCP) server implementation for complex mathematical computations. Engineered with a modular plugin architecture for seamless AI assistant integration.",
    tech: ["Python", "MCP", "FastAPI", "Docker"],
    github: "https://github.com/Chetan-Kiran/mcp-calculator-server",
    live: "#",
    image: "/mcp-server.png",
  },
  {
    title: "NLP Text Summarizer",
    description:
      "A high-performance natural language processing tool that generates concise summaries from large text datasets. Built with advanced transformer models for context-aware distillation.",
    tech: ["Python", "PyTorch", "Transformers", "Streamlit"],
    github: "https://github.com/Chetan-Kiran/nlp-summarizer",
    live: "#",
    image: "/nlp-summarizer.png",
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="h-48 w-full relative border-b border-glass-border overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
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
