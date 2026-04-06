const SignInWithButton = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-full hover:bg-gray-50 transition font-montserrat"
    >
      <img src={icon} className="w-5 h-5" alt="" />
      <span className="text-gray-600 font-medium">{text}</span>
    </button>
  );
};
export default SignInWithButton;