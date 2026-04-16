import { NavLink } from "react-router";

type NavButtonProps = {
    to: string;
    label: string;
    isEnd?: boolean;
};

export function NavButton({ to, label, isEnd }: NavButtonProps) {
    return (
        <NavLink
            to={to}
            end={isEnd}
            className={({ isActive }) =>
                [
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 text-center",
                    isActive
                        ? "bg-white text-neutral-950 shadow-sm"
                        : "text-white/72 hover:bg-white/[0.08] hover:text-white",
                ].join(" ")
            }
        >
            {label}
        </NavLink>
    );
}
