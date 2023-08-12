import Image from "next/image";
import Button from "@/components/Button";

export default function About() {
    return (
        <section className={""}>
            <section className={'relative w-full h-[300px]'}>
                <Image
                    priority={true}
                    src={'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                    alt={''}
                    fill={true}
                    className={'object-cover filter grayscale-[100%]'}
                />
                <div className={'absolute bottom-5 left-5 p-[5px] bg-[#53c28b] text-white'}>
                    <h1 className={'text-3xl font-bold'}>
                        Digital Storytellers
                    </h1>
                    <h2 className={'text-2xl font-bold'}>
                        Handcrafting award winning digital experiences
                    </h2>
                </div>
            </section>
            <article className={'flex gap-24'}>
                <div className={'flex flex-1 flex-col gap-7 mt-12'}>
                    <h1 className={'text-3xl font-bold'}>Who Are We?</h1>
                    <p className={'text-base text-justify font-light'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        <br/>
                        <br/>
                        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                        officiis voluptatum quo ea eveniet?
                    </p>
                </div>
                <div className={'flex flex-1 flex-col gap-7 mt-12'}>
                    <h1 className={'text-3xl font-bold'}>What We Do?</h1>
                    <p className={'text-base text-justify font-light'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br/>
                        <br/> - Dynamic Websites
                        <br/>
                        <br/> - Fast and Handy
                        <br/>
                        <br/> - Mobile Apps
                    </p>
                    <Button url="/contact" text="Contact"/>
                </div>
            </article>
        </section>
    )
}