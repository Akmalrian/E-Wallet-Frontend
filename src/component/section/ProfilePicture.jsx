import CardHistoryTransaction from "../Card/CardHistoryTransaction";
import SearchNumberOrName from "../input/SearchNumberOrName";

function HistoryTransaction() {
  return (
    <section className="mt-6 text-medium ">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/public/image/historyBlue.svg" alt="icon history" />
        <p>History Transaction</p>
      </div>
      <div className="mx-4 w-280 h-205 justify-between shadow">
        <div className="flex p-6 mb-10">
          <div>
            <p className="font-semibold">Find Transaction</p>
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
        <CardHistoryTransaction
          image="/public/image/historyPhoto.svg"
          title="Ghaluh 1"
          detail="082116304337"
          text="Rp.50.000"
          icon="/public/image/Trash.svg"
          result={false}
          />
          <CardHistoryTransaction
          image="/public/image/historyPhoto (2).svg"
          title="Cameron Williamson"
          detail="(308) 555-0121"
          text="Rp.50.000"
          icon="/public/image/Trash.svg"
          />
          <CardHistoryTransaction
          image="/public/image/historyPhoto (3).svg"
          title="Cody Fisher"
          detail="(704) 555-0127"
          text="Rp.50.000"
          icon="/public/image/Trash.svg"
          result={false}
          />
          <CardHistoryTransaction
          image="/public/image/historyPhoto (4).svg"
          title="Kristin Watson"
          detail="(603) 555-0123"
          text="Rp.50.000"
          icon="/public/image/Trash.svg"
          />
          <CardHistoryTransaction
          image="/public/image/historyPhoto (5).svg"
          title="Floyd Miles"
          detail="(671) 555-0110"
          text="Rp.50.000"
          icon="/public/image/Trash.svg"
          result={false}
          />
          <CardHistoryTransaction
          image="/public/image/historyPhoto (6).svg"
          title="Wade Warren"
          detail="(225) 555-0118"
          text="Rp.50.000"
          icon="/public/image/Trash.svg"
          />
          <CardHistoryTransaction
          image="/public/image/historyPhoto (7).svg"
          title="Savannah Nguyen"
          detail="(217) 555-0113"
          text="Rp.50.000"
          icon="/public/image/Trash.svg"
          result={false}
          />
          </div>
          <div className="mx-6 text-tiny mt-10 flex justify-between">
            <p>Show 5 History of 100 History</p>
            <div className="flex gap-6">
              <p>Prev</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p className="text-[#0B0909] font-bold">Next</p>
            </div>
            
          </div>
      </div>
    </section>
  );
}

export default HistoryTransaction;
