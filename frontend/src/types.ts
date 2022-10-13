
export interface User {
    id: number,
    name: string,
    email: string,
}

export enum LoadingStatus {
    ShouldLoad,
    Loading,
    Done,
}