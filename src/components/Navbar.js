import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";
import {getServerSession} from "next-auth";
import {handler} from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/components/LogoutButton";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];
export default async function Navbar() {
    const session = await getServerSession(handler)
    return (
        <nav className={'h-[100px] flex justify-between items-center'}>
            <Link href={"/"} className={'font-bold text-[22px]'}>
                AstaBlog
            </Link>
            <ul className={'flex items-center gap-6'}>
                <DarkModeToggle/>
                {links.map((link) => (
                    <li key={link.id} className={'hover:text-[#53c28b]'}>
                        <Link href={link.url} className={''}>
                            {link.title}
                        </Link>
                    </li>
                ))}
                {
                    session?.user ?
                        <LogoutButton/>
                        :
                        <Link href={"/dashboard/login"}>
                            <button className={'bg-[#53c28b] p-1 text-white cursor-pointer rounded'}>
                                Login
                            </button>
                        </Link>
                }
            </ul>
        </nav>
    )
}