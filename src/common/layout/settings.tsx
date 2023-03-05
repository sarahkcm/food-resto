import React from "react";
import PayementComponent from "../../components/sections/payement/payement";
import Cart from "../containers/cart";
import ConfirmCartButton from "../containers/confirm-cart-button";
import Options from "../containers/options";

const Settings = ({ setClicked, style }: any) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className=''>
      <div className={`${show ? `hidden` : `block`}`}>

      <section className='fixed inset-y-0 top-0 right-0 z-10 flex-shrink-0 bg-baseDark2  w-72 sm:w-80 lg:w-96  focus:outline-none xl:w-[30vw]'>
        <div className='absolute -right-14 p-2 transform -translate-x-full lg:hidden'>
          <button
            onClick={() => setClicked(false)}
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
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='flex flex-col h-screen'>
          <Options />
          <div className='p-4 overflow-auto'>
            <div className='flex flex-row justify-between space-y-2  border-b-2 pb-4 pl-10 lg:pl-1 border-gray-700'>
              <div className='flex flex-row justify-between space-x-24'>
                <p className='text-white'>Item</p>
                <div className='flex text-white space-x-8'>
                  <p>Qty</p>
                  <p>Price</p>
                </div>
              </div>
            </div>
            <Cart />
          </div>
          <ConfirmCartButton show={show} setShow={setShow} />
        </div>
      </section>
      </div>
      <div className={`${show ? `block` : `hidden`}`}>
        <PayementComponent />
      </div>
    </div>
  );
};

export default Settings;
