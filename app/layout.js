import "./globals.css"
import Navigation from "@/components/Navigation/Navigation"
import Footer from "@/components/Footer/Footer"

export const metadata = {
  title: "Portfolio de Mathieu Duguet",
  description: "Développeur front-end passionné, créant des expériences web modernes et performantes. Découvrez mes projets et compétences en développement web.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}