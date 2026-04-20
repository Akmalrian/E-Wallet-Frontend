import { Link, useSearchParams } from "react-router";
import CardTransferMoney from "../Card/CardTransferMoney";
import SearchNumberOrName from "../input/SearchNumberOrName";
import { TRANSACTION_DATA } from "./TransactionData";

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
      <div className="ml-4 md:flex grid items-center gap-4 mb-8 max-md:flex max-md:flex-wrap max-md:gap-2 max-md:ml-4">
        <img src="/image/number1.svg" alt="icon number 1" />
        <p>Find People</p>
        <img src="/image/VectorDotted.svg" alt="vector dotted" className="max-md:hidden" />
        <img src="/image/number2.svg" alt="icon number 2" />
        <p>Set Nominal</p>
        <img src="/image/VectorDotted.svg" alt="vector dotted" className="max-md:hidden" />
        <img src="/image/number3.svg" alt="icon number 3" />
        <p>Finish</p>
      </div>

      <div className="mx-4 md:w-280 h-205 justify-between shadow max-md:w-auto max-md:h-auto max-md:mx-4 max-md:pb-24">
        <div className="flex p-6 max-md:flex-col max-md:gap-4 max-md:p-4">
          <div>
            <p className="font-semibold">Find People</p>
            <p className="mt-2 text-secondary text-tiny">
              {filteredTransactions.length} Result Found
            </p>
          </div>
          <div className="absolute md:right-19 right-2 text-black max-md:relative max-md:right-0">
            <SearchNumberOrName
              type="text"
              placeholder="Enter Number Or Full Name"
              value={searchQuery}
              onChange={handleSearchChange}
              icon="/image/Search.svg"
            />
          </div>
        </div>

        <div className="grid gap-4 px-6 max-md:px-2">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((item) => (
              <Link
                key={item.id}
                to={`nominal?id=${item.id}`}
                className="block"
              >
                <CardTransferMoney
                  image={item.image}
                  title={item.title}
                  detail={item.detail}
                  icon="/image/Star.svg"
                  result={item.result}
                />
              </Link>
            ))
          ) : (
            <p className="text-center py-10 text-gray-400">
              Data "{searchQuery}" tidak ditemukan...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default TransferMoney;