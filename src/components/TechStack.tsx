import { motion } from "framer-motion";
import { Coffee, Brain, Database, FileCode2, TerminalSquare, GitBranch } from "lucide-react";
import TechGlobe from "./TechGlobe";

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
    <section id="tech" className="py-24 relative z-10 overflow-hidden">
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

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="relative z-20"
        >
          <TechGlobe />
        </motion.div>

        {/* Small tech pill labels for SEO/Accessibility */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
           {technologies.map((tech) => (
              <span key={tech.name} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">
                 {tech.name}
              </span>
           ))}
        </div>
      </div>
    </section>
  );
}
