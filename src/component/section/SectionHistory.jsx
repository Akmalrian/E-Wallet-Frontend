
function SectionHistory() {
  return (
    <section className="mt-6 text-[16px] font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/src/assets/historyBlue.svg" alt="icon history" />
        <p>History Transaction</p>
      </div>
      <div className="flex mx-4 justify-between w-280  h-205 shadow">
        <div className="flex">
            <p className="font-semibold">Find Transaction</p>
            <div className="relative flex items-center">
            <img
              src="/src/assets/mail.png"
              className="absolute left-3 "
              alt="mail icon"
            />
            <input
              className="text-[#4F5665] pl-10 pr-3 py-2 rounded-md bg-white w-68.75"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default SectionHistory;
