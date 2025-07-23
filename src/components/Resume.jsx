import React from "react";
import { motion } from "framer-motion";
import { FileTextIcon } from "lucide-react";
import '../App.css';

export default function Resume() {
  return (
    <>
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-lg mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
          className="text-3xl font-bold mb-6"
        >
          Resume
        </motion.h2>
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md"
        >
          <FileTextIcon size={18} /> Download PDF
        </motion.a>
      </div>
    </section>
     <div className="h-16 w-full bg-gradient-to-b from-white via-blue-100 to-gray-400 -mt-3"></div>
    </>
  );
}
