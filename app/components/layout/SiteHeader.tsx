import { useMediaQuery } from "usehooks-ts";
import { NavButton } from "~/components/NavButton";
import { PortfolioTitle } from "~/components/PortfolioTitle";
import { Drawer } from "./Drawer";
import { useIsDesktop } from "~/hooks/useIsDesktop";

export function SiteHeader() {
    const isDesktop = useIsDesktop()
    return (
        <header className="bg-gradient-to-r from-primary-800  via-primary-700 to-primary-800">
            <nav className="items-center justify-between p-4 flex gap-2">
                <PortfolioTitle />
                {isDesktop ? <DesktopHeader /> : <Drawer />}
            </nav>
        </header>
    );
}

function DesktopHeader() {
    return (
        <div className="gap-3 flex">
            <NavButton isEnd to="/" label="Home" />
            <NavButton to="/technologies" label="Technologies" />
            <NavButton to="/projects" label="Projects" />
            <NavButton to="/experience" label="Experience" />
        </div>
    )
}
