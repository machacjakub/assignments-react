import { ITodoItem } from "types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodoItem, editTodoItem, markTodoItemAsDone, undoTodoItem } from "api";
import { EmptyList, List, ListItem } from "components";

interface IProps {
    items?: ITodoItem[];
}

const sortTodoItems = (itemA: ITodoItem, itemB: ITodoItem) => {
    if (itemA.isDone) return 1;
    if (itemB.isDone) return -1;
    return itemA.createdAt - itemB.createdAt;
};

export const TodoItemsList = ({ items }: IProps) => {
    const queryClient = useQueryClient();
    const { mutate: editItem } = useMutation({
        mutationFn: editTodoItem,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    });

    const { mutate: undoItem } = useMutation({
        mutationFn: undoTodoItem,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    });

    const { mutate: markAsDone } = useMutation({
        mutationFn: markTodoItemAsDone,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    });

    const { mutate: deleteItem } = useMutation({
        mutationFn: deleteTodoItem,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    });

    if (!items || items.length === 0) {
        return <EmptyList />;
    }
    return (
        <List>
            {items.sort(sortTodoItems).map(({ id, label, isDone }) => (
                <ListItem
                    key={id}
                    label={label}
                    isDone={isDone}
                    onItemLabelEdit={(newLabel: string) => editItem({ id, label: newLabel })}
                    onItemDoneToggle={(newDone: boolean) => (newDone ? markAsDone(id) : undoItem(id))}
                    onItemDelete={() => deleteItem(id)}
                />
            ))}
        </List>
    );
};
