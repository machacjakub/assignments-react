import { List } from "./List";
import { ITodoItem } from "../types";
import { ListItem } from "./ListItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTodoItem } from "../api";

interface IProps {
    items: ITodoItem[];
}

export const TodoItemsList = ({ items }: IProps) => {
    const queryClient = useQueryClient();
    const { mutate: editItem } = useMutation({
        mutationFn: editTodoItem,
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
                    onItemDoneToggle={null}
                    onItemDelete={null}
                />
            ))}
        </List>
    );
};
