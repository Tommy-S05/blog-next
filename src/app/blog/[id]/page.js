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
                        {data?.body}
                    </p>
                    <div className={'flex items-center gap-2.5'}>
                        <Image
                            priority={true}
                            src={'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                            alt={''}
                            width={40}
                            height={40}
                            className={'rounded-full object-cover'}
                        />
                        <span>Tommy Sánchez</span>
                    </div>
                </section>
                <section className={'flex-1 h-[400px] relative'}>
                    <Image
                        src={'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                        alt={''}
                        fill={true}
                        className={'object-cover'}
                    />
                </section>
            </article>
            <article className={'mt-12 text-xl font-light text-[#999] text-justify'}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>
            </article>
        </section>
    )
}