import type { ReactNode } from "react";

type AdminResponsiveListProps<T> = {
    items: T[];
    getKey: (item: T) => string;
    renderMobileCard: (item: T) => ReactNode;
    renderDesktopTable: () => ReactNode;
};

export function AdminResponsiveList<T>({
    items,
    getKey,
    renderMobileCard,
    renderDesktopTable,
}: AdminResponsiveListProps<T>) {
    return (
        <>
            <div className="flex flex-col gap-3 md:hidden">
                {items.map((item) => (
                    <div key={getKey(item)}>{renderMobileCard(item)}</div>
                ))}
            </div>

            <div className="hidden md:block">
                {renderDesktopTable()}
            </div>
        </>
    );
}
