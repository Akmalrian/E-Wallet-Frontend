import CardHistoryTransaction from "../Card/CardHistoryTransaction";
import SearchNumberOrName from "../input/SearchNumberOrName";
import { useSearchParams } from "react-router";

const TRANSACTION_DATA = [
  { id: 1, image: "/image/historyPhoto.svg", title: "Ghaluh 1", detail: "082116304337", text: "Rp.50.000", result: false },
  { id: 2, image: "/image/historyPhoto (2).svg", title: "Cameron Williamson", detail: "(308) 555-0121", text: "Rp.50.000", result: true },
  { id: 3, image: "/image/historyPhoto (3).svg", title: "Cody Fisher", detail: "(704) 555-0127", text: "Rp.50.000", result: false },
  { id: 4, image: "/image/historyPhoto (4).svg", title: "Kristin Watson", detail: "(603) 555-0123", text: "Rp.50.000", result: true },
  { id: 5, image: "/image/historyPhoto (5).svg", title: "Floyd Miles", detail: "(671) 555-0110", text: "Rp.50.000", result: false },
  { id: 6, image: "/image/historyPhoto (6).svg", title: "Wade Warren", detail: "(225) 555-0118", text: "Rp.50.000", result: true },
  { id: 7, image: "/image/historyPhoto (7).svg", title: "Savannah Nguyen", detail: "(217) 555-0113", text: "Rp.50.000", result: false },
  { id: 8, image: "/image/historyPhoto (2).svg", title: "Ghaluh 2", detail: "082116304337", text: "Rp.50.000", result: false },
  { id: 9, image: "/image/historyPhoto (6).svg", title: "Cameron 2", detail: "(308) 555-0121", text: "Rp.50.000", result: true },
  { id: 10, image: "/image/historyPhoto (5).svg", title: "Cody 2", detail: "(704) 555-0127", text: "Rp.50.000", result: false },
  { id: 11, image: "/image/historyPhoto.svg", title: "Kristin 2", detail: "(603) 555-0123", text: "Rp.50.000", result: true },
  { id: 12, image: "/image/historyPhoto (4).svg", title: "Floyd 2", detail: "(671) 555-0110", text: "Rp.50.000", result: false },
  { id: 13, image: "/image/historyPhoto (3).svg", title: "Wade 2", detail: "(225) 555-0118", text: "Rp.50.000", result: true },
  { id: 14, image: "/image/historyPhoto (7).svg", title: "Savannah 2", detail: "(217) 555-0113", text: "Rp.50.000", result: false },
  { id: 15, image: "/image/historyPhoto (7).svg", title: "Cameron 3", detail: "(308) 555-0121", text: "Rp.50.000", result: true },
  { id: 16, image: "/image/historyPhoto (3).svg", title: "Cody 3", detail: "(704) 555-0127", text: "Rp.50.000", result: false },
  { id: 17, image: "/image/historyPhoto (5).svg", title: "Kristin 3", detail: "(603) 555-0123", text: "Rp.50.000", result: true },
  { id: 18, image: "/image/historyPhoto (2).svg", title: "Floyd 3", detail: "(671) 555-0110", text: "Rp.50.000", result: false },
  { id: 19, image: "/image/historyPhoto (4).svg", title: "Wade 3", detail: "(225) 555-0118", text: "Rp.50.000", result: true },
  { id: 20, image: "/image/historyPhoto (6).svg", title: "Savannah 3", detail: "(217) 555-0113", text: "Rp.50.000", result: false },
];

const ITEMS_PER_PAGE = 7;

function HistoryTransaction() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const filteredTransactions = TRANSACTION_DATA.filter((item) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchLower) ||
      item.detail.includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = filteredTransactions.slice(startIndex, endIndex);

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

  return (
    <section className="mt-6 text-medium">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/image/historyBlue.svg" alt="icon history" />
        <p>History Transaction</p>
      </div>

      <div className="mx-4 w-280 h-auto pb-10 justify-between shadow max-md:w-auto max-md:mx-4 max-md:shadow-none">
        <div className="flex p-6 mb-10 items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4 max-md:p-4 max-md:mb-4">
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
          {currentData.length > 0 ? (
            currentData.map((item) => (
              <CardHistoryTransaction
                key={item.id}
                image={item.image}
                title={item.title}
                detail={item.detail}
                text={item.text}
                icon="/image/Trash.svg"
                result={item.result}
              />
            ))
          ) : (
            <p className="text-center py-10 text-gray-400">
              Data "{searchQuery}" tidak ditemukan...
            </p>
          )}
        </div>

        {/* PAGINATION UI */}
        {filteredTransactions.length > 0 && (
          <div className="mx-6 text-tiny mt-10 flex justify-between max-md:flex-col max-md:items-center max-md:gap-4 max-md:mx-2 max-md:pb-24">
            <p>
              Show {currentData.length} History of {filteredTransactions.length} History
            </p>
            
            <div className="flex gap-4 max-md:gap-3 max-md:flex-wrap max-md:justify-center items-center">
              {/* Prev Button */}
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`cursor-pointer ${currentPage === 1 ? 'text-gray-300' : 'hover:font-bold'}`}
              >
                Prev
              </button>

              {/* Page Numbers */}
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

              {/* Next Button */}
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`cursor-pointer ${currentPage === totalPages ? 'text-gray-300' : 'font-bold text-[#0B0909]'}`}
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