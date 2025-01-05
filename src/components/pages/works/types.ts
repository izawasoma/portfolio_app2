export type Content = {
    url: string,
    contentsType: ContentsType;
}

export enum ContentsType {
    Video = "video",
    Image = "image",
    Audio = "audio",
}

export type Work = {
    title: string,
    tags: string[],
    contents: Content[],
    description: string,
}
