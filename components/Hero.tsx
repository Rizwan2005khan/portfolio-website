"use client";

import { useEffect, useState } from "react";

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

  const socialMediaLinks = [
    { platform: "GitHub", url: "https://github.com/Rizwan2005khan", icon: "fab fa-github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/rizwan-ullah-b74793290", icon: "fab fa-linkedin" },
    { platform: "Facebook", url: "https://www.facebook.com/share/17rXqVgXcE", icon: "fab fa-facebook" },
  ];

  return (
    <section
      id="home"
      className="
        relative w-full
        min-h-[100svh]
        flex items-start
        px-4 sm:px-6 lg:px-16
        pt-24 sm:pt-28 lg:pt-32
        pb-16
        overflow-hidden
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-56 h-56 sm:w-64 sm:h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 sm:w-72 sm:h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">

          {/* TEXT CONTENT */}
          <div className="space-y-6">
            <h1 className="pt-6 sm:pt-8 lg:pt-10 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
            <span className="block text-gray-300">Hi, I&apos;m</span>
            <span className="block bg-gradient-to-r from-[#00ff88] via-[#00ccff] to-[#ff0080] bg-clip-text text-transparent mt-2">
             Rizwan Ullah
          </span>
          </h1>


            <div className="h-1 w-20 bg-gradient-to-r from-[#00ff88] to-[#0088ff] rounded-full" />

            {/* TYPEWRITER */}
            <div className="min-h-[2.5rem]">
              <p className="font-mono text-lg sm:text-2xl lg:text-3xl text-[#b0b0b0]">
                {currentWord}
                <span className="ml-1 text-[#00ff88] animate-blink">|</span>
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-base lg:text-lg text-[#b0b0b0] leading-relaxed max-w-xl">
              Crafting digital experiences with clean code and innovative solutions.
              Passionate about building scalable applications that solve real-world problems.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex justify-center items-center px-6 py-4 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-[#0a0a0a] font-semibold rounded-lg hover:-translate-y-1 transition-all min-w-full sm:min-w-[200px]"
              >
                🚀 Let&apos;s Connect
              </a>

              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="flex justify-center items-center px-6 py-4 border-2 border-[#00ff88] text-[#00ff88] rounded-lg hover:bg-[#00ff88] hover:text-[#0a0a0a] hover:-translate-y-1 transition-all min-w-full sm:min-w-[200px]"
              >
                💼 View Projects
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-4">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff88] text-xl p-2 transition"
                  aria-label={link.platform}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* CODE WINDOW */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl overflow-hidden shadow-lg w-full max-w-full sm:max-w-[420px] lg:max-w-[500px]">

              <div className="bg-[#2a2a2a] px-4 py-3 flex items-center gap-2 border-b border-[#333]">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-auto text-xs text-gray-400 font-mono">
                  app.js — Full Stack API
                </span>
              </div>

              <div className="p-5 font-mono text-xs sm:text-sm leading-6">
                <CodeLine n="1">import Express from 'express'</CodeLine>
                <CodeLine n="2">import MongoDB from 'mongodb'</CodeLine>
                <CodeLine n="3" muted>// Scalable API architecture</CodeLine>
                <CodeLine n="4">const server = Express()</CodeLine>
                <CodeLine n="5">server.use(cors())</CodeLine>
                <CodeLine n="6">server.listen(3000, "API Ready")</CodeLine>
                <div className="h-5 w-0.5 bg-[#00ff88] animate-blink ml-8 mt-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

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
    <div className="flex gap-4 mb-2">
      <span className="text-gray-500">{n}</span>
      <span className={muted ? "text-[#6272a4]" : "text-gray-200"}>
        {children}
      </span>
    </div>
  );
}
