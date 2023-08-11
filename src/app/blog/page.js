import Link from "next/link";
import Image from "next/image";

export default function Blog() {
    return (
        <section>
            <Link href={'/blog/testID'} className={'flex items-center gap-12 mb-12'}>
                <article>
                    <Image
                        src={'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                        alt={''}
                        width={500}
                        height={250}
                        className={'object-cover'}
                    />
                </article>
                <article>
                    <h1 className={'text-3xl font-bold mb-2.5'}>
                        Test
                    </h1>
                    <p className={'text-base text-[#999]'}>
                        Description
                    </p>
                </article>
            </Link>
            <Link href={'/blog/testID'} className={'flex items-center gap-12 mb-12'}>
                <article>
                    <Image
                        src={'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                        alt={''}
                        width={500}
                        height={250}
                        className={'object-cover'}
                    />
                </article>
                <article>
                    <h1 className={'text-3xl font-bold mb-2.5'}>
                        Test
                    </h1>
                    <p className={'text-base text-[#999]'}>
                        Description
                    </p>
                </article>
            </Link>
        </section>
    )
}