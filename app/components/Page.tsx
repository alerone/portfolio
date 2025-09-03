import type { ReactNode } from "react"

type PageProps = {
    headerTitle: string,
    children: ReactNode,
    className?: string
}

export function Page({ headerTitle, children, className }: PageProps) {
    return (
        <>
            <header className={`flex items-center justify-center pt-16 pb-4`}>
                <h1 className="font-bold text-2xl xl:text-4xl">{headerTitle}</h1>
            </header>

            <main className={`relative container flex justify-center items-center ${className}`}>
                {children}
            </main>
        </>
    )
}
