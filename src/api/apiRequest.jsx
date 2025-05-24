import store from "../redux/store";
export const API_BASE_URL = process.env.REACT_APP_API_URL;
export const apiRequest = async (
  endpoint,
  method,
  data = null,
  isFormData = false
) => {
  const authToken = store.getState().app.token;
  const headers = {
    Authorization: `JWT ${authToken}`,
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  const options = {
    method,
    headers,
    ...(data && { body: isFormData ? data : JSON.stringify(data) }),
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.errors?.[0]?.message || "API request failed");
    }

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
