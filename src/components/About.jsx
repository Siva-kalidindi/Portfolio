import React from "react";
import { motion } from "framer-motion";
import '../App.css';

export default function About() {
  return (
    <>
    <section id="about" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
          className="text-3xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="leading-8 text-gray-700"
        >
         I’m a self-taught Full Stack Developer and Computer Science student with hands-on experience in building scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). I love bringing ideas to life through clean, responsive UIs using Tailwind CSS and smooth interactions powered by Framer Motion.

From real-time chat apps to internal tools for inventory and report tracking, I’ve built projects end-to-end with a focus on functionality and user experience. I’m also a ServiceNow Certified System Administrator (CSA) and Certified Application Developer (CAD), with experience scripting and developing on the platform alongside traditional full stack projects.

I enjoy solving problems, optimizing performance, and learning new tools that help me build better, faster, and cleaner.


        </motion.p>
      </div>
    </section>
    {/* Gradient Bleed Transition */}
    <div className="h-16 w-full bg-gradient-to-b from-white via-blue-100 to-gray-900 -mt-8"></div>
    </>
  );
}