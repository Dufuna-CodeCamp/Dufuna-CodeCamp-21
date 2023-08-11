import React from "react";

const Navbar = () => {
  return (
    <div className="pt-4 px-10 flex justify-between items-center">
      <div className="font-bold cursor-pointer">
        Food<span className="text-[#ad4c4c]">Bag</span>
      </div>
      <div className="flex items-center text-[14px] text-[#696969]">
        <div className="mx-4 cursor-pointer">Cart</div>
        <div className="mx-4 cursor-pointer">Login</div>
        <button className="py-1 px-2 border border-[#ad4c4c] rounded mx-3">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
