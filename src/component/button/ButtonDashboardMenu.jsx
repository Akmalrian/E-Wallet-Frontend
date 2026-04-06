const ButtonDashboardMenu = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group w-[208px] flex items-center gap-2 h-11.25 font-montserrat"
    >
      <span className="bg-white ml-2 rounded-full p-1"><img src={icon} className="w-6 h-6" alt="icon menu" /></span>
      <span className="">{text}</span>
    </button>
  );
};
export default ButtonDashboardMenu;