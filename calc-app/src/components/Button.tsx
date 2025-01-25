//import React from "react";

interface Props {
  text: string;
  type?: string;
  bigSize?: boolean;
  onClick?: (text: string) => void;
}

const Button = ({ text, type = "number", bigSize = false, onClick }: Props) => {
  let color: string;

  // Set color of the button.
  if (type == "number") {
    color = "bg-gray-800 hover:bg-gray-700";
  } else if (type == "operator") {
    color = "bg-orange-400 hover:bg-orange-300";
  } else {
    color = "bg-gray-500 hover:bg-gray-400";
  }

  return (
    <div
      className={`m-1 p-3 ${bigSize ? " col-span-2" : "col-span-1"} h-15 
                  ${color} text-white drop-shadow-heavy
                  rounded-4xl hover:rounded-3xl transition-all
                  text-center text-2xl`}
      onClick={() => {
        if (onClick) {
          onClick(text);
        }
      }}
    >
      {text}
    </div>
  );
};

export default Button;
