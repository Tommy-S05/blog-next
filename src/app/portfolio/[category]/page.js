import Button from "@/components/Button";
import Image from "next/image";
import styles from './page.module.css'
import {notFound} from "next/navigation";
// import {items} from "@/app/portfolio/[category]/data";
import {items} from "./data";

function getData(category) {
    const data = items[category];
    if(!data) {
        return notFound();
    }
    
    return data;
}

export default function PortfolioCategory({params}) {
    const data = getData(params.category);
    
    return (
        <section>
            <h1 className={'text-3xl font-bold text-[#53c28b]'}>
                {params.category}
            </h1>
            {
                data?.map((item) => (
                    <article key={item.id} className={`${styles.item} flex gap-12 mt-12 mb-24`}>
                        <section className={'flex-1 flex flex-col gap-5 justify-center'}>
                            <h1 className={'text-5xl font-bold'}>
                                {item.title}
                            </h1>
                            <p className={'text-xl'}>
                                {item.desc}
                            </p>
                            <Button text={'See More'} url={'#'}/>
                        </section>
                        <section className={'relative h-[500px] flex-1'}>
                            <Image
                                priority={true}
                                src={item.image}
                                alt={item.title}
                                fill={true}
                                className={'object-cover'}
                            />
                        </section>
                    </article>
                ))
            }
        </section>
    )
}