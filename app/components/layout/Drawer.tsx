import { useState } from "react";
import { IconButton } from "../IconButton";
import { NavButton } from "../NavButton";
import { ThreeDMe } from "../3DMe";
import { Menu, X } from "lucide-react";

export function Drawer() {
    const [isOpen, setIsOpen] = useState(false);
    const MenuIcon = Menu;
    const CloseIcon = X;

    return (
        <div className="relative">
            <IconButton
                onClick={() => setIsOpen((prev) => !prev)}
                className="border border-white/10 bg-white/[0.08]"
                icon={isOpen ? CloseIcon : MenuIcon}
            />

            {isOpen && (
                <button
                    type="button"
                    aria-label="Close menu overlay"
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-40 bg-black/65"
                />
            )}

            <aside
                className={[
                    "fixed left-0 top-0 z-50 h-full w-72 border-r border-white/10",
                    "bg-[#111218] shadow-[0_0_40px_rgba(0,0,0,0.45)]",
                    "transform transition-transform duration-300 ease-out",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                ].join(" ")}
            >
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                        <span className="text-sm font-semibold text-white/85">Navigation</span>
                        <IconButton
                            onClick={() => setIsOpen(false)}
                            className="border border-white/10 bg-white/[0.06]"
                            icon={CloseIcon}
                        />
                    </div>

                    <nav className="flex flex-col gap-3 p-4">
                        <NavButton isEnd to="/" label="Home" />
                        <NavButton to="/technologies" label="Technologies" />
                        <NavButton to="/projects" label="Projects" />
                        <NavButton to="/experience" label="Experience" />
                    </nav>

                    <div className="mt-auto border-t border-white/10 p-4">
                        <div className="flex justify-center rounded-2xl bg-white/[0.03] py-4">
                            <ThreeDMe />
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
