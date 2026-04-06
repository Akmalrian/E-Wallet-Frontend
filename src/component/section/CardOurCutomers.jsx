const CardOurCustomers = ({ icon, title, rate, mark, text }) => {
  return (
    <div className="bg-[#E8E8E84D] h-[380px] w-[303px] rounded-2xl p-4">
      <div className="flex flex-col  items-center text-center mt-8">
        <img src={icon} alt="Customer Photo" />
        <h6 className="text-black font-bold mt-6 text-[18px]">{title}</h6>
        <img className="mt-4" src={rate} alt="rating customer" />
        <img className="mt-6" src={mark} alt="mark image" />
        <p className="text-[#4F5665] mt-4 text-[16px]">{text}</p>
      </div>
    </div>
  );
};

export default CardOurCustomers;
