export interface ITodoItem {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
}

export interface IData {
    data: ITodoItem[];
}
