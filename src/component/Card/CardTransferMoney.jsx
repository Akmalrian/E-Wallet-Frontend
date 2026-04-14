const CardTransferMoney = ({ icon, title, detail, image, result = true }) => {
  return (
    <div className="mx-6 text-secondary text-medium md:w-full w-100 max-md:mx-0 max-md:w-full">
      <div className={`flex md:gap-5 gap-0 justify-between items-center w-full h-18 ${result ? "bg-white" : "bg-[#F9FAFB]"}
      max-md:h-auto max-md:py-3 max-md:px-3 max-md:gap-3 max-md:rounded-xl max-md:shadow-sm max-md:my-1`}>
        <div className="flex items-center md:ml-20 ml-0 max-md:ml-0 max-md:shrink-0">
        <img className="w-14 h-14 max-md:w-11 max-md:h-11 max-md:rounded-full" src={image} alt="photo profile" />
        </div>
        <h6 className="w-108.75 text-center max-md:w-auto max-md:flex-1 max-md:text-left max-md:font-semibold max-md:text-black max-md:text-sm">
        {title}
        </h6>
        <p className="md:w-60.75 w-40">{detail}</p>
        <img className="mr-8" src={icon} alt="icon remove" />
      </div>
    </div>
  );
};

export default CardTransferMoney;
