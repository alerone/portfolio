import { assetURL } from "@/utils/assets";
import { NavLink } from "react-router";

export function PortfolioTitle() {
    return (
        <NavLink
            to="/"
            end
            className="flex gap-4 items-center leading-none"
        >
            <div className="relative inline-flex rounded-2xl p-[1px] bg-white/8 shadow-[0_6px_18px_rgba(255,255,255,0.04)]">
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                    <img
                        src={assetURL("favicon.png")}
                        width={60}
                        height={60}
                        className="rounded-xl object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute left-3 right-3 top-1 h-3 rounded-full bg-white/10 blur-sm" />
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-base font-semibold tracking-tight text-white">
                    Álvaro López
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                    Software Portfolio
                </span>
            </div>
        </NavLink>
    );
}
