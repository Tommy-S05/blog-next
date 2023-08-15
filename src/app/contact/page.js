import Button from "@/components/Button";
import Image from "next/image";
import styles from './page.module.css';

export const metadata = {
    title: 'Asta Blog - Contact Us',
    description: 'Asta Blog Contact Us is the contact page of Asta Blog.',
}
export default function Contact() {
    return (
        <section>
            <h1 className={'text-6xl font-bold m-20 text-center'}>
                Let's Keep in Touch
            </h1>
            <div className={'flex items-center gap-24'}>
                <div className={'flex-1 h-[500px] relative'}>
                    <Image
                        priority={true}
                        src="/contact.png"
                        alt=""
                        fill={true}
                        className={`object-contain ${styles.image}`}
                    />
                </div>
                <form className={'flex flex-1 flex-col gap-5'}>
                    <input className={styles.input} type="text" placeholder="name"/>
                    <input className={styles.input} type="text" placeholder="email"/>
                    <textarea
                        className={styles.input}
                        placeholder="message"
                        cols="30"
                        rows="10"
                    ></textarea>
                    <Button url="#" text="Send"/>
                </form>
            </div>
        </section>
    )
}