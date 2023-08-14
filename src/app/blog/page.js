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

export default async function Blog() {
    const data = await getData();
    return (
        <section>
            {
                data?.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className={'flex items-center gap-12 mb-12'}>
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
                                {post.title}
                            </h1>
                            <p className={'text-base text-[#999]'}>
                                {post.body}
                            </p>
                        </article>
                    </Link>
                ))
            }
        
        </section>
    )
}