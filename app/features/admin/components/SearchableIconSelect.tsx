import { useEffect, useMemo, useRef, useState } from "react";
import { getLogo, getLogoOptions } from "@/resources/logos";
import { Icon } from "@/components/Icon";
import { Search, X, ChevronDown } from "lucide-react";

type SearchableIconSelectProps = {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    emptyLabel?: string;
};

export function SearchableIconSelect({
    value = "",
    onChange,
    placeholder = "Search icon...",
    emptyLabel = "No icon",
}: SearchableIconSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const containerRef = useRef<HTMLDivElement | null>(null);

    const selectedLogo = getLogo(value);

    const options = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return getLogoOptions().filter((option) =>
            option.label.toLowerCase().includes(normalizedQuery)
        );
    }, [query]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!containerRef.current) return;
            if (!containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleSelect(nextValue: string) {
        onChange(nextValue);
        setIsOpen(false);
        setQuery("");
    }

    function handleClear() {
        onChange("");
        setQuery("");
        setIsOpen(false);
    }

    return (
        <div ref={containerRef} className="relative">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex min-h-12 w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm text-white outline-none"
            >
                <div className="flex min-w-0 items-center gap-3">
                    {selectedLogo ? (
                        <Icon icon={selectedLogo} height={18} width={18} />
                    ) : (
                        <span className="text-white/35">—</span>
                    )}

                    <span className={value ? "text-white" : "text-white/45"}>
                        {value || emptyLabel}
                    </span>
                </div>

                <ChevronDown size={16} className="shrink-0 text-white/45" />
            </button>

            {isOpen && (
                <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#14151c] shadow-2xl">
                    <div className="border-b border-white/10 p-3">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                            <Search size={15} className="text-white/40" />
                            <input
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={placeholder}
                                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                            />
                            {value && (
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="rounded-full p-1 text-white/45 transition hover:bg-white/[0.08] hover:text-white"
                                    aria-label="Clear icon"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="max-h-72 overflow-y-auto p-2">
                        <button
                            type="button"
                            onClick={() => handleSelect("")}
                            className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/[0.06] hover:text-white"
                        >
                            <span className="text-white/35">—</span>
                            {emptyLabel}
                        </button>

                        {options.map((option) => (
                            <button
                                key={option.key}
                                type="button"
                                onClick={() => handleSelect(option.key)}
                                className={[
                                    "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
                                    option.key === value
                                        ? "bg-white text-neutral-950"
                                        : "text-white/75 hover:bg-white/[0.06] hover:text-white",
                                ].join(" ")}
                            >
                                <Icon icon={option.icon} height={18} width={18} />
                                <span>{option.label}</span>
                            </button>
                        ))}

                        {options.length === 0 && (
                            <div className="px-3 py-3 text-sm text-white/45">
                                No icons found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
