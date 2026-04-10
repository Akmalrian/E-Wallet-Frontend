const CardFeatures = ({ icon, title, text }) => {
  return (
    <div className="h-16.75 w-98">
      <div className="flex gap-4">
        <div className="flex items-center">
          <img className="w-20 h-12" src={icon} alt="" />
        </div>
        <div>
          <h6 className="text-white font-bold text-[18px]">{title}</h6>
          <p className="text-white text-medium">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFeatures;

