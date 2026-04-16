import { NavButton } from "../NavButton";
import { ThreeDMe } from "../3DMe";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export function Drawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 border border-white/10 bg-white/[0.08] text-white hover:bg-white/[0.12] hover:text-white"
                >
                    <Menu size={18} />
                    <span className="sr-only">Open navigation menu</span>
                </Button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="w-72 border-r border-white/10 bg-[#12131a] px-0 text-white"
            >
                <SheetHeader className="border-b border-white/10 px-4 pb-4">
                    <SheetTitle className="text-left text-sm font-semibold text-white/85">
                        Navigation
                    </SheetTitle>
                </SheetHeader>

                <div className="flex h-full flex-col">
                    <nav className="flex flex-col gap-2 p-4">
                        <SheetClose asChild>
                            <NavButton isEnd to="/" label="Home" variant="drawer" />
                        </SheetClose>

                        <SheetClose asChild>
                            <NavButton to="/technologies" label="Technologies" variant="drawer" />
                        </SheetClose>

                        <SheetClose asChild>
                            <NavButton to="/projects" label="Projects" variant="drawer" />
                        </SheetClose>

                        <SheetClose asChild>
                            <NavButton to="/experience" label="Experience" variant="drawer" />
                        </SheetClose>

                        <SheetClose asChild>
                            <NavButton to="/education" label="Education" variant="drawer" />
                        </SheetClose>
                    </nav>

                    <div className="border-t border-white/10 p-4">
                        <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-white/10 bg-black/20 py-3">
                            <ThreeDMe size={225} />
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
