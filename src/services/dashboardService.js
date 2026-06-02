import apiFetch from "./api";

export const getDashboardAPI = async () => {
  return await apiFetch("/users/dashboard");
};

export const getHistoryAPI = async (params = {}) => {
  const query = new URLSearchParams();
  if (params.type)  query.append("type",  params.type);
  if (params.page)  query.append("page",  params.page);
  if (params.limit) query.append("limit", params.limit);
  const queryString = query.toString();
  return await apiFetch(
    `/transactions/history${queryString ? `?${queryString}` : ""}`
  );
};

// ✅ Ambil graph data dari backend
export const getGraphAPI = async (params = {}) => {
  const query = new URLSearchParams();
  if (params.type)       query.append("type",       params.type);
  if (params.start_date) query.append("start_date", params.start_date);
  if (params.end_date)   query.append("end_date",   params.end_date);
  const queryString = query.toString();
  return await apiFetch(
    `/users/dashboard/graph${queryString ? `?${queryString}` : ""}`
  );
};