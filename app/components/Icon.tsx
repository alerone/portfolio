import { cloneElement, type ReactElement } from "react";
import type { IconResource } from "@/resources/logos";

type IconLike = {
    icon: ReactElement
}

type IconProps = {
    height?: number;
    width?: number;
    label?: string;
    icon: IconLike;
    iconFirst?: boolean;
};

export function Icon({ height = 24, width = 24, icon, label, iconFirst }: IconProps) {
    if (!icon?.icon) {
        return label ? <span>{label}</span> : null;
    }
    const sizedIcon = cloneElement(icon.icon, {
        height,
        width,
    });

    return (
        <div className="gap-1 items-center inline-flex flex-row" >
            {iconFirst ? (
                <>
                    {sizedIcon}
                    {label}
                </>
            ) : (
                <>
                    {label}
                    {sizedIcon}
                </>
            )
            }
        </div>
    );
}
