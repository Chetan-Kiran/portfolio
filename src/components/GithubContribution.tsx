import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export default function GithubContribution() {
  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center gap-8 py-12"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Code <span className="gradient-text">Activity</span>
        </h2>
        <p className="text-gray-400">My daily contributions to the open source community.</p>
      </div>

      <div className="glass-card p-8 rounded-2xl border border-glass-border bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden max-w-full">
        <GitHubCalendar
          username="Chetan-Kiran"
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          theme={theme}
          style={{
            color: "#94a3b8",
          }}
        />
      </div>
    </motion.div>
  );
}
