import { NavLink } from "react-router";

export function PortfolioTitle() {
    return (
        <NavLink
            to="/"
            end
            className="flex flex-col leading-none"
        >
            <span className="text-base font-semibold tracking-tight text-white">
                Álvaro López
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                Software Portfolio
            </span>
        </NavLink>
    );
}
