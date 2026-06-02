const CardHistoryDashboard = ({ icon, title, detail, text }) => {
const isNegative = detail.includes("-");
  return (
    <div>
      <div className="flex gap-5 items-center max-md:gap-3">
        <div className="flex items-center">
          <img className="w-14 h-14" src={icon} alt="Profile" />
        </div>
        <div className="w-30 max-md:flex-1">
          <h6 className="text-black font-bold text-[18px]">{title}</h6>
          <p className="text-secondary text-medium">{text}</p>
        </div>
        <p className={`text-medium font-semibold ${isNegative ? 'text-[#D00000]' : 'text-[#1EC15F]'} max-md:ml-auto max-md:text-sm max-md:font-bold`}>
            {detail}</p>
      </div>
    </div>
  );
};

export default CardHistoryDashboard;

