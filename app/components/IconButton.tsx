import { cloneElement, type ReactElement, type SVGProps } from "react"

type IconButtonProps = {
    onClick: () => void
    className?: string,
    icon: ReactElement<SVGProps<SVGSVGElement>>
}
export function IconButton({ onClick, className = "bg-transparent", icon }: IconButtonProps) {
    const sizedIcon = cloneElement(icon, {
        height: 28,
        width: 28,
    });

    return (<button
        onClick={onClick}
        className={`transition-all duration-200 ease-out hover:scale-90 opacity-90 rounded-lg h-[34px] w-[34px] items-center justify-center flex  ${className}`}
    >
        {sizedIcon}
    </button>
    )
}
