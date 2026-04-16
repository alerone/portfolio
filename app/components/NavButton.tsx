import { forwardRef } from "react";
import { NavLink, type NavLinkProps } from "react-router";

type NavButtonVariant = "pill" | "drawer";

type NavButtonProps = {
    label: string;
    isEnd?: boolean;
    variant?: NavButtonVariant;
} & Omit<NavLinkProps, "className">;

export const NavButton = forwardRef<HTMLAnchorElement, NavButtonProps>(
    function NavButton(
        { to, label, isEnd, variant = "pill", ...props },
        ref
    ) {
        return (
            <NavLink
                ref={ref}
                to={to}
                end={isEnd}
                {...props}
                className={({ isActive }) => {
                    if (variant === "drawer") {
                        return [
                            "flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                            isActive
                                ? "bg-white text-neutral-950"
                                : "text-white/78 hover:bg-white/[0.08] hover:text-white",
                        ].join(" ");
                    }

                    return [
                        "rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 text-center",
                        isActive
                            ? "bg-white text-neutral-950 shadow-sm"
                            : "text-white/72 hover:bg-white/[0.08] hover:text-white",
                    ].join(" ");
                }}
            >
                {label}
            </NavLink>
        );
    }
);
