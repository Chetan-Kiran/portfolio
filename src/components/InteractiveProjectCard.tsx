import { useRef, useState, memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import ProjectDetailView from "./ProjectDetailView";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  problem?: string;
  solution?: string;
  impact?: string;
  size?: string;
  milestones?: Milestone[];
}

const InteractiveProjectCard = memo(({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [0.5, -0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  const isLarge = project.size === "large";
  const isTall = project.size === "tall";

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsDetailOpen(true)}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group h-full bg-background/40 backdrop-blur-md rounded-2xl border border-glass-border overflow-hidden p-[1px] cursor-pointer transition-all duration-300"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Dynamic Cursor Glow */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div 
              className="absolute h-64 w-64 rounded-full bg-primary/20 blur-[100px] -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(x.get() + 0.5) * 100}%`,
                top: `${(y.get() + 0.5) * 100}%`,
              }}
            />
          </motion.div>
        )}

        <div className={`relative z-10 bg-background/80 rounded-[calc(1rem-1px)] h-full flex flex-col overflow-hidden border border-glass-border`}>
          {/* Project Image */}
          <div className={`${isLarge || isTall ? "h-64" : "h-32"} relative w-full overflow-hidden border-b border-glass-border transition-all duration-500`}>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="text-gray-400 bg-black/50 p-2 rounded-full backdrop-blur-md hover:text-white transition-colors">
                <Github size={18} />
              </div>
              <div className="text-gray-400 bg-black/50 p-2 rounded-full backdrop-blur-md hover:text-white transition-colors">
                <ExternalLink size={18} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 flex flex-col flex-grow relative overflow-hidden">
            <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors tracking-tight mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.slice(0, 3).map((t, i) => (
                <span 
                  key={i} 
                  className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-primary/5 border border-primary/20 text-primary-light rounded-full font-bold"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 3 && <span className="text-[9px] text-gray-500">+{project.tech.length - 3} more</span>}
            </div>

            {/* View Roadmap button */}
            <div className="absolute bottom-4 right-4 text-[10px] font-black text-primary uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
               Roadmap <ArrowRight size={10} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Detail Modal */}
      <ProjectDetailView 
        project={project as any} 
        isOpen={isDetailOpen} 
        onClose={() => setIsDetailOpen(false)} 
      />
    </>
  );
});

InteractiveProjectCard.displayName = "InteractiveProjectCard";
export default InteractiveProjectCard;
