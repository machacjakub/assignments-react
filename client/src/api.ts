import axios from "axios";
import { IData } from "./types";

const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
});

export const getTodoItems = (): Promise<IData> => api.get("/items");
