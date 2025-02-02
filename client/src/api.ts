import axios from "axios";
import { IData } from "./types";

const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
});

export const getTodoItems = (): Promise<IData> => api.get("/items");

export const addTodoItem = ({ label }: { label: string }) => api.post(`/items/`, { label });

export const editTodoItem = ({ id, label }: { id: number; label: string }) => api.patch(`/items/${id}`, { label });

export const undoTodoItem = (id: number) => api.patch(`/items/${id}`, { isDone: false });

export const markTodoItemAsDone = (id: number) => api.patch(`/items/${id}/done`);

export const deleteTodoItem = (id: number) => api.delete(`/items/${id}`);
