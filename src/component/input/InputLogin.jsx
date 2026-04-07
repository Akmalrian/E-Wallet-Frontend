/**
 * Button Component
 * @type {tipedata}
 * @param {Object} props
 * @param {String} props.label
 * @param {String} [props.type="text"]
 * @param {String} props.placeholder
 * @param {String} props.name
 * @param {String} props.id
 * @param {String} props.icon
 * @return {JSX.Elements}
 * 
 */

import React, { forwardRef } from "react";

const InputLogin = forwardRef(({ label, type = "text", placeholder, id, icon, ...props }, ref) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block font-semibold text-[#0B132A] mb-2 text-base">
        {label}
      </label>
      <div className="relative flex items-center">
        {icon && (
          <img 
            src={icon} 
            alt="" 
            className="absolute left-4 w-5 h-5 pointer-events-none" 
          />
        )}
        
        <input
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          {...props}
          className={`w-full py-3 rounded-2xl border border-gray-200 focus:border-[#2948FF] outline-none transition bg-transparent ${icon ? 'pl-12' : 'pl-4'} pr-4`}
        />
      </div>
    </div>
  );
});


export default InputLogin;