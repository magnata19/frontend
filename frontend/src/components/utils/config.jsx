export const api = "https://backend-react-gram.onrender.com/api";
export const uploads = "https://backend-react-gram.onrender.com/uploads";

export const requestConfig = (method, data, token = null, image = null) => {
  let config;

  if (image) {
    config = {
      method,
      body: data,
      headers: {},
    };
  } else if (method === "DELETE" || data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};
