"use client"

import { motion } from "framer-motion"

type Props = {
  language: string
}

export default function Hero({ language }: Props) {
  return (
    <section id="home" className="pt-32 pb-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="text-center md:text-left">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6 leading-tight"
          >
            {language === "EN" ? "Hello, I'm " : "Halo, Saya "}
            <span className="text-pink-500">Naumira Assahra</span>
          </motion.h2>

          <motion.p
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-600 mb-8 max-w-xl"
          >
            {language === "EN"
              ? "Islamic Banking Student passionate about ethical finance, sustainable growth, and integrity-driven systems."
              : "Mahasiswi Perbankan Syariah yang tertarik pada keuangan etis, pertumbuhan berkelanjutan, dan sistem berbasis integritas."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center md:justify-start gap-4 flex-wrap"
          >
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:scale-110 hover:rotate-1 transition"
            >
              {language === "EN" ? "Explore" : "Jelajahi"}
            </button>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-white border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 hover:scale-105 transition"
            >
              {language === "EN" ? "Contact" : "Hubungi"}
            </button>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="/naumira.png"
            alt="Naumira Assahra"
            className="w-64 h-64 object-cover rounded-full border-4 border-pink-400 shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 rounded-full bg-pink-300 blur-3xl opacity-20 -z-10"></div>
        </motion.div>

      </div>
    </section>
  )
}