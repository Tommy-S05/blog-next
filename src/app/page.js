import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button";
import styles from './page.module.css';
// import {getServerSession} from "next-auth";
// import {handler} from "@/app/api/auth/[...nextauth]/route";

export default function Home() {
    return (
        <article className={'flex items-center gap-24'}>
            <section className={'flex flex-1 flex-col gap-12'}>
                <h1 className={'text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb] text-transparent bg-clip-text'}>
                    Better design for your digital products.
                </h1>
                <p className={'text-base font-light'}>
                    Turning your Idea into Reality. We bring together the teams from the
                    global tech industry.
                </p>
                <Button url="/portfolio" text="See Our Works"/>
            </section>
            <section className={'flex flex-1 flex-col gap-12'}>
                <Image
                    priority={true}
                    src={Hero}
                    alt={"Hero"}
                    className={`w-full h-[500px] object-contain ${styles.image}`}
                />
            </section>
        </article>
    )
}
