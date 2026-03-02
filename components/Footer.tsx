"use client"

import { motion } from "framer-motion"

type Props = {
  language: string
}

export default function Footer({ language }: Props) {
  return (
    <footer
      id="contact"
      className="relative z-10 pt-20 pb-12 overflow-hidden"
    >
      {/* Pink Glow Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-pink-200 via-rose-200 to-fuchsia-200 blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-pink-500 mb-4"
        >
          {language === "EN" ? "Let's Connect " : "Mari Terhubung "}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-8"
        >
          {language === "EN"
            ? "Feel free to reach out for collaboration or discussion."
            : "Jangan ragu untuk menghubungi untuk kolaborasi atau diskusi."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap mb-10"
        >
          <a
            href="mailto:naumira@email.com"
            className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:scale-110 hover:rotate-1 transition"
          >
            {language === "EN" ? "Email Me ✉️" : "Kirim Email ✉️"}
          </a>

          <a
            href="#"
            className="px-6 py-3 bg-white border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 hover:scale-105 transition"
          >
            LinkedIn
          </a>
        </motion.div>

        <div className="h-px w-full bg-pink-200 mb-6"></div>

        <p className="text-gray-500 text-sm">
          © 2026 Naumira Assahra
        </p>
      </div>
    </footer>
  )
}