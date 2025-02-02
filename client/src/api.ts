import axios from "axios";
import { IData } from "./types";

const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
});

export const getTodoItems = (): Promise<IData> => api.get("/items");

export const addTodoItem = ({ label }: { label: string }) => api.post(`/items/`, { label });

export const editTodoItem = ({ id, label }: { id: number; label: string }) => api.patch(`/items/${id}`, { label });

export const toggleTodoItemDone = ({ id, isDone }: { id: number; isDone: boolean }) =>
    api.patch(`/items/${id}`, { isDone });

export const deleteTodoItem = ({ id }: { id: number }) => api.delete(`/items/${id}`);
