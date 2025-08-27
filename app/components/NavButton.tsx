import { NavLink } from "react-router"

type NavButtonProps = {
    to: string,
    label: string,
    isEnd?: boolean
}
export function NavButton({ to, label, isEnd }: NavButtonProps) {
    const linkBase = `px-2 py-1 rounded-lg bg-primary-300 text-sm font-medium transition-opacity  duration-300`
    return (
        <NavLink
            to={to}
            end={isEnd}
            className={({ isActive }) =>
                `${linkBase} ${isActive ? "opacity-100" : "opacity-70 hover:cursor-pointer hover:opacity-100"}`
            }
        >
            {label}
        </NavLink>
    )
}
