"use client"

import { motion } from "framer-motion"

type Props = {
  language: string
}

export default function Skills({ language }: Props) {

  const skillsEN = [
    { title: "Islamic Finance", desc: "Understanding Sharia banking principles." },
    { title: "Financial Analysis", desc: "Risk and financial evaluation." },
    { title: "Communication", desc: "Strong interpersonal skills." }
  ]

  const skillsID = [
    { title: "Keuangan Syariah", desc: "Memahami prinsip perbankan syariah." },
    { title: "Analisis Keuangan", desc: "Evaluasi risiko dan laporan keuangan." },
    { title: "Komunikasi", desc: "Kemampuan komunikasi yang baik." }
  ]

  const skills = language === "EN" ? skillsEN : skillsID

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-12 text-pink-500"
        >
          {language === "EN" ? "Skills & Expertise ✨" : "Keahlian ✨"}
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-md p-6 border border-pink-100 hover:shadow-2xl transition duration-300"
            >
              <h4 className="font-semibold text-lg mb-2 text-pink-500">
                {skill.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}