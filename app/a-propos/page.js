import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>À propos de moi</h1>
      
      <div className={styles.content}>
        <div className={styles.bio}>
          <h2>Qui suis-je ?</h2>
          <p>
            Développeur web passionné avec 3 ans d'expérience dans la création
            de site internet modernes et performants. Spécialisé dans l'écosystème
            Front-end.
          </p>
          <p>
            J'aime transformer des idées en site web concrets avec
            des intéractions utilisateurs.
          </p>
          <p>
            En dehors du code, je suis un passionné de design et de nouvelles
            technologies, toujours à la recherche de nouvelles façons d'améliorer mes compétences.
          </p>
        </div>

        <div className={styles.skills}>
          <h2>Compétences</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend</h3>
              <ul>
                <li>HTML5 & CSS3</li>
                <li>React & Next.js</li>
                <li>JavaScript ES6+</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className={styles.skillCategory}>
              <h3>Backend</h3>
              <ul>
                <li>PHP</li>
              </ul>
            </div>

            <div className={styles.skillCategory}>
              <h3>Outils</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Spline 3D</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
