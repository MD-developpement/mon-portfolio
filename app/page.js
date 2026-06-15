import styles from "./page.module.css"
import Tag from "../components/Tag/Tag"

const technologies = [
  "React",
  "Next.js",
  "Html",
  "Css",
  "Javascript",
]

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Bonjour, je suis <span className={styles.highlight}>
            <span>M</span>
            <span>a</span>
            <span>t</span>
            <span>h</span>
            <span>i</span>
            <span>e</span>
            <span>u</span>
            <span> </span>
            <span>D</span>
            <span>u</span>
            <span>g</span>
            <span>u</span>
            <span>e</span>
            <span>t</span>
          </span>
        </h1>
        <p className={styles.heroSubtitle}>
          Développeur Web Front-end
        </p>
        <p className={styles.heroDescription}>
          Je crée des sites web modernes, performantes et accessibles
          avec React, Next.js et Html-Css.
        </p>
        <div className={styles.heroButtons}>
          <a href="http://localhost:3000/projets" className={`${styles.btn} ${styles.btnPrimary}`}>
            Voir mes projets
          </a>
          <a href="http://localhost:3000/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
          </a>
        </div>
        <div className={styles.tagsContainer}>
          {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}