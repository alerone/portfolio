import { cloneElement } from "react";
import type { IconResource } from "~/resources/resources";

type IconHrefProps = {
    height?: number;
    width?: number;
    label?: string;
    icon: IconResource;
    href: string;
    iconFirst?: boolean
};

export function IconHref({ height = 24, width = 24, icon, label, href, iconFirst }: IconHrefProps) {
    const sizedIcon = cloneElement(icon.icon, {
        height,
        width,
    });

    return (
        <a
            className="items-center gap-1 inline-flex"
            href={href}
            target="_blank"
            rel="noreferrer"
        >
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
        </a>
    );
}

