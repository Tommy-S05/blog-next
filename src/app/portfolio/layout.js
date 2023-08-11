export default function PortfolioLayout({children}) {
    return (
        <section>
            <h1 className={'text-8xl font-bold'}>
                Our Works
            </h1>
            {children}
        </section>
    )
}