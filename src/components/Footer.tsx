import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Chetan Kiran</span>
            </Link>
            <p className="text-sm text-gray-500">
              Software Developer &amp; ML Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {["About", "Projects", "Contact"].map((link) => (
              link === "Projects" ? (
                <Link
                  key={link}
                  to="/projects"
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ) : (
                <a
                  key={link}
                  href={`/#${link.toLowerCase()}`}
                  className="text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link}
                </a>
              )
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://github.com/Chetan-Kiran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: '#0077b5' }}
              href="https://in.linkedin.com/in/chetan-kiran-b7263731b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="mailto:chetankiranstd@gmail.com"
              className="text-gray-500 hover:text-[#ea4335] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-glass-border text-center">
          <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
            © {currentYear} Chetan Kiran. Built with{" "}
            <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Vite &amp; TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
