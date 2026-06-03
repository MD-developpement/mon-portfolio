import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import projectsData from '@/data/projects.json'
import Tag from '@/components/Tag/Tag'

export const metadata = {
  title: 'Mes Projets | Portfolio',
  description: 'Découvrez mes projets de développement web : applications React, sites Next.js et plus encore.',
}

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mes Projets</h1>
            <p className={styles.description}>
                Découvrez les projets sur lesquels j'ai travaillé
            </p>

            <div className={styles.grid}>
                {projectsData.map((project) => (
                    <Link
                        href={`/projets/${project.slug}`}
                        key={project.id}
                        className={styles.card}
                    >
                        <div className={styles.imageWrapper}>
                           <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={500}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h2>{project.title}</h2>
                            <p>{project.shortDescription}</p>
                            <div className={styles.tags}>
                                {project.tags.map((tech, index) => (
                                   <Tag key={index} isDark={true}>{tech}</Tag>
                                ))}
                            </div>
                            <span className={styles.viewMore}>Voir le projet →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

// Cette fonction génère toutes les pages statiques au build
export function generateStaticParams() {
   return projectsData.map((project) => ({
       slug: project.slug,
   }))
}