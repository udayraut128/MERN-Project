import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="">
      <label className="">{label}</label>
      <div className="flex ">
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : "text"
          }
          placeholder={placeholder}
          className="w-full bg-transparent flex outline-none"
          value={value}
          onChange={(e) => onChange(e)}
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => toggleShowPassword()} // Fixed "onClick"
              />
            ) : (
              <FaRegEyeSlash
                size={22} // Fixed "size{22}" to "size={22}"
                className="text-slate-400 cursor-pointer"
                onClick={() => toggleShowPassword()} // Fixed "onClick"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
