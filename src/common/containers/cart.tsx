import React from "react";
import { HotDishesData } from "../constants/hot-dishes";
const pathToAsset = "/assets/image/";

const Cart = () => {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'></div>
      <div className='container overflow-y-auto  space-y-8'>
        {HotDishesData.map(({ title, img, price, quantity }, index) => {
          return (
            <div key={index} className=''>
              <a href='#' className='flex items-start space-x-2 group'>
                <img
                  className='flex-shrink-0 object-cover w-10 h-10 rounded-full'
                  src={img}
                  alt='John Doe'
                />
                <div className='overflow-hidden'>
                  <h4 className='font-semibold text-white truncate'>
                    {title}
                  </h4>
                  <p className='text-sm text-gray-400 truncate pt-1'>{price}</p>
                  <div className='pt-2'>
                    <input
                      className=' bg-bgGrey rounded-md py-2 lg:px-14'
                      placeholder='Oder Note...'
                    />
                  </div>
                </div>
                <span className='text-xs text-white bg-bgGrey px-4 py-2 rounded-md whitespace-nowrap '>
                  1
                </span>
                <div className='flex flex-col justify-center items-center px-2 space-y-4 whitespace-nowrap '>
                  <p className='text-white pt-2'>{price}</p>
                  <div className='border-primary border-2 rounded-md px-2 py-2 flex items-center'>
                    <img src={pathToAsset + "Trash.png"} className='w-6' />
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
