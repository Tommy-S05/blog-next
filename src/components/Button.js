export default function Button({url, text}) {
    return (
        <Link href={url} className={'p-4 cursor-pointer bg-[#53c28b] border-none rounded w-max text-white'}>
            {text}
        </Link>
    
    )
}

import Link from "next/link";
