const CardHistoryDashboard = ({ icon, title, detail, text }) => {
const isNegative = detail.includes("-");
  return (
    <div>
      <div className="flex gap-5 items-center">
        <div className="flex items-center">
          <img className="w-14 h-14" src={icon} alt="" />
        </div>
        <div className="w-30">
          <h6 className="text-black font-bold text-[18px]">{title}</h6>
          <p className="text-[#4F5665] text-[16px]">{text}</p>
        </div>
        <p className={`text-[16px] font-semibold ${isNegative ? 'text-[#D00000]' : 'text-[#1EC15F]'}`}>
            {detail}</p>
      </div>
    </div>
  );
};

export default CardHistoryDashboard;

