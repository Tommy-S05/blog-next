import Link from "next/link";

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
export default function Navbar() {
    return (
        <nav className={'h-[100px] flex justify-between items-center'}>
            <Link href={"/"} className={'font-bold text-[22px]'}>
                lamamia
            </Link>
            <div className={'flex items-center gap-6'}>
                {/*<DarkModeToggle />*/}
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={''}>
                        {link.title}
                    </Link>
                ))}
                {/*{session.status === "authenticated" && (*/}
                <button className={'bg-[#53c28b] p-1 text-white cursor-pointer rounded'}>
                    Logout
                </button>
                {/*)}*/}
            </div>
        </nav>
    )
}