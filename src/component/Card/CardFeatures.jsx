const CardFeatures = ({ icon, title, text }) => {
  return (
    <div className="h-16.75 w-98 max-md:h-auto max-md:w-full">
      <div className="flex gap-4">
        <div className="flex items-center">
          <img className="w-20 h-12 max-md:w-12 max-md:h-10" src={icon} alt="" />
        </div>
        <div>
          <h6 className="text-white font-bold text-[18px] max-md:text-base">{title}</h6>
          <p className="text-white text-medium max-md:text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFeatures;

