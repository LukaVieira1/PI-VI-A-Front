import client from "../providers/client";

export const getPacients = () => client.get("/pacients");
