import React from "react";
import { OptionsData } from "../constants/options";

const Options = () => {
  const [active, setActive] = React.useState(null);
  const handleOptionClick = (index: any) => {
    setActive(index);
  };
  return (
    <div className='flex-shrink-0 p-4 pt-10 pl-10 lg:pl-8'>
      <p className='text-white font-semibold'>Orders #34562</p>
      <div className='flex flex-row'>
        {OptionsData.map(({ name }, index) => {
          return (
            <div key={index} className='grid grid-flow-col px-1 py-2'>
              {" "}
              <button
                onClick={() => handleOptionClick(index)}
                className={` ${
                  active === index
                    ? `bg-primary`
                    : `border-2 border-gray-700/50`
                } px-2 w-full rounded-md `}
              >
                <div
                  className={` ${
                    active === index ? `text-white` : `text-primary font-normal`
                  } text-xs mt-2 mb-2 font-bold`}
                >
                  {name}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
