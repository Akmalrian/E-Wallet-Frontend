const CardHistoryTransaction = ({
  icon,
  title,
  detail,
  text,
  image,
  result = true,
}) => {
  return (
    <div className="mx-6 text-secondary text-medium max-md:mx-0">
      <div
        className={`flex gap-5 justify-between items-center w-full h-18
        ${result ? "bg-white" : "bg-[#F9FAFB]"}
        max-md:h-auto max-md:py-3 max-md:px-3 max-md:gap-3 max-md:rounded-xl max-md:shadow-sm max-md:my-1`}
      >
        <div
          className="flex items-center ml-8
          max-md:ml-0 max-md:flex-shrink-0"
        >
          <img
            className="w-14 h-14 max-md:w-11 max-md:h-11 max-md:rounded-full"
            src={image}
            alt="photo profile"
          />
        </div>
        <div className="md:flex md:text-center">
        <h6 className="w-65.25 text-center max-md:w-auto max-md:flex-1 max-md:text-left max-md:text-sm max-md:font-semibold max-md:text-black">
          {title}
        </h6>
        <p className="md:w-77.5 w-50"> {detail} </p>
        </div>
        <p
          className={`text-medium font-semibold w-60.75 ${result ? "text-[#D00000]" : "text-[#1EC15F]"} max-md:w-auto max-md:text-sm max-md:font-bold max-md:flex-shrink-0`}
        >
          {text}
        </p>
        <img className="mr-8 max-md:mr-0 max-md:w-5 max-md:h-5 max-md:flex-shrink-0" src={icon} alt="icon remove" />
      </div>
    </div>
  );
};

export default CardHistoryTransaction;
