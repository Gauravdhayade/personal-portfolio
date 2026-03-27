import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "./context/ThemeContext.js";
import ErrorBoundary from "./utils/ErrorBoundary";
import Navbar from "./components/Navbar";
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] overflow-x-hidden">
          <Navbar />
          <Suspense fallback={<div className="flex items-center justify-center min-h-[200px] text-gray-500">Loading...</div>}>
            <Hero />
          </Suspense>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[200px] text-gray-500">Loading...</div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[200px] text-gray-500">Loading...</div>}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[200px] text-gray-500">Loading...</div>}>
            <Experience />
          </Suspense>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[200px] text-gray-500">Loading...</div>}>
            <Education />
          </Suspense>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[200px] text-gray-500">Loading...</div>}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[200px] text-gray-500">Loading...</div>}>
            <Certifications />
          </Suspense>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[200px] text-gray-500">Loading...</div>}>
            <Contact />
          </Suspense>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[200px] text-gray-500">Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
