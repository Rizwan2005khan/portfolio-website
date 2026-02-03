// Hero.tsx - Professional Enhancement with Functional Social Media Links
"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const words = [
    "Software Engineer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Problem Solver",
    "Good Team Leading Skills",
  ];

  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setCurrentWord((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentWord === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, wordIndex]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Define actual social media URLs
  const socialMediaLinks = [
    { platform: 'GitHub', url: 'https://github.com/Rizwan2005khan', icon: 'fab fa-github' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/rizwan-ullah-b74793290', icon: 'fab fa-linkedin' },
    { platform: 'facebook', url: 'https://www.facebook.com/share/17rXqVgXcE', icon: 'fab fa-facebook' },
  ];
  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center px-4 sm:px-6 lg:px-17 relative overflow-hidden lg:py-30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-3xl xl:text-3xl font-black leading-tight">
                <span className="block text-gray-300">Hi, I&apos;m</span>
                <span className="block bg-gradient-to-r from-[#00ff88] via-[#00ccff] to-[#ff0080] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,136,0.35)] mt-2">
                  Rizwan Ullah
                </span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-[#00ff88] to-[#0088ff] rounded-full"></div>
            </div>

            {/* Typewriter Effect */}
            <div className="flex items-center min-h-[3rem]">
              <p className="font-mono text-xl sm:text-3xl lg:text-3xl text-[#b0b0b0]">
                {currentWord}
                <span className="font-mono text-2xl sm:text-3xl lg:text-4xl text-[#00ff88] animate-blink ml-1">
                  |
                </span>
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-md lg:text-md sm:text-xl text-[#b0b0b0] leading-relaxed max-w-lg">
              Crafting digital experiences with clean code and innovative solutions. 
              Passionate about building scalable applications that solve real-world problems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-[#0a0a0a] font-semibold rounded-lg shadow-[0_4px_15px_rgba(0,255,136,0.35)] hover:shadow-[0_10px_30px_rgba(0,255,136,0.55)] hover:-translate-y-1 transition-all duration-300 min-w-[200px]"
              >
                🚀 Let's Connect
              </a>

              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#00ff88] text-[#00ff88] rounded-lg hover:bg-[#00ff88] hover:text-[#0a0a0a] hover:-translate-y-1 transition-all duration-300 min-w-[200px]"
              >
                💼 View Project
              </a>
            </div>

            {/* Social Links - Now with functional links */}
            <div className="flex gap-4 pt-4">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
                  aria-label={link.platform}
                >
                  <i className={`${link.icon} text-lg`}></i>
                  {/* Optionally, you can keep the text label too */}
                  {/* <span className="text-sm font-mono ml-1">{link.platform}</span> */}
                </a>
              ))}
            </div>
          </div>

          {/* Code Window - Your Original Preserved */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-w-[500px] w-full transform hover:scale-105 transition-transform duration-300">
              
              {/* Window Header */}
              <div className="bg-[#2a2a2a] px-4 py-3 flex items-center justify-between border-b border-[#333]">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28ca42]" />
                </div>
                <div className="font-mono text-sm text-[#b0b0b0]">
                  app.js — Full Stack API
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-7">
                
                {/* Code Lines */}
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#666]">1</span>
                  <span><span className="text-[#ff79c6]">import</span> <span className="text-[#8be9fd]">Express</span> <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'express'</span></span>
                </div>
                
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#666]">2</span>
                  <span><span className="text-[#ff79c6]">import</span> <span className="text-[#8be9fd]">MongoDB</span> <span className="text-[#ff79c6]">from</span> <span className="text-[#f1fa8c]">'mongodb'</span></span>
                </div>
                
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#666]">3</span>
                  <span><span className="text-[#6272a4]">// Scalable API architecture</span></span>
                </div>
                
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#666]">4</span>
                  <span><span className="text-[#8be9fd]">const</span> <span className="text-[#50fa7b]">server</span> <span className="text-[#ff79c6]">=</span> <span className="text-[#50fa7b]">Express</span>()</span>
                </div>
                
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#666]">5</span>
                  <span><span className="text-[#50fa7b]">server</span>.<span className="text-[#ffb86c]">use</span>(<span className="text-[#50fa7b]">cors</span>())</span>
                </div>
                
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#666]">6</span>
                  <span><span className="text-[#50fa7b]">server</span>.<span className="text-[#ffb86c]">listen</span>(<span className="text-[#bd93f9]">3000</span>, <span className="text-[#f1fa8c]">"API Ready"</span>)</span>
                </div>
                
                {/* Cursor */}
                <div className="h-[1.8em] w-0.5 bg-[#00ff88] animate-blink ml-12 mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Keep your existing CodeLine component if needed elsewhere
function CodeLine({
  n,
  children,
  muted,
}: {
  n: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 mb-2">
      <span className="text-[#666]">{n}</span>
      <span className={muted ? "text-[#6272a4]" : ""}>{children}</span>
    </div>
  );
}