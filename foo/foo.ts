import { api } from "encore.dev/api";
import { hello } from "~encore/clients";
import log from "encore.dev/log";
import { getAuthData } from "~encore/auth";

interface Response {
    greeting: string;
}

export const greeting = api(
  { expose: true, method: "GET", path: "/greeting/:name" },
  async ({ name }: { name: string }): Promise<Response> => {
    // Calling the get endpoint on the hello service
    const { message } = await hello.get();

    return { greeting: `${message} ${name}!` };
  },
);

export const admin = api(
  {
    auth: true, // Require the user to be authenticated
    expose: true,
    method: "GET",
    path: "/admin",
  },
  async (): Promise<Response> => {
    const userID = getAuthData()!.userID;
    log.info("Data requested by user", { userID });

    return { message: "Secret message for admins" };
  },
);