import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import '../App.css';

const projects = [
  {
    title: "Chat App",
    description:
      "Real‑time chat system built with React, Socket.io, and MongoDB. Deploys to Render.",
    tech: ["React", "Socket.io", "MongoDB"],
    link: "https://chat-app-vert-alpha.vercel.app/Home",
    repo: "https://github.com/Siva-kalidindi/chat-app"
  },
  {
    title: "React Dashboard",
    description:
      "A simple Kanban board built with React. demonstrates basic dashboard functionality.",
    tech: ["React"],
    repo: "https://github.com/Siva-kalidindi/React-Task-Manager"
  },
  {
    title: "House Hunt",
    description:
      "A property listing platform where users can search, filter, and view details of available houses. Built with React and Node with MongoDB.",
    tech: ["React", "Firebase"],
    repo: "https://github.com/Siva-kalidindi/house-hunt"
  },
  {
    title: "Phishing Mail Detector",
    description:
      "A tool to detect phishing emails using machine learning. Built with React and Node.js.",
    tech: ["React", "Node.js", "Machine Learning"],
    repo: "https://github.com/Siva-kalidindi/ps-detector"
  }
];

export default function Projects() {
  return (
    <>
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
          className="text-3xl font-bold mb-10 text-center text-white drop-shadow-[0_0_16px_#3b82f6]"
        >
          Projects
        </motion.h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 14 }}
              className="bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-start
                border border-blue-900
                hover:scale-105 hover:shadow-[0_0_16px_#3b82f6]
                transition-all duration-300
                hover:border-blue-400
                hover:drop-shadow-[0_0_12px_#3b82f6]"
              style={{
                boxShadow: "0 2px 12px 0 #1e293b, 0 0 12px #3b82f6",
                perspective: "800px"
              }}
            >
              <ProjectCard {...proj} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <div className="h-16 w-full bg-gradient-to-b from-gray-400 via-blue-100 to-white -mt-8"></div>
    </>
  );
}
