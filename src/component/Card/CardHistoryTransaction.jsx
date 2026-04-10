const CardHistoryTransaction = ({ icon, title, detail, text, image, result = true }) => {
  return (
    <div className="mx-6 text-secondary text-medium">
      <div
        className={`flex gap-5 justify-between items-center w-full h-18 ${result ? "bg-white" : "bg-[#F9FAFB]"}`}
      >
        <div className="flex items-center ml-8">
          <img className="w-14 h-14" src={image} alt="photo profile" />
        </div>
        <h6 className="w-65.25 text-center">{title}</h6>
        <p className="w-77.5">{detail}</p>
        <p
          className={`text-medium font-semibold w-60.75 ${result ? "text-[#D00000]" : "text-[#1EC15F]"}`}
        >
          {text}
        </p>
        <img className="mr-8" src={icon} alt="icon remove" />
      </div>
    </div>
  );
};

export default CardHistoryTransaction;
