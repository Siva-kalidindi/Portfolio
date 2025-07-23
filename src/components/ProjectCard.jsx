import React from "react";
import { motion } from "framer-motion";
import { Code2Icon, ExternalLinkIcon } from "lucide-react";
import '../App.css';

export default function ProjectCard({ title, description, tech, link, repo }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-gray-200 shadow-sm p-6 bg-white"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="flex flex-wrap gap-2 text-sm mb-4">
        {tech.map((t) => (
          <li key={t} className="bg-slate-100 px-2 py-1 rounded-md">
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
            className="inline-flex items-center gap-1 hover:underline"
          >
            Live <ExternalLinkIcon size={16} />
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
          >
            Code <Code2Icon size={16} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
