'use client'
import useSWR from "swr";

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
    
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    
    const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
    
    console.log(data);
    return (
        <main className={""}>
            Dashboard
        </main>
    )
}