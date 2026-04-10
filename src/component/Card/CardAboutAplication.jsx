const CardAboutAplication = ({ icon, title, text }) => {
  return (
    <div className="bg-primary h-72.25 w-52.75 rounded-2xl p-4">
        <div className="flex flex-col  items-center text-center">
        <span className="bg-white w-15 h-15 pd-10 rounded-full items-center flex justify-center mt-2">
            <img className="w-8 h-8" src={icon} alt="" />
        </span>
        <h6 className="text-white font-bold mt-2 text-[18px]">{title}</h6>
        <p className="text-white mt-4 text-medium">{text}</p>
        </div>
    </div>
  );
};

export default CardAboutAplication;
