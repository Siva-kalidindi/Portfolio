import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../App.css';

export default function Hero() {
  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 12 }
    }
  };

  return (
    <>
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="text-5xl lg:text-6xl font-bold mb-6 text-center text-white drop-shadow-[0_0_16px_#3b82f6]"
      >
        Hi, I'm <span className="text-blue-400 drop-shadow-[0_0_16px_#3b82f6]">Siva Kalidindi</span>
      </motion.h1>
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-300 max-w-xl text-center mb-8"
      >
        Full‑stack developer passionate about building fast, delightful web experiences.
      </motion.p>
      {/* Social Icons */}
      <div className="flex gap-8 mt-2">
        <a
          href="https://github.com/Siva-kalidindi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-400 hover:text-blue-400 transition duration-300"
          style={{ filter: "drop-shadow(0 0 0px #3b82f6)" }}
          onMouseEnter={e => e.currentTarget.style.filter = "drop-shadow(0 0 16px #3b82f6)"}
          onMouseLeave={e => e.currentTarget.style.filter = "drop-shadow(0 0 0px #3b82f6)"}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/siva-kalidindi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-400 hover:text-blue-400 transition duration-300"
          style={{ filter: "drop-shadow(0 0 0px #3b82f6)" }}
          onMouseEnter={e => e.currentTarget.style.filter = "drop-shadow(0 0 16px #3b82f6)"}
          onMouseLeave={e => e.currentTarget.style.filter = "drop-shadow(0 0 0px #3b82f6)"}
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
    <div className="h-16 w-full bg-gradient-to-b from-gray-900 via-blue-100 to-white -mt-8"></div>
    </>
    
  );
}
