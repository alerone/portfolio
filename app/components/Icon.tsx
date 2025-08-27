import { cloneElement, type ReactElement } from "react";
import type { IconResource } from "~/resources/resources";

type IconProps = {
    height?: number;
    width?: number;
    label?: string;
    icon: IconResource;
};

export function Icon({ height = 24, width = 24, icon, label }: IconProps) {
    const sizedIcon = cloneElement(icon.icon, {
        height,
        width,
    });

    return (
        <a className="gap-1 inline-flex flex-row" href={icon.href} target="_blank" rel="noreferrer">
            {label}
            {sizedIcon}
        </a>
    );
}
