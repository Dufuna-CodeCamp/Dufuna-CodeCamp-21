import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

export const CartItems = (cart) => {
  return (
    <div>
      <div className="flex justify-between items-center w-2/3 mx-auto mt-6 max-[600px]:w-[90%]">
        <div className="flex justify-between w-[100px] ml-[-35px]">
          <FontAwesomeIcon
            icon={faXmark}
            className="ml-[10px] my-auto text-[#c4c4c4]"
          />
          <img src={cart.src} alt={cart.alt} className="ml-[10px]" />
        </div>
        <div className="ml-[-450px] w-[120px] max-[600px]:ml-[-200px] max-[600px]:mr-[-100px]">
          <span className="text-xs font-bold text-[#434d4d]">{cart.title}</span>
          <div className="mt-1.5">
            <button>
              <FontAwesomeIcon
                icon={faPlus}
                className="w-[6px] border border-solid border-[#ad4c4c] px-1.5 rounded text-[#ad4c4c]"
                onClick={cart.handleIncrease}
              />
            </button>{" "}
            <span className="mx-2 text-[#ad4c4c] text-sm">
              {cart.quantity}{" "}
            </span>{" "}
            <button>
              <FontAwesomeIcon
                icon={faMinus}
                className="w-[6px] border border-solid border-[#ad4c4c] px-1.5 rounded text-[#ad4c4c]"
                onClick={cart.handleDecrease}
              />
            </button>
          </div>
        </div>
        <span className="">&#35; {cart.price}</span>
      </div>
      <hr className="w-2/3 mx-auto mt-4 border border-solid border-[#c4c4c4]-500 max-[600px]:w-[90%]" />
    </div>
  );
};
