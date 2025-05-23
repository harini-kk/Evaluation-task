import store from "../redux/store";
import { apiRequest } from "../api/apiRequest";

export const createWork = (data) => apiRequest("/works", "POST", data);
export const updateWork = (data, id) => apiRequest(`/works/${id}`, "PATCH", data);
export const removeWork = (id) => apiRequest(`/works/${id}`, "DELETE");
export const updateUser = (data) => {
  const userId = store.getState().app.user?.id;
  if (!userId) throw new Error("User ID not found.");
  return apiRequest(`/users/${userId}`, "PATCH", data);
};
