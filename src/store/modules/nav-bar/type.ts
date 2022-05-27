export interface TagProps {
    name: string;
    path: string;
    fullPath: string;
    title: string;
}
export interface NavBarState {
    tagList: TagProps[]
}