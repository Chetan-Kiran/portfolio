import dynamic from "next/dynamic";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import ContactCTA from "@/components/ContactCTA";
import { ArrowDown, Mail, FolderGit2 } from "lucide-react";

// Lazy load the 3D component for performance
const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30 relative">
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none z-50"></div>

      {/* SECTION 1 - Hero Section */}
      <section className="min-h-[100vh] relative flex items-center justify-center pt-20 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight flex flex-col gap-2">
                <span className="text-gray-400 text-3xl md:text-4xl font-semibold tracking-normal block animate-float">
                  Hi, I'm
                </span>
                <span className="gradient-text">Chetan Kiran</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
                Software Developer <span className="text-primary font-bold">|</span> Machine Learning Enthusiast
              </h2>
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mix-blend-plus-lighter">
              I build intelligent systems, developer tools and scalable software that transforms ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <FolderGit2 className="w-5 h-5" /> View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold transition-all border border-white/10">
                <Mail className="w-5 h-5" /> Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <Hero3D />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-white transition-colors">
            <ArrowDown className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* SECTION 2 - About */}
      <About />

      {/* SECTION 3 - Featured Projects */}
      <Projects />

      {/* SECTION 4 - Tech Stack */}
      <TechStack />

      {/* SECTION 5 - Contact CTA */}
      <ContactCTA />
      
    </main>
  );
}
