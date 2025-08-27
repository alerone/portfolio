import { useEffect, useState } from "react";

export function useGetRandomBoolean() {
    const [random, setRandom] = useState(false);

    useEffect(() => {
        setRandom(Math.random() > 0.5);
    }, []);

    return random;
}
