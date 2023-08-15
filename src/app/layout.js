import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ThemeProvider} from "@/context/ThemeContext";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Asta Blog',
    description: 'Asta Blog is a blog about web development and programming.',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider>
            <main className={`max-w-[1366px] min-h-screen mx-auto py-0 px-[60px] flex flex-col justify-between`}>
                <Navbar/>
                {children}
                <Footer/>
            </main>
        </ThemeProvider>
        </body>
        </html>
    )
}
