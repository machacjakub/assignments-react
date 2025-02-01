import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { useQuery } from "@tanstack/react-query";
import { TodoItemsList } from "./components/TodoItemsList";
import { IData, ITodoItem } from "./types";
import { getTodoItems } from "./api";

const isItemDone = (item: ITodoItem): boolean => item.isDone;

export const App = () => {
    const { data } = useQuery<IData>({ queryKey: ["todos"], queryFn: getTodoItems });
    const todoItems = data?.data;
    const todoItemsCount = todoItems?.length ?? 0;
    const doneItemsCount = todoItems?.filter(isItemDone).length ?? 0;
    return (
        <Layout>
            <div>
                <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
                <TodoItemsList items={todoItems} />
            </div>
            <Footer todoItems={todoItemsCount - doneItemsCount} doneItems={doneItemsCount} />
        </Layout>
    );
};
