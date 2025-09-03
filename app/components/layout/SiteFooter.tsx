import { getSVGResource } from "~/resources/resources";
import { IconHref } from "../IconHref";

export function SiteFooter({ isVisible }: { isVisible: boolean }) {
    const react = getSVGResource("react")
    const github = getSVGResource("github")
    return (
        <footer
            className={`
            fixed bottom-0 left-0 right-0 z-50
            bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800
            transition-transform duration-300 ease-in-out
            ${isVisible ? "translate-y-0" : "translate-y-full"}
        `}
        >
            <div className="xl:px-16 p-4 container flex flex-col opacity-70">
                <p className="text-sm">
                    Made with <IconHref icon={react} href={react.href} label="React" />
                </p>
                <p className="text-sm">
                    Hosted in <IconHref icon={github} href={github.href} label="Github Pages" />
                </p>
                <p className="text-sm">
                    @{new Date().getFullYear()} Álvaro López Álvarez. All rights reserved
                </p>
            </div>
        </footer>
    );
}
