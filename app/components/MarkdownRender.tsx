import ReactMarkdown from "react-markdown";

export function MarkdownRender({ content }: { content: string }) {
    return (
        <ReactMarkdown
            components={{
                h1: ({ children }) => (
                    <h1 className="first:mt-0 mt-8 mb-4 text-2xl font-bold tracking-tight text-white">
                        {children}
                    </h1>
                ),
                h2: ({ children }) => (
                    <h2 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-white">
                        {children}
                    </h2>
                ),
                h3: ({ children }) => (
                    <h3 className="mt-6 mb-3 text-lg font-semibold tracking-tight text-white">
                        {children}
                    </h3>
                ),
                p: ({ children }) => (
                    <p className="mb-4 text-sm leading-8 text-white/74 xl:text-base">
                        {children}
                    </p>
                ),
                ul: ({ children }) => (
                    <ul className="mb-5 ml-5 list-disc space-y-2 text-sm leading-7 text-white/74 marker:text-white/35 xl:text-base">
                        {children}
                    </ul>
                ),
                ol: ({ children }) => (
                    <ol className="mb-5 ml-5 list-decimal space-y-2 text-sm leading-7 text-white/74 marker:text-white/45 xl:text-base">
                        {children}
                    </ol>
                ),
                li: ({ children }) => <li>{children}</li>,
                strong: ({ children }) => (
                    <strong className="font-semibold text-white">{children}</strong>
                ),
                a: ({ children, href }) => (
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/70"
                    >
                        {children}
                    </a>
                ),
                hr: () => <hr className="my-8 border-white/10" />,
                blockquote: ({ children }) => (
                    <blockquote className="my-6 border-l-2 border-white/15 pl-4 italic text-white/65">
                        {children}
                    </blockquote>
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    )
}
