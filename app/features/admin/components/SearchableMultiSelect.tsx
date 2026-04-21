import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X, ChevronDown, Check } from "lucide-react";

export type SearchableMultiSelectOption = {
    value: string;
    label: string;
};

type SearchableMultiSelectProps = {
    value: string[];
    onChange: (value: string[]) => void;
    options: SearchableMultiSelectOption[];
    placeholder?: string;
    emptyLabel?: string;
    title?: string;
    onOpenChange?: (open: boolean) => void;
};

export function SearchableMultiSelect({
    value,
    onChange,
    options,
    placeholder = "Search...",
    emptyLabel = "No options found",
    title,
    onOpenChange,
}: SearchableMultiSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const containerRef = useRef<HTMLDivElement | null>(null);

    const selectedOptions = useMemo(() => {
        return options.filter((option) => value.includes(option.value));
    }, [options, value]);

    const filteredOptions = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return options.filter((option) =>
            option.label.toLowerCase().includes(normalizedQuery)
        );
    }, [options, query]);

    useEffect(() => {
        onOpenChange?.(isOpen);
    }, [isOpen, onOpenChange]);

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

    function toggleOption(nextValue: string) {
        if (value.includes(nextValue)) {
            onChange(value.filter((item) => item !== nextValue));
            return;
        }

        onChange([...value, nextValue]);
    }

    function removeValue(nextValue: string) {
        onChange(value.filter((item) => item !== nextValue));
    }

    function clearAll() {
        onChange([]);
    }

    return (
        <div ref={containerRef} className={`relative ${isOpen ? "z-[80]" : "z-0"}`}>
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex min-h-12 w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm text-white"
            >
                <div className="min-w-0">
                    {selectedOptions.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {selectedOptions.map((option) => (
                                <span
                                    key={option.value}
                                    className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-white/80"
                                >
                                    {option.label}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <span className="text-white/45">
                            {title ? `Select ${title.toLowerCase()}` : "Select options"}
                        </span>
                    )}
                </div>

                <ChevronDown size={16} className="ml-3 shrink-0 text-white/45" />
            </button>

            {isOpen && (
                <div className="absolute left-0 right-0 top-full z-[90] mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#14151c] shadow-2xl">
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
                            {value.length > 0 && (
                                <button
                                    type="button"
                                    onClick={clearAll}
                                    className="rounded-full p-1 text-white/45 transition hover:bg-white/[0.08] hover:text-white"
                                    aria-label="Clear selection"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="max-h-72 overflow-y-auto p-2">
                        {filteredOptions.map((option) => {
                            const isSelected = value.includes(option.value);

                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => toggleOption(option.value)}
                                    className={[
                                        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition",
                                        isSelected
                                            ? "bg-white text-neutral-950"
                                            : "text-white/75 hover:bg-white/[0.06] hover:text-white",
                                    ].join(" ")}
                                >
                                    <span>{option.label}</span>
                                    {isSelected && <Check size={16} />}
                                </button>
                            );
                        })}

                        {filteredOptions.length === 0 && (
                            <div className="px-3 py-3 text-sm text-white/45">
                                {emptyLabel}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {selectedOptions.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {selectedOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => removeValue(option.value)}
                            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75 transition hover:bg-white/[0.08]"
                        >
                            {option.label}
                            <X size={12} />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
