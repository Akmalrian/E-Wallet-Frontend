import { Link, useSearchParams } from "react-router";
import CardTransferMoney from "../Card/CardTransferMoney";
import SearchNumberOrName from "../input/SearchNumberOrName";

const TRANSACTION_DATA = [
  { id: 1, image: "/image/historyPhoto.svg", title: "Ghaluh 1", detail: "082116304337", result: false },
  { id: 2, image: "/image/historyPhoto (2).svg", title: "Ghaluh 2", detail: "(308) 555-0121", result: true },
  { id: 3, image: "/image/historyPhoto (3).svg", title: "Ghaluh 3", detail: "(704) 555-0127", result: false },
  { id: 4, image: "/image/historyPhoto (4).svg", title: "Ghaluh 4", detail: "(603) 555-0123", result: true },
  { id: 5, image: "/image/historyPhoto (5).svg", title: "Ghaluh 5", detail: "(671) 555-0110", result: false },
  { id: 6, image: "/image/historyPhoto (6).svg", title: "Ghaluh 6", detail: "(225) 555-0118", result: true },
  { id: 7, image: "/image/historyPhoto (7).svg", title: "Ghaluh 7", detail: "(217) 555-0113", result: false },
  { id: 7, image: "/image/historyPhoto (8).svg", title: "Ghaluh 8", detail: "(671) 555-0110", result: true }
];

function TransferMoney() {

  const [searchParams, setSearchParams] = useSearchParams();
  
  const searchQuery = searchParams.get("search") || "";

  const handleSearchChange = (e) => {
    const value = e.target.value;

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({}); 
    }
  };

  const filteredTransactions = TRANSACTION_DATA.filter((item) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchLower) || 
      item.detail.includes(searchLower)
    );
  });

  return (
    <section className="mt-6 text-medium font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/image/SendBlue.svg" alt="icon history" />
        <p>Transfer Money</p>
      </div>
      <div className="ml-4 md:flex grid items-center gap-4 mb-8">
        <img src="/image/number1.svg" alt="icon number 1" />
        <p>Find People</p>
        <img src="/image/VectorDotted.svg" alt="vector dotted" />
        <img src="/image/number2.svg" alt="icon number 2" />
        <p>Set Nominal</p>
        <img src="/image/VectorDotted.svg" alt="vector dotted" />
        <img src="/image/number3.svg" alt="icon number 3" />
        <p>Finish</p>
      </div>
      <div className="mx-4 md:w-280 h-205 justify-between shadow">
        <div className="flex p-6">
          <div>
            <p className="font-semibold">Find People</p>
            <p className="mt-2 text-secondary text-tiny">
              8 Result Found For Ghaluh
            </p>
          </div>
          <div className="absolute md:right-19 right-2 text-black">
            <SearchNumberOrName
              type="text"
              placeholder="Enter Number Or Full Name"
              value={searchQuery}
              onChange={handleSearchChange}
              icon="/image/Search.svg"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <Link to="nominal">
            <div className="grid gap-4 px-6">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((item) => (
              <CardTransferMoney
                key={item.id}
                image={item.image}
                title={item.title}
                detail={item.detail}
                icon="/image/Star.svg"
                result={item.result}
              />
            ))
          ) : (
            <p className="text-center py-10 text-gray-400">Data "{searchQuery}" tidak ditemukan...</p>
          )}
        </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TransferMoney;
