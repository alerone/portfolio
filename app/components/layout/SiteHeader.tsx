import { NavButton } from "~/components/NavButton";
import { PortfolioTitle } from "~/components/PortfolioTitle";

export function SiteHeader() {
    return (
        <header className="bg-gradient-to-r from-primary-800  via-primary-700 to-primary-800">
            <nav className="items-center justify-between p-4 flex gap-2">
                <PortfolioTitle />
                <div className="gap-3 flex">
                    <NavButton isEnd to="/" label="Home" />
                    <NavButton to="/technologies" label="Technologies" />
                    <NavButton to="/projects" label="Projects" />
                    <NavButton to="/experience" label="Experience" />
                </div>
            </nav>
        </header>
    );
}
