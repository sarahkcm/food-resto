import React from "react";
import { MenuData } from "../constants/menu";

const Menu = () => {
  return (
    <div className='overflow-x-auto overflow-y-hidden'>
      <div className='text-sm font-medium text-center text-gray-500 '>
        <ul className='grid grid-flow-col place-items-center -mb-px '>
          {MenuData.map((element, index) => (
            <li key={index} className='mr-2'>
              <a
                href='#'
                className='inline-block text-sm p-4 border-b-2 border-transparent rounded-t-lg hover:text-primary hover:border-primary'
              >
                {element}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
