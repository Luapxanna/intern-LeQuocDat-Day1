import { api } from "encore.dev/api";
import { REPLCommand } from "node:repl";

interface Response {
  message: string;
}

export const get = api(
  { method: "GET", path: "/hello", expose: true },
  async (): Promise<Response> => {
    return { message: "Hello" };
  },
);

export const ping = api(
    { method: "GET", path: "/ping", expose: true},
    async (): Promise<Response> => {
        return { message: "Hello from The Farm"}
    }
)