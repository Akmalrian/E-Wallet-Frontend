import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import CardTransferMoney from "../Card/CardTransferMoney";
import SearchNumberOrName from "../input/SearchNumberOrName";
import { getReceiversAPI } from "../../services/userService";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_API_URL?.replace("/api/v1", "")
  || "http://localhost:9000/ewallet";

const ITEMS_PER_PAGE = 7;

function TransferMoney() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery  = searchParams.get("search") || "";
  const currentPage  = parseInt(searchParams.get("page")) || 1;

  const [receivers, setReceivers]   = useState([]);
  const [totalData, setTotalData]   = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading]   = useState(true);

  //  Fetch receivers dari backend saat search atau page berubah
  useEffect(() => {
    const fetchReceivers = async () => {
      setIsLoading(true);
      try {
        const response = await getReceiversAPI({
          search: searchQuery,
          page:   currentPage,
          limit:  ITEMS_PER_PAGE,
        });
        setReceivers(response.data.receivers   || []);
        setTotalData(response.data.meta?.total_data   || 0);
        setTotalPages(response.data.meta?.total_pages || 0);
      } catch (err) {
        toast.error("Gagal memuat daftar penerima");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReceivers();
  }, [searchQuery, currentPage]); // ← refetch saat search atau page berubah

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value) setSearchParams({ search: value, page: "1" });
    else       setSearchParams({ page: "1" });
  };

  const updateParams = (newParams) => {
    const nextParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...nextParams, ...newParams });
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      updateParams({ page: pageNumber.toString() });
      window.scrollTo(0, 0);
    }
  };

  const getPhoto = (receiver) => {
    if (receiver.photo_path) {
      return `${BASE_URL}${receiver.photo_path}`;
    }
    return "/image/historyPhoto.svg";
  };

  return (
    <section className="mt-6 text-medium font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/image/SendBlue.svg" alt="icon history" />
        <p>Transfer Money</p>
      </div>

      <div className="ml-4 md:flex grid items-center gap-4 mb-8
        max-md:flex max-md:flex-wrap max-md:gap-2 max-md:ml-4">
        <img src="/image/number1.svg" alt="icon number 1" />
        <p>Find People</p>
        <img src="/image/VectorDotted.svg" alt="vector dotted" className="max-md:hidden" />
        <img src="/image/number2.svg" alt="icon number 2" />
        <p>Set Nominal</p>
        <img src="/image/VectorDotted.svg" alt="vector dotted" className="max-md:hidden" />
        <img src="/image/number3.svg" alt="icon number 3" />
        <p>Finish</p>
      </div>

      <div className="mx-4 md:w-280 h-auto pb-10 justify-between shadow
        max-md:w-auto max-md:mx-4 max-md:pb-24">

        {/* Header & Search */}
        <div className="flex p-6 max-md:flex-col max-md:gap-4 max-md:p-4">
          <div>
            <p className="font-semibold">Find People</p>
            <p className="mt-2 text-secondary text-tiny">
              {totalData} Result Found
            </p>
          </div>
          <div className="absolute md:right-19 right-2 text-black
            max-md:relative max-md:right-0">
            <SearchNumberOrName
              type="text"
              placeholder="Enter Number Or Full Name"
              value={searchQuery}
              onChange={handleSearchChange}
              icon="/image/Search.svg"
            />
          </div>
        </div>

        {/* List Receivers */}
        <div className="grid gap-4 px-6 max-md:px-2">
          {isLoading ? (
            <p className="text-center py-10 text-gray-400">
              Memuat daftar penerima...
            </p>
          ) : receivers.length > 0 ? (
            receivers.map((receiver) => (
              <Link
                key={receiver.id}
                to={`nominal?wallet_id=${receiver.wallet_id}&name=${encodeURIComponent(receiver.fullname || receiver.email)}&phone=${encodeURIComponent(receiver.phone_number || "")}&photo=${encodeURIComponent(receiver.photo_path || "")}`}
                className="block"
              >
                <CardTransferMoney
                  image={getPhoto(receiver)}
                  title={receiver.fullname || receiver.email}
                  detail={receiver.phone_number || receiver.email}
                  icon="/image/Star.svg"
                  result={true}
                />
              </Link>
            ))
          ) : (
            <p className="text-center py-10 text-gray-400">
              {searchQuery
                ? `Data "${searchQuery}" tidak ditemukan...`
                : "Belum ada penerima tersedia."}
            </p>
          )}
        </div>

        {/*  Pagination */}
        {totalData > 0 && (
          <div className="mx-6 text-tiny mt-10 flex justify-between
            max-md:flex-col max-md:items-center max-md:gap-4 max-md:mx-2 max-md:pb-8">
            <p>
              Show {receivers.length} of {totalData} People
            </p>
            <div className="flex gap-4 max-md:gap-3 max-md:flex-wrap
              max-md:justify-center items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`cursor-pointer ${
                  currentPage === 1 ? "text-gray-300" : "hover:font-bold"
                }`}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => handlePageChange(num)}
                  className={`cursor-pointer px-2 ${
                    currentPage === num
                      ? "font-bold text-blue-600 underline"
                      : ""
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

export default TransferMoney;