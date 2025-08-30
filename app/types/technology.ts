import type { SVGResourceKey } from "~/resources/resources"

export type LevelValues = 1 | 2 | 3 | 4
export type Technology = {
    id: string,
    name: string
    description: string
    icon?: SVGResourceKey
    href: string
    level: LevelValues
    keywords: string[]
    dontShow?: boolean
}
