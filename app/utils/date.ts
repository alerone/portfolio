export function formatDateRange(start: Date, end: Date): string {
    const format = (date: Date): string => {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");
        return `${yyyy}/${mm}/${dd}`;
    };

    return `${format(start)} - ${format(end)}`;
}

export function dateDiff(start: Date, end: Date): string {
    // Asegurar orden
    if (start > end) {
        [start, end] = [end, start];
    }

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        days += prevMonth;
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
    if (days > 0) parts.push(`${days} day${days > 1 ? "s" : ""}`);

    return parts.length > 0 ? parts.join(" ") : "0 days";
}


