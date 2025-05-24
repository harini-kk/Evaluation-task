import { apiRequest } from "../api/apiRequest";

export const getAuthToken = (email, password) =>
  apiRequest("/users/login", "POST", { email, password });

