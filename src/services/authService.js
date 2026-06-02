import apiFetch from "./api"


export const registerAPI = async (email, password) => {
    return await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password}),
    });
};

export const loginAPI = async (email, password) => {
    return await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({email, password}),
    });  
};

export const logoutAPI = async () => {
    return await apiFetch("/auth/logout", {
        method: "DELETE",
    });
};

export const enterPinAPI = async (pin) => {
  return await apiFetch("/auth/enter-pin", {
    method: "POST",
    body: JSON.stringify({ pin }),
  });
};