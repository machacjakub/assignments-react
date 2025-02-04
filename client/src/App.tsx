import { Footer, Header, Layout, TodoItemsList } from "components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IData, ITodoItem } from "types";
import { addTodoItem, getTodoItems } from "api";

const isItemDone = (item: ITodoItem): boolean => item.isDone;

export const App = () => {
    const queryClient = useQueryClient();

    const { data } = useQuery<IData>({ queryKey: ["todos"], queryFn: getTodoItems });

    const { mutate } = useMutation({
        mutationFn: addTodoItem,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
    });

    const todoItems = data?.data;
    const todoItemsCount = todoItems?.length ?? 0;
    const doneItemsCount = todoItems?.filter(isItemDone).length ?? 0;
    return (
        <Layout>
            <div>
                <Header onItemAdd={mutate}>To Do app</Header>
                <TodoItemsList items={todoItems} />
            </div>
            <Footer todoItems={todoItemsCount - doneItemsCount} doneItems={doneItemsCount} />
        </Layout>
    );
};
