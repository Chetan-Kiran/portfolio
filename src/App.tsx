import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));

// Loading component
const LoadingScreen = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-black/50 rounded-full"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
