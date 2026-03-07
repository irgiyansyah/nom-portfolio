"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Briefcase } from "lucide-react"

type Props = {
  language: string
}

export default function Hero({ language }: Props) {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text */}
        <div className="text-center md:text-left">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            {language === "EN" ? "Hello, I'm " : "Halo, Saya "}
            <span className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
              Naumira Assahra
            </span>
          </motion.h2>

          <motion.p
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-600 mb-8 max-w-xl"
          >
            {language === "EN"
              ? "Islamic Banking student passionate about ethical finance, sustainable growth, and integrity-driven financial systems."
              : "Mahasiswi Perbankan Syariah yang tertarik pada keuangan etis, pertumbuhan berkelanjutan, dan sistem keuangan berbasis integritas."}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center md:justify-start gap-4 flex-wrap"
          >

            <button
              onClick={() => scrollTo("about")}
              className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {language === "EN" ? "Explore" : "Jelajahi"}
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollTo("experience")}
              className="flex items-center gap-2 px-6 py-3 bg-white border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 hover:scale-105 transition-all duration-300"
            >
              {language === "EN" ? "Experience" : "Pengalaman"}
              <Briefcase size={18} />
            </button>

          </motion.div>

        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >

            <Image
              src="/naumira.png"
              alt="Naumira Assahra"
              width={260}
              height={260}
              priority
              className="rounded-full border-4 border-pink-400 shadow-[0_0_40px_rgba(236,72,153,0.5)] object-cover group-hover:scale-105 transition duration-500"
            />

          </motion.div>

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-pink-300 blur-3xl opacity-20 -z-10"></div>

        </motion.div>

      </div>

    </section>
  )
}