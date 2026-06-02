import apiFetch from "./api";

// Ambil profile user
export const getProfileAPI = async () => {
  return await apiFetch("/users/profile");
};

// Update profile — multipart/form-data karena ada file upload
export const updateProfileAPI = async ({ fullname, phone_number, photo }) => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  if (fullname)     formData.append("fullname",     fullname);
  if (phone_number) formData.append("phone_number", phone_number);
  if (photo)        formData.append("photo",        photo);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL || "http://localhost:9000"}/users/profile`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        // Tidak set Content-Type — browser otomatis set boundary untuk FormData
      },
      body: formData,
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || data.message || "Gagal update profile");
  }
  return data;
};


export const changePasswordAPI = async (old_password, new_password) => {
    return await apiFetch("/users/password", {
        method: "PATCH",
        body: JSON.stringify({old_password, new_password}),
    });
};

export const changePinAPI = async (old_pin, new_pin) => {
    return await apiFetch("/users/pin", {
        method: "PATCH",
        body: JSON.stringify({old_pin, new_pin}),
    });
};

export const checkPinAPI = async (pin) => {
    return await apiFetch("/users/pin/check", {
        method: "POST",
        body: JSON.stringify({pin}),
    });
};

export const getReceiversAPI = async (params = {}) => {
  const query = new URLSearchParams();
  if (params.search) query.append("search", params.search);
  if (params.page)   query.append("page",   params.page);
  if (params.limit)  query.append("limit",  params.limit);
  const queryString = query.toString();
  return await apiFetch(
    `/users/receiver${queryString ? `?${queryString}` : ""}`
  );
};