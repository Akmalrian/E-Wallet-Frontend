// const InputRegister = ({ label, type = "text", placeholder, name, id, icon }) => {
//   return (
//     <div className="w-full">
//       <label htmlFor={id} className="block font-semibold text-[#0B132A] mb-1 text-base">
//         {label}
//       </label>
//       <div className="relative flex items-center">
//         {icon && (
//           <img 
//             src={icon} 
//             alt="" 
//             className="absolute left-4 w-5 h-5 pointer-events-none" 
//           />
//         )}
        
//         <input
//           type={type}
//           name={name}
//           id={id}
//           placeholder={placeholder}
//           className={`w-full py-3 rounded-2xl border border-gray-200 focus:border-[#2948FF] outline-none transition bg-transparent ${icon ? 'pl-12' : 'pl-0'}`}
//         />
//       </div>
//     </div>
//   );
// };

// export default InputRegister;