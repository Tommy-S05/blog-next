import Link from "next/link";
import styles from './page.module.css'

export default function Portfolio() {
    return (
        <section className={'space-y-5 mt-5'}>
            <h1 className={'text-3xl'}>
                Choose a gallery
            </h1>
            <article className={'flex gap-12'}>
                <Link href="/portfolio/illustrations"
                      className={`relative text-white border-4 border-solid border-[#bbb] rounded-md w-[300px] h-[400px] bg-cover ${styles.item}`}
                      style={{backgroundImage: "url('/illustration.png')"}}
                >
                    <span
                        className={`absolute right-2.5 bottom-2.5 text-4xl font-bold ${styles.title}`}>Illustrations</span>
                </Link>
                <Link href="/portfolio/websites"
                      className={`relative text-white border-4 border-[#bbb] rounded w-[300px] h-[400px] bg-cover ${styles.item}`}
                      style={{backgroundImage: "url('/websites.png')"}}
                >
                    <span className={`absolute right-2.5 bottom-2.5 text-4xl font-bold ${styles.title}`}>Websites</span>
                </Link>
                <Link href="/portfolio/applications"
                      className={`relative text-white border-4 border-[#bbb] rounded w-[300px] h-[400px] bg-cover ${styles.item}`}
                      style={{backgroundImage: "url('/apps.png')"}}
                >
                    <span
                        className={`absolute right-2.5 bottom-2.5 text-4xl font-bold ${styles.title}`}>Application</span>
                </Link>
            </article>
        </section>
    )
}