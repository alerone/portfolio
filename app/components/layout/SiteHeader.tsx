import { NavButton } from "@/components/NavButton";
import { PortfolioTitle } from "@/components/PortfolioTitle";
import { Drawer } from "./Drawer";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export function SiteHeader() {
    const isDesktop = useIsDesktop();

    return (
        <header className="sticky top-0 z-50 border-b border-white/8 bg-neutral-950/80 backdrop-blur-xl">
            <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6 xl:px-8">
                <PortfolioTitle />
                {isDesktop ? <DesktopHeader /> : <Drawer />}
            </nav>
        </header>
    );
}

function DesktopHeader() {
    return (
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2 py-2">
            <NavButton isEnd to="/" label="Home" />
            <NavButton to="/technologies" label="Technologies" />
            <NavButton to="/projects" label="Projects" />
            <NavButton to="/experience" label="Experience" />
            <NavButton to="/education" label="Education" />
        </div>
    );
}
