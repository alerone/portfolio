import { useEffect, useState } from "react";

export function useScrollVisibility(ratio: number = 0.95) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight
            const docHeight = document.documentElement.scrollHeight

            const scrolled = ((scrollTop + windowHeight) / docHeight)
            setIsVisible(scrolled > ratio)
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [ratio]);

    return isVisible;
}
