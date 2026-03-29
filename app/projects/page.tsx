"use client";

import dynamic from "next/dynamic";
import { projects } from "@/data/projects";

const InteractiveProjectCard = dynamic(() => import("@/components/InteractiveProjectCard"), { ssr: false });
const GithubContribution = dynamic(() => import("@/components/GithubContribution"), { ssr: false });
const ProjectTimeline = dynamic(() => import("@/components/ProjectTimeline"), { ssr: false });
const GridCenterpiece = dynamic(() => import("@/components/GridCenterpiece"), { ssr: false });
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <Navbar />

      <section className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              My <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              An evolving curation of intelligent systems and immersive experiences that redefine software architecture.
            </p>
          </motion.div>

          {/* Github Calendar */}
          <div className="mb-24">
            <GithubContribution />
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {/* Row 1 & 2 Left: GFG (Large 2x2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 md:row-span-2 h-full"
            >
              <InteractiveProjectCard project={projects[0]} />
            </motion.div>

            {/* Row 1 Right: AI Navigator (Wide 2x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2 md:row-span-1 h-full"
            >
              <InteractiveProjectCard project={projects[1]} />
            </motion.div>

            {/* Row 2 Middle: Centerpiece (1x1) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 h-full"
            >
              <GridCenterpiece />
            </motion.div>

            {/* Row 2 Right: MCP Calculator (1x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-1 md:row-span-1 h-full"
            >
              <InteractiveProjectCard project={projects[2]} />
            </motion.div>

            {/* Row 3: NLP Summarizer (Tall 1x2) and Future Space */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-1 md:row-span-2 h-full"
            >
              <InteractiveProjectCard project={projects[3]} />
            </motion.div>

            {/* Filler for Grid Balance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5 }}
              className="md:col-span-3 md:row-span-2 rounded-[2rem] border border-dashed border-primary/20 flex items-center justify-center bg-primary/5 group"
            >
              <div className="text-center group-hover:scale-110 transition-transform duration-500">
                <p className="text-primary/30 font-black uppercase tracking-[0.5em] text-sm">More Projects Coming Soon</p>
                <div className="h-[1px] w-12 bg-primary/20 mx-auto mt-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
