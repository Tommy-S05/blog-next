import Button from "@/components/Button";
import Image from "next/image";
import styles from './page.module.css'

export default function PortfolioCategory({params}) {
    return (
        <section>
            <h1 className={'text-3xl font-bold text-[#53c28b]'}>
                {params.category}
            </h1>
            <article className={`${styles.item} flex gap-12 mt-12 mb-24`}>
                <section className={'flex-1 flex flex-col gap-5 justify-center'}>
                    <h1 className={'text-5xl font-bold'}>
                        Test
                    </h1>
                    <p className={'text-xl'}>
                        Description
                    </p>
                    <Button text={'See More'} url={'#'}/>
                </section>
                <section className={'relative h-[500px] flex-1'}>
                    <Image
                        src={'https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                        alt={''}
                        fill={true}
                        className={'object-cover'}
                    />
                </section>
            </article>
        </section>
    )
}