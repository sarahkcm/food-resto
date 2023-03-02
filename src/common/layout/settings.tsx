import React from "react";
import Title from "../components/Home/title";
import { Options } from "../constants/options";
import { HotDishesData } from "../constants/hot-dishes";

const pathToAsset = "/assets/image/";

const Settings = ({ clicked, setClicked }: any) => {
  const [active, setActive] = React.useState(null);
  const handleOptionClick = (index: any) => {
    setActive(index);
  };
  return (
    <section className=''>
      <div className='absolute -right-14 p-2 transform -translate-x-full lg:hidden'>
        <button
          onClick={() => setClicked(!clicked)}
          className='p-2 rounded-md text-dark dark:text-light focus:outline-none focus:ring'
        >
          <svg
            className='w-5 h-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill=''
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <div className='flex flex-col h-screen pl-10 lg:pl-1'>
        <div className='flex-shrink-0 p-4 pt-10'>
          <p className='text-white font-semibold'>Orders #34562</p>
          <div className='flex flex-row'>
            {Options.map(({ name }, index) => {
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
                        active === index
                          ? `text-white`
                          : `text-primary font-normal`
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
        <div className='flex-1 p-4 overflow-y-hidden'>
          <div className='flex flex-row justify-between space-y-2  border-b-2 pb-4 border-gray-700'>
            <div className='flex flex-row justify-between space-x-24'>
              <p className='text-white'>Item</p>
              <div className='flex text-white space-x-8'>
                <p>Qty</p>
                <p>Price</p>
              </div>
            </div>
          </div>
          <div className='space-y-6'>
            <div className='flex items-center justify-between'></div>
            <div className='container scroll-py-4'>
              {HotDishesData.map(({ title, img, price, quantity }, index) => {
                return (
                  <div key={index} className='space-y-4'>
                    <a href='#' className='flex items-start space-x-2 group'>
                      <img
                        className='flex-shrink-0 object-cover w-10 h-10 rounded-full'
                        src={img}
                        alt='John Doe'
                      />
                      <div className='overflow-hidden'>
                        <h4 className='font-semibold text-white transition-colors truncate'>
                          {title}
                        </h4>
                        <p className='text-sm text-gray-400 truncate pt-1'>
                          {price}
                        </p>
                        <div className='pt-2'>
                          <input
                            className=' bg-bgGrey rounded-md text-start pl-2'
                            placeholder='Oder Note...'
                          />
                        </div>
                      </div>
                      <span className='text-xs text-white bg-bgGrey px-4 py-2 rounded-md whitespace-nowrap '>
                        1
                      </span>
                      <div className='flex flex-col justify-center items-center space-y-2 whitespace-nowrap '>
                        <p className='text-white'>{price}</p>
                        <div className=' border-primary border-2 rounded-md px-2 py-2'>
                          <img
                            src={pathToAsset + "Trash.png"}
                            className='w-6'
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className='fixed bottom-0'>
          <footer className=' bg-bgGrey w-screen'>
            <div className='px-4 flex flex-col'>
              <div className='flex flex-row justify-between py-6 text-sm'>
                <p className=' text-textLight'>Discount</p>
                <p className='text-white'>$ 0</p>
              </div>
              <div className='flex flex-row justify-between py-2 text-sm'>
                <p className=' text-textLight'>Sub total</p>
                <p className='text-white'>$ 41.50</p>
                          </div>
                          <div className="py-2"></div>
                          <button className="text-white bg-primary rounded-md py-2">
                              Continue to payement
                          </button>
            </div>
          </footer>
        </div> */}
      </div>
    </section>
  );
};

export default Settings;
