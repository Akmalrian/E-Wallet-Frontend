import { Link } from "react-router";
import CardHistoryTransaction from "../Card/CardHistoryTransaction";
import CardTransferMoney from "../Card/CardTransferMoney";
import SearchNumberOrName from "../input/SearchNumberOrName";

function TransferMoney() {
  return (
    <section className="mt-6 text-[16px] font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/public/image/SendBlue.svg" alt="icon history" />
        <p>Transfer Money</p>
      </div>
      <div className="ml-4 flex items-center gap-4 mb-8">
        <img src="/public/image/number1.svg" alt="icon number 1" />
        <p>Find People</p>
        <img src="/public/image/VectorDotted.svg" alt="vector dotted" />
        <img src="/public/image/number2.svg" alt="icon number 2" />
        <p>Set Nominal</p>
        <img src="/public/image/VectorDotted.svg" alt="vector dotted" />
        <img src="/public/image/number3.svg" alt="icon number 3" />
        <p>Finish</p>
      </div>
      <div className="mx-4 w-280 h-205 justify-between shadow">
        <div className="flex p-6">
          <div>
            <p className="font-semibold">Find People</p>
            <p className="mt-2 text-secondary text-tiny">
              8 Result Found For Ghaluh
            </p>
          </div>
          <div className="absolute right-19 text-black">
            <SearchNumberOrName
              type="text"
              placeholder="Enter Number Or Full Name"
              id="email"
              icon="/public/image/Search.svg"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <Link to="/nominal">
            <CardTransferMoney
              image="/public/image/historyPhoto.svg"
              title="Ghaluh 1"
              detail="(239) 555-0108"
              icon="/public/image/Star.svg"
              result={false}
            />
          </Link>
          <CardTransferMoney
            image="/public/image/historyPhoto (2).svg"
            title="Ghaluh 2"
            detail="(480) 555-0103"
            icon="/public/image/Star.svg"
          />
          <CardTransferMoney
            image="/public/image/historyPhoto (3).svg"
            title="Ghaluh 3"
            detail="(225) 555-0118"
            icon="/public/image/Star.svg"
            result={false}
          />
          <CardTransferMoney
            image="/public/image/historyPhoto (4).svg"
            title="Ghaluh 4"
            detail="(406) 555-0120"
            icon="/public/image/Star.svg"
          />
          <CardTransferMoney
            image="/public/image/historyPhoto (5).svg"
            title="Ghaluh 5"
            detail="(303) 555-0105"
            icon="/public/image/Star.svg"
            result={false}
          />
          <CardTransferMoney
            image="/public/image/historyPhoto (6).svg"
            title="Ghaluh 6"
            detail="(808) 555-0111"
            icon="/public/image/Star.svg"
          />
          <CardTransferMoney
            image="/public/image/historyPhoto (7).svg"
            title="Ghaluh 7"
            detail="(671) 555-0110"
            icon="/public/image/Star.svg"
            result={false}
          />
          <CardTransferMoney
            image="/public/image/historyPhoto (8).svg"
            title="Ghaluh 8"
            detail="(671) 555-0110"
            icon="/public/image/Star.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default TransferMoney;
