const CardIncome = ({ icon, title, text, detail, arrow, day }) => {
const isNegative = detail.includes("-");
    return (
    <div className="shadow h-[147px] w-[242px] rounded-md mt-10 flex flex-col justify-center">
        <div className="ml-5">
        <div className="flex items-center">
            <img className="w-8 h-8 mr-2" src={icon} alt="icon income" />
        <h6 className="text-[#4F5665] font-medium text-[16px]">{title}</h6>
        </div>
            <p className="text-black font-medium mt-2 text-[24px]">{text}</p>
            <p className={`text-[12px] flex items-center gap-1 mt-2 ${isNegative ? 'text-red-500' : 'text-[#00A700]'}`}>
            {detail}
            <img src={arrow} alt="arrow" />{day}
      </p>
        </div>
    </div>
  );
};

export default CardIncome;
