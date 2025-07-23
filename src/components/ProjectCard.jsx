import React from "react";
import { motion } from "framer-motion";
import { Code2Icon, ExternalLinkIcon } from "lucide-react";
import '../App.css';

export default function ProjectCard({ title, description, tech, link, repo }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="w-full max-w-xl rounded-2xl border border-gray-800 shadow-xl p-6 bg-gray-800 text-white mx-auto"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="flex flex-wrap gap-2 text-sm mb-4">
        {tech.map((t) => (
          <li key={t} className="bg-slate-700 px-2 py-1 rounded-md">
            {t}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:underline text-blue-400"
          >
            Live <ExternalLinkIcon size={16} />
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:underline text-blue-400"
          >
            Code <Code2Icon size={16} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
