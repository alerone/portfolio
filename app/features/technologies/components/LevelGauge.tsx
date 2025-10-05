import { useIsMounted } from "~/hooks/useIsMounted";
import type { LevelValues } from "~/types/technology";

const levels = {
    0: { color: "from-rose-800 to-rose-700", width: "w-1/5", label: "Very Basic" },
    1: { color: "from-rose-600 to-rose-500", width: "w-2/5", label: "Basic" },
    2: { color: "from-amber-600 to-amber-500", width: "w-3/5", label: "Medium" },
    3: { color: "from-sky-600 to-sky-500", width: "w-4/5", label: "Advanced" },
    4: { color: "from-emerald-600 to-emerald-500", width: "w-full", label: "Expert" },
}
export function LevelGauge({ level }: { level: LevelValues }) {
    const currentLevel = levels[level]
    const isMounted = useIsMounted()
    return (
        <div className="w-xs xl:w-sm flex flex-row gap-2 opacity-90">
            <div className={`bg-gradient-to-r ${currentLevel.color} ${currentLevel.width} 
                        rounded-lg h-full transition-all transform origin-left ease-out duration-1000 px-2
                        ${isMounted ? "scale-x-100" : "scale-x-0"}`}
            >
                <h2 className="text-white font-semibold text-xs">{currentLevel.label}</h2>
            </div>
        </div>
    )
}
