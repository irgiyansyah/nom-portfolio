"use client"

import { useState } from "react"

type NavbarProps = {
  setLanguage: (lang: string) => void
}

export default function Navbar({ setLanguage }: NavbarProps) {
  const [active, setActive] = useState("Home")
  const [lang, setLang] = useState("EN")

  const menu = ["Home", "About", "Experience", "Skills", "Achievement"]

  const handleClick = (item: string) => {
    setActive(item)
    const section = document.getElementById(item.toLowerCase())
    section?.scrollIntoView({ behavior: "smooth" })
  }

  const changeLang = (language: string) => {
    setLang(language)
    setLanguage(language)
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/50 border-b border-pink-100">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-lg font-semibold text-pink-500 tracking-wide">
          Nom's Portfolio
        </h1>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-2 rounded-full shadow-sm border border-pink-100">

          {menu.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                active === item
                  ? "bg-pink-200 text-pink-600 font-medium"
                  : "text-gray-600 hover:text-pink-500 hover:bg-pink-50"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Language Switch */}
        <div className="flex items-center bg-white/70 backdrop-blur-md px-2 py-1 rounded-full shadow-sm border border-pink-100 text-sm">

          <button
            onClick={() => changeLang("EN")}
            className={`px-3 py-1 rounded-full transition ${
              lang === "EN"
                ? "bg-pink-200 text-pink-600"
                : "text-gray-500 hover:text-pink-500"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => changeLang("ID")}
            className={`px-3 py-1 rounded-full transition ${
              lang === "ID"
                ? "bg-pink-200 text-pink-600"
                : "text-gray-500 hover:text-pink-500"
            }`}
          >
            ID
          </button>

        </div>

      </div>

    </nav>
  )
}