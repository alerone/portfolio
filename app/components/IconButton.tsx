import { cloneElement, type ReactElement, type SVGProps } from "react"

type IconButtonProps = {
    href: string,
    bg?: string,
    icon: ReactElement<SVGProps<SVGSVGElement>>
}
export function IconButton({ href, bg = "bg-transparent", icon }: IconButtonProps) {
    const sizedIcon = cloneElement(icon, {
        height: 28,
        width: 28,
    });

    return (<a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`transition-all duration-200 ease-out hover:scale-90 opacity-90 rounded-lg h-[34px] w-[34px] items-center justify-center flex  ${bg}`}
    >
        {sizedIcon}
    </a>
    )
}
