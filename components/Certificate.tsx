"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Award, ExternalLink, X } from "lucide-react"

type Props = {
  language: string
}

export default function Certificate({ language }: Props) {

  const [open, setOpen] = useState(false)

  const certificateEN = {
    title: "Project Management Fundamentals",
    issuer: "Dicoding Academy",
    date: "March 2026",
    image: "/certificate/dicoding-cert.jpg",
    link: "https://www.dicoding.com/certificates/1RXYWOR3KZVM"
  }

  const certificateID = {
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Academy",
    date: "Maret 2026",
    image: "/certificate/dicoding-cert.jpg",
    link: "https://www.dicoding.com/certificates/1RXYWOR3KZVM"
  }

  const cert = language === "EN" ? certificateEN : certificateID

  return (
    <section id="certificate" className="py-24 relative z-10">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center text-pink-500"
        >
          {language === "EN" ? "Certificate" : "Sertifikat"}
        </motion.h3>

        {/* Subtitle */}
        <p className="text-gray-500 text-center mt-2 mb-12 text-sm">
          {language === "EN"
            ? "Professional training and certifications"
            : "Pelatihan dan sertifikasi profesional"}
        </p>

        {/* Certificate Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="group max-w-md mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-md border border-pink-100 overflow-hidden hover:shadow-xl transition"
        >

          {/* Image */}
          <div
            onClick={() => setOpen(true)}
            className="relative w-full h-48 cursor-pointer overflow-hidden"
          >

            <Image
              src={cert.image}
              alt={cert.title}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            {/* Badge */}
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs flex items-center gap-1 text-pink-500 font-medium">
              <Award size={14} />
              Certificate
            </div>

          </div>

          {/* Content */}
          <div className="p-6 text-center">

            <h4 className="font-semibold text-lg text-pink-500">
              {cert.title}
            </h4>

            <p className="text-sm text-gray-500 mt-1">
              {cert.issuer}
            </p>

            <p className="text-xs text-gray-400 mt-1">
              {cert.date}
            </p>

            <a
              href={cert.link}
              target="_blank"
              className="inline-flex items-center gap-1 text-sm text-pink-500 mt-4 hover:underline"
            >
              Verify Certificate
              <ExternalLink size={14} />
            </a>

          </div>

        </motion.div>

      </div>

      {/* Modal Preview */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50 p-6"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full"
          >

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg transition"
            >
              <X size={20} />
            </button>

            <Image
              src={cert.image}
              alt="certificate"
              width={900}
              height={600}
              className="rounded-xl shadow-xl"
            />

          </div>

        </div>
      )}

    </section>
  )
}   