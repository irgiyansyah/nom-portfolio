"use client"

import { motion } from "framer-motion"
import { BarChart3, Landmark, MessageCircle } from "lucide-react"

type Props = {
  language: string
}

export default function Skills({ language }: Props) {

  const skillsEN = [
    {
      title: "Islamic Finance",
      desc: "Understanding Sharia banking principles.",
      icon: <Landmark size={28} />
    },
    {
      title: "Financial Analysis",
      desc: "Risk and financial evaluation.",
      icon: <BarChart3 size={28} />
    },
    {
      title: "Communication",
      desc: "Strong interpersonal skills.",
      icon: <MessageCircle size={28} />
    }
  ]

  const skillsID = [
    {
      title: "Keuangan Syariah",
      desc: "Memahami prinsip perbankan syariah.",
      icon: <Landmark size={28} />
    },
    {
      title: "Analisis Keuangan",
      desc: "Evaluasi risiko dan laporan keuangan.",
      icon: <BarChart3 size={28} />
    },
    {
      title: "Komunikasi",
      desc: "Kemampuan komunikasi yang baik.",
      icon: <MessageCircle size={28} />
    }
  ]

  const skills = language === "EN" ? skillsEN : skillsID

  return (
    <section id="skills" className="py-24 relative z-10">

      <div className="max-w-6xl mx-auto px-6">

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-14 text-pink-500"
        >
          {language === "EN" ? "Skills & Expertise " : "Keahlian "}
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-md p-8 border border-pink-100 hover:shadow-2xl transition-all duration-300"
            >

              <div className="text-pink-500 mb-4">
                {skill.icon}
              </div>

              <h4 className="font-semibold text-lg mb-2 text-pink-500">
                {skill.title}
              </h4>

              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}