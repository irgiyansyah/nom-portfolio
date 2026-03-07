"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award } from "lucide-react"

type Props = {
  language: string
}

export default function Achievement({ language }: Props) {

  const achievementsEN = [
    {
      title: "YBM PLN Scholarship",
      desc: "Recipient of the YBM PLN scholarship awarded to outstanding students to support their academic journey and personal development.",
      image: "/achievement/academic.jpg",
      badge: "Scholarship"
    },
    {
      title: "Baznas Scholarship",
      desc: "Recipient of the BAZNAS scholarship which supports students in continuing their education and developing their academic potential.",
      image: "/achievement/seminar.jpg",
      badge: "Scholarship"
    }
  ]

  const achievementsID = [
    {
      title: "YBM PLN Scholarship",
      desc: "Penerima beasiswa dari YBM PLN yang diberikan kepada mahasiswa berprestasi untuk mendukung pendidikan dan pengembangan akademik.",
      image: "/achievement/academic.jpg",
      badge: "Beasiswa"
    },
    {
      title: "Baznas Scholarship",
      desc: "Penerima beasiswa dari BAZNAS sebagai bentuk dukungan terhadap mahasiswa dalam melanjutkan pendidikan dan mengembangkan potensi akademik.",
      image: "/achievement/seminar.jpg",
      badge: "Beasiswa"
    }
  ]

  const achievements = language === "EN" ? achievementsEN : achievementsID

  return (
    <section id="achievement" className="py-24 relative z-10">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center text-pink-500"
        >
          {language === "EN" ? "Achievements" : "Prestasi"}
        </motion.h3>

        {/* Subtitle */}
        <p className="text-gray-500 text-center mt-2 mb-12 text-sm">
          {language === "EN"
            ? "Academic awards and scholarships"
            : "Penghargaan dan beasiswa akademik"}
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white/70 backdrop-blur-lg rounded-3xl shadow-md border border-pink-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >

              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs flex items-center gap-1 text-pink-500 font-medium">
                  <Award size={14} />
                  {item.badge}
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h4 className="font-semibold text-lg mb-2 text-pink-500">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
} 