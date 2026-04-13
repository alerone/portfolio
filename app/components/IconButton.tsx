import { type ComponentType, type SVGProps } from "react"

type IconButtonProps = {
    onClick: () => void
    className?: string,
    icon: ComponentType<SVGProps<SVGSVGElement>>
}
export function IconButton({ onClick, className = "bg-transparent", icon: Icon }: IconButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`transition-all duration-200 ease-out hover:scale-90 opacity-90 rounded-lg h-[34px] w-[34px] items-center justify-center flex ${className}`}
            type="button"
        >
            <Icon height={28} width={28} />
        </button>
    )
}
