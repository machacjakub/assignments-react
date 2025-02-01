import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { useQuery } from "@tanstack/react-query";
import { TodoItemsList } from "./components/TodoItemsList";
import { IData } from "./types";
import { getTodoItems } from "./api";

export const App = () => {
    const { data } = useQuery<IData>({ queryKey: ["todos"], queryFn: getTodoItems });
    return (
        <Layout>
            <div>
                <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
                {data?.data && <TodoItemsList items={data.data} />}
            </div>
            <Footer />
        </Layout>
    );
};
