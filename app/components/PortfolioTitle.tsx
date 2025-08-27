import { NavLink } from "react-router";

export function PortfolioTitle() {
    return (
        <NavLink
            to="/"
            end
            className={"font-semibold"}
        >
            Álvaro - Portfolio
        </NavLink>
    )
}
