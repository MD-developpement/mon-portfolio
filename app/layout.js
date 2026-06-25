import { Inter, Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/Navigation/Navigation"
import Footer from "@/components/Footer/Footer"



// Configurer Inter pour le texte courant
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Configurer Poppins pour les titres
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: "Portfolio de Mathieu Duguet",
  description: "Développeur front-end passionné, créant des expériences web modernes et performantes. Découvrez mes projets et compétences en développement web.",
}

export default function RootLayout({ children }) {
  return (
     <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}