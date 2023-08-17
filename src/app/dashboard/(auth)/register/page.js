'use client'
import {useRouter} from "next/navigation";
import {useState} from "react";
import Link from "next/link";

export default function Register() {
    const [error, setError] = useState(null);
    
    const router = useRouter();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (err) {
            setError(err);
            console.log(err);
        }
    };
    
    return (
        <section className={'flex flex-col items-center justify-center gap-5'}>
            <h1 className={'text-tertiary text-3xl font-bold'}>Create an Account</h1>
            <h2 className={'text-xl font-bold text-tertiary mb-7'}>Please sign up to see the dashboard.</h2>
            <form onSubmit={handleSubmit} className={'w-[300px] flex flex-col gap-5'}>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    className={'p-5 bg-transparent border-2 border-solid border-tertiary rounded-md text-xl font-bold text-tertiary'}
                />
                <input
                    type="text"
                    placeholder="Email"
                    required
                    className={'p-5 bg-transparent border-2 border-solid border-tertiary rounded-md text-xl font-bold text-tertiary'}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={'p-5 bg-transparent border-2 border-solid border-tertiary rounded-md text-xl font-bold text-tertiary'}
                />
                <button
                    className={'w-[300px] p-5 cursor-pointer bg-primary border-none rounded-md text-quaternary font-bold'}>
                    Register
                </button>
                {error && "Something went wrong!"}
            </form>
            <span className={'text-tertiary'}>- OR -</span>
            <Link className={'underline text-[#7d7c7c] hover:text-custom-rgb'} href="/dashboard/login">
                Login with an existing account
            </Link>
        </section>
    )
}