import { useRouter } from "next/router";
import React from "react";

const ConfirmCartButton = ({ show, setShow }: any) => {
  return (
    <div className='relative bottom-0 w-full bg-baseDark2 '>
      <div className='px-4 flex flex-col'>
        <div className='flex flex-row justify-between py-6 text-sm'>
          <p className=' text-textLight'>Discount</p>
          <p className='text-white'>$ 0</p>
        </div>
        <div className='flex flex-row justify-between py-2 text-sm'>
          <p className=' text-textLight'>Sub total</p>
          <p className='text-white'>$ 41.50</p>
        </div>
        <div className='py-2'></div>
        <button
          onClick={() => setShow(true)}
          className='text-white bg-primary rounded-md py-2'
        >
          Continue to payement
        </button>
      </div>
    </div>
  );
};

export default ConfirmCartButton;
