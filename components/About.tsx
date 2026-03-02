"use client"

import { motion } from "framer-motion"

type Props = {
  language: string
}

export default function About({ language }: Props) {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-pink-100 hover:shadow-2xl transition duration-300"
        >
          <h3 className="text-3xl font-semibold mb-6 text-pink-500">
            {language === "EN" ? "About Me " : "Tentang Saya "}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            {language === "EN"
              ? <>
                  I am an <span className="text-pink-500 font-medium">Islamic Banking student</span> 
                  who is passionate about ethical finance, sustainable economic growth, 
                  and integrity driven financial systems. I strongly believe that financial 
                  institutions should not only focus on profit, but also on social justice 
                  and long-term sustainability.
                </>
              : <>
                  Saya adalah <span className="text-pink-500 font-medium">mahasiswi Perbankan Syariah</span> 
                  yang memiliki minat besar pada keuangan berbasis etika, pertumbuhan ekonomi 
                  berkelanjutan, dan sistem keuangan yang menjunjung tinggi integritas. 
                  Saya percaya bahwa lembaga keuangan tidak hanya berorientasi pada keuntungan, 
                  tetapi juga pada keadilan sosial dan keberlanjutan jangka panjang.
                </>
            }
          </p>

          <p className="text-gray-600 leading-relaxed">
            {language === "EN"
              ? <>
                  My academic journey has strengthened my understanding of 
                  <span className="text-pink-500 font-medium"> Sharia principles</span>, 
                  risk analysis, and financial evaluation. I continuously seek opportunities 
                  to grow, collaborate, and contribute meaningfully in the field of 
                  Islamic finance and ethical investment.
                </>
              : <>
                  Perjalanan akademik saya memperkuat pemahaman tentang 
                  <span className="text-pink-500 font-medium"> prinsip-prinsip syariah</span>, 
                  analisis risiko, serta evaluasi keuangan. Saya terus berupaya 
                  mengembangkan diri, berkolaborasi, dan memberikan kontribusi nyata 
                  dalam bidang keuangan syariah dan investasi berbasis etika.
                </>
            }
          </p>

        </motion.div>

      </div>
    </section>
  )
}