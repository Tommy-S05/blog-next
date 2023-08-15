import Link from "next/link";
import Image from "next/image";


async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        next: {
            revalidate: 120
        }
        // cache: 'no-store'
    });
    
    if(!res.ok) {
        throw new Error(res.statusText);
    }
    
    return await res.json();
}

export const metadata = {
    title: 'Asta Blog - Blog',
    description: 'Asta Blog Blog is the blog page of Asta Blog.',
}

export default async function Blog() {
    const data = await getData();
    return (
        <section>
            {
                data?.map((post) => (
                    <Link key={post._id} href={`/blog/${post._id}`} className={'flex items-center gap-12 mb-12'}>
                        <article>
                            <Image
                                src={post.img}
                                alt={''}
                                width={500}
                                height={250}
                                className={'object-cover'}
                            />
                        </article>
                        <article>
                            <h1 className={'text-3xl font-bold mb-2.5'}>
                                {post.title}
                            </h1>
                            <p className={'text-base text-[#999]'}>
                                {post.desc}
                            </p>
                        </article>
                    </Link>
                ))
            }
        
        </section>
    )
}