export interface LinkBundle {
    name: string
    href: string
}

export interface Service {
    name: string
    description: string
    links: Array<LinkBundle>
}
