import apiFetch from "./api";

export const topupAPI = async (payment_method_id, order_amount) => {
  return await apiFetch("/transactions/topup", {
    method: "POST",
    body:   JSON.stringify({ payment_method_id, order_amount }),
  });
};

export const transferAPI = async (receiver_wallet_id, amount, pin, notes = "") => {
  return await apiFetch("/transactions/transfer", {
    method: "POST",
    body:   JSON.stringify({ receiver_wallet_id, amount, pin, notes }),
  });
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

export const getPaymentMethodsAPI = async () => {
  return await apiFetch("/transactions/payment-methods");
};