import { apiRequest } from '../api/apiRequest'
import store from "../redux/store";

export const mediaUpload = (data, id, navigate) => {
  const endpoint = id ? `/media/${id}` : "/media";
  const method = id ? "PATCH" : "POST";
  return apiRequest(endpoint, method, data, navigate, true);
};

export const fetchMedia = (pageNum, filterMedia, navigate) => {
  const userId = store.getState().app.user?.id;
  if (!userId) throw new Error("User ID not found.");

  const query = `/media?where[user][equals]=${userId}${
    filterMedia ? `&where[mimeType][contains]=${filterMedia}` : ""
  }&limit=15&depth=2&page=${pageNum}`;

  return apiRequest(query, "GET", null, navigate);
};
