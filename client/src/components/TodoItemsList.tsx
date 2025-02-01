import { List } from "./List";
import { ITodoItem } from "../types";

interface IProps {
    items: ITodoItem[];
}

export const TodoItemsList = ({ items }: IProps) => {
    return <List>{JSON.stringify(items)}</List>;
};
