import { useState } from "react";
import { X } from "lucide-react";

type TagInputProps = {
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    addOnBlur?: boolean;
};

export function TagInput({
    value,
    onChange,
    placeholder = "Write and press Enter",
    addOnBlur = true,
}: TagInputProps) {
    const [inputValue, setInputValue] = useState("");

    function addTag(rawValue: string) {
        const nextValue = rawValue.trim();
        if (!nextValue) return;
        if (value.includes(nextValue)) return;

        onChange([...value, nextValue]);
        setInputValue("");
    }

    function removeTag(tag: string) {
        onChange(value.filter((item) => item !== tag));
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            addTag(inputValue);
        }

        if (event.key === "Backspace" && !inputValue && value.length > 0) {
            removeTag(value[value.length - 1]);
        }
    }

    function handleBlur() {
        if (!addOnBlur) return;
        addTag(inputValue);
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3">
            <div className="flex flex-wrap gap-2">
                {value.map((tag) => (
                    <button
                        key={tag}
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/[0.1]"
                    >
                        {tag}
                        <X size={12} />
                    </button>
                ))}

                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    className="min-w-[180px] flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                />
            </div>
        </div>
    );
}
