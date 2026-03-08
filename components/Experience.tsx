"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Building2, Calendar } from "lucide-react"

type Props = {
  language: string
}

export default function Experience({ language }: Props) {

  const experienceEN = {
    title: "Finance Intern",
    role: "PT PLN (Persero) UP3 Palopo",
    date: "Jan 2026 – Feb 2026",
    desc: "During my internship at PLN (UP3 Palopo), I supported financial operations and reporting processes.",
    achievements: [
      "Managed petty cash records and financial documentation",
      "Monitored KPI performance related to financial operations",
      "Analyzed fund disbursement data to support reporting accuracy"
    ],
    image: "/experience/pengalamann.jpg"
  }

  const experienceID = {
    title: "Magang Keuangan",
    role: "PT PLN (Persero) UP3 Palopo",
    date: "Jan 2026 – Feb 2026",
    desc: "Selama magang di PLN (UP3 Palopo), saya mendukung proses operasional dan pelaporan keuangan.",
    achievements: [
      "Membantu pengelolaan kas kecil dan dokumentasi keuangan",
      "Memonitoring kinerja KPI terkait operasional keuangan",
      "Menganalisis data penyaluran dana untuk meningkatkan akurasi laporan"
    ],
    image: "/experience/pengalamann.jpg"
  }

  const exp = language === "EN" ? experienceEN : experienceID

  return (
    <section id="experience" className="py-24 relative z-10">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center text-pink-500"
        >
          {language === "EN" ? "Experience" : "Pengalaman"}
        </motion.h3>

        <p className="text-gray-500 text-center mt-2 mb-12 text-sm">
          {language === "EN" ? "" : ""}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="relative"
        >

          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-pink-100 p-6 grid md:grid-cols-2 gap-6 items-center transition-all duration-300 hover:shadow-pink-200">

            {/* Image */}
            <div className="group relative w-full h-64 rounded-2xl overflow-hidden">

              <Image
                src={exp.image}
                alt={exp.title}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            </div>

            {/* Content */}
            <div>

              <h4 className="text-xl font-semibold text-pink-500 mb-2">
                {exp.title}
              </h4>

              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Building2 size={16} />
                {exp.role}
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                <Calendar size={14} />
                {exp.date}
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {exp.desc}
              </p>

              <ul className="text-gray-600 text-sm space-y-2 list-disc pl-4">
                {exp.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}