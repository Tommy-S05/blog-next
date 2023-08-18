'use client'
import useSWR from "swr";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Image from "next/image";

export default function Dashboard() {
    //OLD WAY TO FETCH DATA
    
    // const [data, setData] = useState([]);
    // const [err, setErr] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    
    // useEffect(() => {
    //   const getData = async () => {
    //     setIsLoading(true);
    //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //       cache: "no-store",
    //     });
    
    //     if (!res.ok) {
    //       setErr(true);
    //     }
    
    //     const data = await res.json()
    
    //     setData(data);
    //     setIsLoading(false);
    //   };
    //   getData()
    // }, []);
    // const fetcher = (...args) => fetch(...args).then(res => res.json())
    // const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
    
    const session = useSession();
    const router = useRouter();
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    
    const {data, mutate, error, isLoading} = useSWR(
        `/api/posts?username=${session?.data?.user.name}`,
        fetcher
    );
    
    if(session.status === "unauthenticated") {
        router?.push("/dashboard/login");
    }
    
    if(session.status === "loading") {
        return <p className={'flex items-center justify-center'}>Loading...</p>;
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;
        
        try {
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    desc,
                    img,
                    content,
                    username: session.data.user.name,
                }),
            });
            mutate();
            e.target.reset()
        } catch (err) {
        
        }
    };
    
    const handleDelete = async(id) => {
        try {
            await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });
            mutate();
        } catch (err) {
        
        }
    };
    
    return (
        <main className={'flex gap-24'}>
            <section className={'flex-1'}>
                {
                    isLoading ?
                        <p className={'flex items-center justify-center'}>Loading...</p>
                        :
                        data?.map((post) => (
                            <article key={post._id} className={'flex items-center justify-between my-12'}>
                                <div className={''}>
                                    <Image
                                        src={post.img}
                                        alt={post.title}
                                        width={200}
                                        height={100}
                                        className={'object-cover'}
                                    />
                                </div>
                                <h2 className={'text-xl font-bold'}>
                                    {post.title}
                                </h2>
                                <span
                                    className={'cursor-pointer text-red-600'}
                                    onClick={() => handleDelete(post._id)}
                                >
                                    X
                                </span>
                            </article>
                        ))
                }
            </section>
            <form
                className={'flex flex-1 flex-col gap-5'}
                onSubmit={handleSubmit}
            >
                <h1 className={'text-3xl font-bold'}>
                    Add New Post
                </h1>
                <input type="text" placeholder="Title"
                       className={'p-2.5 bg-transparent border-2 border-solid border-tertiary rounded text-xl font-bold text-tertiary'}/>
                <input type="text" placeholder="Desc"
                       className={'p-2.5 bg-transparent border-2 border-solid border-tertiary rounded text-xl font-bold text-tertiary'}/>
                <input type="text" placeholder="Image"
                       className={'p-2.5 bg-transparent border-2 border-solid border-tertiary rounded text-xl font-bold text-tertiary'}/>
                <textarea
                    placeholder="Content"
                    className={'p-2.5 bg-transparent border-2 border-solid border-tertiary rounded text-xl font-bold text-tertiary'}
                    cols="30"
                    rows="10"
                ></textarea>
                <button
                    className={'p-5 cursor-pointer bg-primary border-none rounded-md text-quaternary font-bold'}
                >
                    Send
                </button>
            </form>
        </main>
    )
}