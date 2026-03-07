"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import Achievement from "@/components/Achievement"
import Experience from "@/components/Experience"

export default function Home() {
  const [language, setLanguage] = useState("EN")

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-fuchsia-100 overflow-x-hidden text-gray-800">

      <Navbar setLanguage={setLanguage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <Hero language={language} />
          <About language={language} />
          <Experience language={language} />
          <Skills language={language} />
          <Achievement language={language} />
          <Footer language={language} />
        </motion.div>
      </AnimatePresence>

    </div>
  )
}