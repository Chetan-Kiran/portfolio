export const projects = [
  {
    title: "GFG Leaderboard Scraper",
    description: "A specialized web scraping tool for GeeksforGeeks that visualizes code progress and submissions.",
    problem: "GeeksforGeeks lacks a unified, visual dashboard for tracking individual and group leaderboard progress.",
    solution: "A custom scraping engine built with Node.js and Puppeteer, paired with a React dashboard for real-time data visualization.",
    impact: "Provides immediate visual feedback on coding streaks and leaderboard standing for hundreds of students.",
    tech: ["JavaScript", "React", "Node.js", "Chart.js"],
    github: "https://github.com/Chetan-Kiran/GFG_WEB-Scraper",
    live: "https://chetan-gfg-scraper.netlify.app/",
    image: "/gfg-scraper.png",
    featured: true,
    size: "large",
    milestones: [
      { year: "Phase 1", title: "API Unavailability", description: "GFG does not provide a public API for user stats.", type: "problem" },
      { year: "Phase 1", title: "Puppeteer Engine", description: "Implemented a headless browser scraper to extract dynamic leaderboard data.", type: "tech" },
      { year: "Phase 2", title: "Data Overload", description: "Scraped data was too large for efficient client-side rendering.", type: "problem" },
      { year: "Phase 2", title: "Aggregated Storage", description: "Built a compression layer to serve optimized JSON to the React frontend.", type: "tech" }
    ]
  },
  {
    title: "AI Codebase Navigator",
    description: "Multi-agent system for exploring and understanding complex codebases using LLM chains.",
    problem: "Developers spend ~60% of their time reading code to understand project architecture.",
    solution: "An AI-powered navigator that uses vector embeddings to map and explain codebase dependencies.",
    impact: "Reduced onboarding time for new developers by an estimated 50%.",
    tech: ["Next.js", "Python", "LangChain", "OpenAI"],
    github: "https://github.com/Chetan-Kiran/AI-Codebase-Navigator",
    live: "https://ai-codebase.netlify.app/",
    image: "/ai-navigator.png",
    featured: true,
    size: "wide",
    milestones: [
      { year: "Step 1", title: "Context Window Limits", description: "Large codebases exceed LLM context windows.", type: "problem" },
      { year: "Step 1", title: "RAG Implementation", description: "Used Pinecone and LangChain to implement Retrieval-Augmented Generation.", type: "tech" },
      { year: "Step 2", title: "Implicit Dependencies", description: "Cross-file dependencies were often missed by simple text search.", type: "problem" },
      { year: "Step 2", title: "AST Parsing", description: "Integrated abstract syntax tree parsing to map structural dependencies.", type: "tech" }
    ]
  },
  {
    title: "MCP Calculator Server",
    description: "A robust Model Context Protocol (MCP) server for complex mathematical computations.",
    problem: "AI Models lack deterministic precision for multi-stage mathematical proofs and matrix operations.",
    solution: "An external tool-bridge that provides high-precision execution environments via MCP.",
    impact: "Ensures 100% accuracy for critical calculations in agentic workflows.",
    tech: ["Python", "MCP", "FastAPI", "Docker"],
    github: "https://github.com/Chetan-Kiran/mcp-calculator-server",
    live: "#",
    image: "/mcp-server.png",
    featured: true,
    size: "standard",
    milestones: [
      { year: "v1.0", title: "LLM Calculation Drift", description: "Models would frequently hallucinate intermediate math steps.", type: "problem" },
      { year: "v1.0", title: "MCP Delegation", description: "Created an MCP server to delegate math execution to a standard Python environment.", type: "tech" }
    ]
  },
  {
    title: "NLP Text Summarizer",
    description: "High-performance NLP tool for distilling large datasets into concise summaries.",
    problem: "The rapid influx of technical documentation creates a 'bottleneck' for researchers.",
    solution: "A transformer-based distillation engine that identifies and preserves core semantic intent.",
    impact: "Enables rapid information scanning with zero loss of critical context.",
    tech: ["Python", "PyTorch", "Transformers", "Streamlit"],
    github: "https://github.com/Chetan-Kiran/nlp-summarizer",
    live: "#",
    image: "/nlp-summarizer.png",
    featured: true,
    size: "tall",
    milestones: [
      { year: "Phase 1", title: "Long-form Truncation", description: "Processing documents longer than 512 tokens caused data loss.", type: "problem" },
      { year: "Phase 1", title: "Sliding Window", description: "Implemented overlapping chunking to process arbitrary document lengths.", type: "tech" }
    ]
  },
];
