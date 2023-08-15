import Image from "next/image";
import {notFound} from "next/navigation";

async function getData(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
        next: {
            revalidate: 120
        }
        // cache: 'no-store'
    });
    
    if(!res.ok) {
        return notFound();
    }
    
    return await res.json();
}

export async function generateMetadata({params}) {
    
    const post = await getData(params.id)
    return {
        title: `Asta Blog - ${post.title}`,
        description: post.desc,
    };
}

export default async function BlogId({params}) {
    const data = await getData(params.id);
    return (
        <section>
            <article className={'flex'}>
                <section className={'flex flex-1 flex-col justify-between'}>
                    <h1 className={'text-5xl font-bold'}>
                        {data?.title}
                    </h1>
                    <p className={'text-base'}>
                        {data?.desc}
                    </p>
                    <div className={'flex items-center gap-2.5'}>
                        <Image
                            priority={true}
                            src={data.img}
                            alt={''}
                            width={40}
                            height={40}
                            className={'rounded-full object-cover'}
                        />
                        <span>{data?.username}</span>
                    </div>
                </section>
                <section className={'flex-1 h-[400px] relative'}>
                    <Image
                        src={data?.img}
                        alt={''}
                        fill={true}
                        className={'object-cover'}
                    />
                </section>
            </article>
            <article className={'mt-12 text-xl font-light text-[#999] text-justify'}>
                <p>
                    {data?.content}
                    {/*Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit*/}
                    {/*amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur*/}
                    {/*adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
                    {/*Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.*/}
                    {/*Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.*/}
                    
                    {/*Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit*/}
                    {/*amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur*/}
                    {/*adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
                    {/*Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.*/}
                    {/*Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.*/}
                    
                    {/*Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit*/}
                    {/*amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur*/}
                    {/*adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
                    {/*Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.*/}
                    {/*Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.*/}
                </p>
            </article>
        </section>
    )
}