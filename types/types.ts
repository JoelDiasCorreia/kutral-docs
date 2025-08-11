
export type KuFolder = {
    id: string;
    name: string;
    description: string;
    icon: string;
    href: string;
    contents: KuDocument[]; // Optional array of documents in the folder

}

export type KuDocument = {
    id: string;
    name: string;
    description: string;
    href: string;
    folderId: string; // Reference to the folder it belongs to
    lastModified: number; // last modified date timestamp
    createdAt: number; // creation date timestamp
    size: number; // size in bytes
}