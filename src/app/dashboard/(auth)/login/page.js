'use client'
import Link from "next/link";
import {signIn, useSession} from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function Login() {
    const session = useSession();
    const params = useSearchParams();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    useEffect(() => {
        setError(params.get("error"));
        setSuccess(params.get("success"));
    }, [params]);

    if (session.status === "authenticated") {
        router?.push("/dashboard");
    }

    if (session.status === "loading") {
        return <p className={'flex items-center justify-center'}>Loading...</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", {
            email,
            password,
        });
    };

    return (
        <section className={'flex flex-col items-center gap-5'}>
            <h1 className={'text-[#bbb] text-3xl font-bold'}>{success ? success : "Welcome Back"}</h1>
            <h2 className={'text-xl font-bold text-[#bbb] mb-7'}>Please sign in to see the dashboard.</h2>

            <form onSubmit={handleSubmit} className={'w-[300px] flex flex-col gap-5'}>
                <input
                    type="text"
                    placeholder="Email"
                    required
                    className={'p-5 bg-transparent border-2 border-solid border-[#bbb] rounded-md outline-none text-xl font-bold text-[#bbb]'}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={'p-5 bg-transparent border-2 border-solid border-[#bbb] rounded-md outline-none text-xl font-bold'}
                />
                <button
                    className={'w-[300px] p-5 cursor-pointer bg-primary border-none rounded-md text-quaternary font-bold hover:bg-secondary'}>
                    Login
                </button>
                {error && error}
            </form>
            <button
                onClick={() => {
                    signIn("google");
                }}
                className={'w-[300px] p-5 cursor-pointer border-none rounded-md text-quaternary font-bold hover:bg-custom-auth-hover bg-custom-auth'}
            >
                Login with Google
            </button>
            <span className={'text-tertiary'}>- OR -</span>
            <Link className={'underline text-[#7d7c7c] hover:text-custom-rgb'} href="/dashboard/register">
                Create new account
            </Link>
            {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
        </section>
    )
}