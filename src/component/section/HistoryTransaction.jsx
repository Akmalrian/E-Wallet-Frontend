import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import CardHistoryTransaction from "../Card/CardHistoryTransaction";
import SearchNumberOrName from "../input/SearchNumberOrName";
import { getHistoryAPI } from "../../services/dashboardService";
import toast from "react-hot-toast";
import { useAppSelector } from "../../store/hooks";

const BASE_URL = import.meta.env.VITE_API_URL

function HistoryTransaction() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentUser }                 = useAppSelector((state) => state.auth);

  const [histories, setHistories]     = useState([]);
  const [totalData, setTotalData]     = useState(0);
  const [totalPages, setTotalPages]   = useState(0);
  const [isLoading, setIsLoading]     = useState(true);

  const searchQuery = searchParams.get("search") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const ITEMS_PER_PAGE = 7;

  // Fetch history dari backend saat page atau search berubah
  useEffect(() => {
    const fetchHistory = async () => {
      setIsLoading(true);
      try {
        const response = await getHistoryAPI({
          page:  currentPage,
          limit: ITEMS_PER_PAGE,
        });

        setHistories(response.data.transactions   || []);
        setTotalData(response.data.meta.total_data || 0);
        setTotalPages(response.data.meta.total_pages || 0);
      } catch (err) {
        toast.error("Gagal memuat history");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, [currentPage]);

  // Filter search di frontend dari data yang sudah diambil
  const filteredHistories = histories.filter((item) => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    const title = getTitle(item).toLowerCase();
    return title.includes(searchLower);
  });

  const updateParams = (newParams) => {
    const nextParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...nextParams, ...newParams });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ search: value, page: "1" });
    } else {
      setSearchParams({ page: "1" });
    }
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      updateParams({ page: pageNumber.toString() });
    }
  };

  // Foto pengirim/penerima
  const getPhoto = (item) => {
    if (item.type === "topup") {
      return currentUser?.photo_path
        ? `${BASE_URL}${currentUser.photo_path}`
        : "/image/blank-photo.jpg";
    }
    if (item.type === "receive" && item.sender_info?.photo_path) {
      return `${BASE_URL}${item.sender_info.photo_path}`;
    }
    if (item.type === "transfer" && item.receiver_info?.photo_path) {
      return `${BASE_URL}${item.receiver_info.photo_path}`;
    }
    if (item.type === "receive")  return "/image/1(6).svg";
    return "/image/1(8).svg";
  };

  // Nama pengirim/penerima
  function getTitle(item) {
    if (item.type === "receive") {
      return item.sender_info?.fullname
        || "Someone";
    }
    if (item.type === "transfer") {
      return item.receiver_info?.fullname
        || "Transfer";
    }
    if (item.type === "topup") return "Top Up";
    return "-";
  }

  function getPhone(item) {
    if (item.type === "receive") {
      return item.sender_info?.phone_number;
    }
    if (item.type === "transfer") {
      return item.receiver_info?.phone_number;
    }
    if (item.type === "topup") return "Top Up";
    return "-";
  }

  // Format jumlah uang
  const formatAmount = (type, amount) => {
    const formatted = `Rp${Number(amount).toLocaleString("id-ID")}`;
    return type === "receive" || type === "topup"
      ? `+${formatted}`
      : `-${formatted}`;
  };

  return (
    <section className="mt-6 text-medium">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/image/historyBlue.svg" alt="icon history" />
        <p>History Transaction</p>
      </div>

      <div className="mx-4 w-280 h-auto pb-10 justify-between shadow
        max-md:w-auto max-md:mx-4 max-md:shadow-none">
        <div className="flex p-6 mb-10 items-center justify-between
          max-md:flex-col max-md:items-start max-md:gap-4 max-md:p-4 max-md:mb-4">
          <p className="font-semibold">Find Transaction</p>
          <div className="w-1/3 max-md:w-full">
            <SearchNumberOrName
              type="text"
              placeholder="Enter Number Or Full Name"
              icon="/image/Search.svg"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="grid gap-4 px-6 max-md:px-2">
          {isLoading ? (
            <p className="text-center py-10 text-gray-400">
              Memuat history...
            </p>
          ) : histories.length === 0 ? (
            <p className="text-center py-10 text-gray-400">
              Belum ada riwayat transaksi.
            </p>
          ) : filteredHistories.length > 0 ? (
            filteredHistories.map((item) => (
              <CardHistoryTransaction
                key={item.id}
                image={getPhoto(item)}
                title={getTitle(item)}
                detail={getPhone(item)}
                text={formatAmount(item.type, item.amount)}
                icon="/image/Trash.svg"
                result={
                  item.type === "receive" || item.type === "topup"
                    ? "positive"
                    : "negative"
                }
              />
            ))
          ) : (
            <p className="text-center py-10 text-gray-400">
              Data "{searchQuery}" tidak ditemukan...
            </p>
          )}
        </div>

        {totalData > 0 && (
          <div className="mx-6 text-tiny mt-10 flex justify-between
            max-md:flex-col max-md:items-center max-md:gap-4 max-md:mx-2 max-md:pb-24">
            <p>
              Show {filteredHistories.length} History of {totalData} History
            </p>
            <div className="flex gap-4 max-md:gap-3 max-md:flex-wrap
              max-md:justify-center items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`cursor-pointer ${currentPage === 1 ? "text-gray-300" : "hover:font-bold"}`}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => handlePageChange(num)}
                  className={`cursor-pointer px-2 ${
                    currentPage === num ? "font-bold text-blue-600 underline" : ""
                  }`}
                >
                  {num}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`cursor-pointer ${
                  currentPage === totalPages
                    ? "text-gray-300"
                    : "font-bold text-[#0B0909]"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HistoryTransaction;