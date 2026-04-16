import { getLogo } from "@/resources/logos";
import { IconHref } from "../IconHref";

export function SiteFooter({ isVisible }: { isVisible: boolean }) {
    const react = getLogo("react");
    const github = getLogo("github");

    return (
        <footer
            className={[
                "fixed bottom-0 left-0 right-0 z-40 border-t border-white/12 bg-neutral-900/95 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl",
                "transition-transform duration-300 ease-in-out",
                isVisible ? "translate-y-0" : "translate-y-full",
            ].join(" ")}
        >
            <div className="container mx-auto flex flex-col gap-2 px-4 py-4 text-sm text-white/70 md:px-6 xl:px-8">
                <p>
                    Built with <IconHref icon={react} href={react.href} label="React" />
                </p>
                <p>
                    Hosted on <IconHref icon={github} href={github.href} label="GitHub Pages" />
                </p>
                <p>© {new Date().getFullYear()} Álvaro López Álvarez</p>
            </div>
        </footer>
    );
}
