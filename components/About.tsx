"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 group perspective">
              <motion.div
                whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full rounded-2xl glass-card overflow-hidden border-2 border-primary/20 p-2 shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
              >
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-800 to-black relative overflow-hidden flex items-center justify-center">
                   {/* Placeholder for Profile Picture */}
                   <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
                   <span className="text-gray-400 text-lg font-medium tracking-widest z-10">PROFILE IMAGE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed text-balance">
                I am a passionate Software Developer with a strong focus on Java and Machine Learning. 
                I love building intelligent systems, diving deep into system design, and developing powerful 
                developer tools like MCP servers to optimize workflows and scale software architectures.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-glass-border">
              <div className="text-center space-y-2">
                <h4 className="text-4xl font-bold text-white">
                  <CountUp end={20} suffix="+" duration={3} enableScrollSpy scrollSpyOnce />
                </h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Projects</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-4xl font-bold text-white">
                  <CountUp end={50} suffix="+" duration={3} enableScrollSpy scrollSpyOnce />
                </h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Repos</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-4xl font-bold text-white">
                  <CountUp end={15} suffix="+" duration={3} enableScrollSpy scrollSpyOnce />
                </h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Tech</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
