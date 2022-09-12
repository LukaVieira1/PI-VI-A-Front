import client from "../providers/client";

export const getMedics = () => client.get("/medics");
