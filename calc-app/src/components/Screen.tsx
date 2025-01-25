//import React from 'react'

interface Props {
  text: string;
}

const Screen = ({ text }: Props) => {
  return (
    <div
      className={`m-1 p-4 h-15 col-span-4 
                  bg-amber-200 text-black text-right drop-shadow-heavy
                  rounded-4xl
                  text-xl`}
    >
      {text}
    </div>
  );
};

export default Screen;
