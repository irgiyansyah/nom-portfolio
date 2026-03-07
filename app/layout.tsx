import "./globals.css"

export const metadata = {
  title: "Nom's Portfolio",
  description: "Naumira Assahra Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 text-gray-800">

        {/* Glow Background */}
        <div className="pointer-events-none fixed top-[-150px] left-[-150px] w-[400px] h-[400px] bg-pink-300 rounded-full blur-[120px] opacity-40"></div>

        <div className="pointer-events-none fixed bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-pink-200 rounded-full blur-[120px] opacity-40"></div>

        {children}

      </body>
    </html>
  )
}