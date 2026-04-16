import { useState, forwardRef } from "react";

const InputLogin = forwardRef(({ label, type, icon, placeholder, id, ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 font-montserrat">
        {label}
      </label>
      <div className="relative group">
        {/* Ikon Sebelah Kiri */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src={icon} alt="" className="h-5 w-5 opacity-50 group-focus-within:opacity-100 transition-opacity" />
        </div>

        <input
          {...rest}
          ref={ref}
          id={id}
          type={inputType}
          placeholder={placeholder}
          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-montserrat"
        />

        {type === "password" && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-primary transition-colors"
          >
            {showPassword ? <img className="w-8" src="/image/closed-eye.jpg" alt="closed eye password" /> : <img className="w-8" src="/image/open-eye.png" alt="open eye password"/>}
          </button>
        )}
      </div>
    </div>
  );
});

InputLogin.displayName = "InputLogin";
export default InputLogin;