const CardTransferMoney = ({ icon, title, detail, image, result = true }) => {
  return (
    <div className="mx-6 text-secondary text-[16px]">
      <div
        className={`flex gap-5 justify-between items-center w-full h-18 ${result ? "bg-white" : "bg-[#F9FAFB]"}`}
      >
        <div className="flex items-center ml-20">
          <img className="w-14 h-14" src={image} alt="photo profile" />
        </div>
        <h6 className="w-108.75 text-center">{title}</h6>
        <p className="w-60.75">{detail}</p>
        <img className="mr-8" src={icon} alt="icon remove" />
      </div>
    </div>
  );
};

export default CardTransferMoney;
