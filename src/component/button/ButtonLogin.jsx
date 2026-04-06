const ButtonLogin = ({ children, onClick, type = "button", variant = "primary" }) => {
  const baseStyle = "w-full py-3 rounded-xl font-bold shadow-lg transition transform active:scale-95 font-montserrat";
  const variants = {
    primary: "bg-[#2948FF] text-white hover:bg-blue-700",
    outline: "border-2 border-[#2948FF] text-[#2948FF] hover:bg-blue-50",
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};
export default ButtonLogin;