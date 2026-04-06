import SearchNumberOrName from "../input/SearchNumberOrName";

function SectionHistory() {
  return (
    <section className="mt-6 text-[16px] font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/public/image/historyBlue.svg" alt="icon history" />
        <p>History Transaction</p>
      </div>
      <div className="flex mx-4 justify-between w-280  h-205 shadow">
        <div className="flex justify-between p-6">
          <p className="font-semibold">Find Transaction</p>
          <SearchNumberOrName
            type="text"
            placeholder="Enter Number Or Full Name"
            id="email"
            icon="/public/image/Search.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionHistory;
