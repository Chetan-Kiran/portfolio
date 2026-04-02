import React, { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowDown, Mail, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Lazy load components for performance
const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
const TechStack = lazy(() => import("@/components/TechStack"));
const ContactCTA = lazy(() => import("@/components/ContactCTA"));
const Hero3D = lazy(() => import("@/components/Hero3D"));

// Loading placeholder
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary/30 relative bg-black text-white">
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Navigation */}
      <Navbar />

      {/* SECTION 1 - Hero Section */}
      <section className="min-h-[100vh] relative flex items-center justify-center pt-20 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight flex flex-col gap-2">
                <span className="text-gray-400 text-3xl md:text-4xl font-semibold tracking-normal block animate-float">
                  Hi, I&apos;m
                </span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="gradient-text relative inline-block overflow-hidden"
                >
                  {"Chetan Kiran".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: i * 0.05,
                        ease: [0.33, 1, 0.68, 1] 
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
                    className="absolute bottom-0 left-0 w-full h-[4px] bg-primary origin-left rounded-full"
                  />
                </motion.span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
                Software Developer <span className="text-primary font-bold">|</span> Machine Learning Enthusiast
              </h2>
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mix-blend-plus-lighter">
              I build intelligent systems, developer tools and scalable software that transforms ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <FolderGit2 className="w-5 h-5" /> View Projects
              </Link>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold transition-all border border-white/10">
                <Mail className="w-5 h-5" /> Contact Me
              </a>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px]">
            <Suspense fallback={<SectionLoader />}>
              <Hero3D />
            </Suspense>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-white transition-colors">
            <ArrowDown className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* SECTION 2 - About */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      {/* SECTION 3 - Featured Projects */}
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      {/* SECTION 4 - Tech Stack */}
      <Suspense fallback={<SectionLoader />}>
        <TechStack />
      </Suspense>

      {/* SECTION 5 - Contact CTA */}
      <Suspense fallback={<SectionLoader />}>
        <ContactCTA />
      </Suspense>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
