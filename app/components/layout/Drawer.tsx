import { useState } from "react";
import { IconButton } from "../IconButton";
import { getSVGResource } from "~/resources/resources";
import { NavButton } from "../NavButton";
import { ThreeDMe } from "../3DMe";

export function Drawer() {
    const [isOpen, setIsOpen] = useState(false)
    const menuIcon = getSVGResource("menu").icon
    const closeIcon = getSVGResource("close").icon

    return (
        <div className="relative">
            <IconButton onClick={() => setIsOpen(prev => !prev)} className="bg-primary-700" icon={isOpen ? closeIcon : menuIcon} />
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-transparent z-40"
                />
            )}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-primary-800 to-primary-700  shadow-lg z-50 transform transition-transform ease-out duration-300
                        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <nav className="p-4 flex flex-col space-y-4">
                    <NavButton isEnd to="/" label="Home" />
                    <NavButton to="/technologies" label="Technologies" />
                    <NavButton to="/projects" label="Projects" />
                    <NavButton to="/experience" label="Experience" />
                </nav>
                <div className="h-full flex flex-1 z-50 ">
                    <ThreeDMe />
                </div>
            </div>
        </div>

    )
}


