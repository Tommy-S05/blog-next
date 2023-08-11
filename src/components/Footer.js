import Image from "next/image";

export default function Footer() {
    return (
        <footer className={'h-[50px] flex items-center justify-between text-sm'}>
            <div>©2023 Lamamia. All rights reserved.</div>
            <div className={'flex items-center gap-3'}>
                <Image src="/1.png" width={15} height={15} className={'cursor-pointer opacity-60'}
                       alt="Lama Dev Facebook Account"/>
                <Image src="/2.png" width={15} height={15} className={'cursor-pointer opacity-60'} alt="Lama Dev"/>
                <Image src="/3.png" width={15} height={15} className={'cursor-pointer opacity-60'} alt="Lama Dev"/>
                <Image src="/4.png" width={15} height={15} className={'cursor-pointer opacity-60'} alt="Lama Dev"/>
            </div>
        </footer>
    )
}