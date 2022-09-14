import client from "../providers/client";

export const schedule = (data) => client.post("/schedules", data);

export const getSchedules = () => client.get("/schedules");

export const updateSchedules = (id, data) =>
  client.patch(`/schedules/${id}`, data);
