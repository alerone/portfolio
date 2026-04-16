import { useIsMounted } from "@/hooks/useIsMounted";
import type { SkillLevel } from "@/content/content-types";

const levels = {
    0: { color: "from-rose-800 to-rose-700", width: "w-1/5", label: "Very Basic" },
    1: { color: "from-rose-600 to-rose-500", width: "w-2/5", label: "Basic" },
    2: { color: "from-amber-600 to-amber-500", width: "w-3/5", label: "Medium" },
    3: { color: "from-sky-600 to-sky-500", width: "w-4/5", label: "Advanced" },
    4: { color: "from-emerald-600 to-emerald-500", width: "w-full", label: "Expert" },
};

export function LevelGauge({ level }: { level: SkillLevel }) {
    const currentLevel = levels[level];
    const isMounted = useIsMounted();

    return (
        <div className="w-[140px] xl:w-[160px]">
            <div className="h-2 overflow-hidden rounded-full bg-white/8">
                <div
                    className={`h-full rounded-full bg-gradient-to-r ${currentLevel.color} ${currentLevel.width} transition-all duration-700 ease-out ${isMounted ? "scale-x-100" : "scale-x-0"} origin-left`}
                />
            </div>
            <p className="mt-2 text-right text-[11px] uppercase tracking-[0.14em] text-white/45">
                {currentLevel.label}
            </p>
        </div>
    );
}
