import { List } from "./List";
import { ITodoItem } from "../types";
import { ListItem } from "./ListItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodoItem, editTodoItem, toggleTodoItemDone } from "../api";

interface IProps {
    items: ITodoItem[];
}

export const TodoItemsList = ({ items }: IProps) => {
    const queryClient = useQueryClient();
    const { mutate: editItem } = useMutation({
        mutationFn: editTodoItem,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    });

    const { mutate: toggleItem } = useMutation({
        mutationFn: toggleTodoItemDone,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    });

    const { mutate: deleteItem } = useMutation({
        mutationFn: deleteTodoItem,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    });

    return (
        <List>
            {items.map(({ id, label, isDone }) => (
                <ListItem
                    key={id}
                    label={label}
                    isDone={isDone}
                    onItemLabelEdit={(newLabel: string) => editItem({ id, label: newLabel })}
                    onItemDoneToggle={(newDone: boolean) => toggleItem({ id, isDone: newDone })}
                    onItemDelete={() => deleteItem({ id })}
                />
            ))}
        </List>
    );
};
