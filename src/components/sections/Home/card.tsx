import React from "react";

const Card = ({ img, quantity, title, price }: any) => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <button
      className='relative max-w-md mx-auto min-w-[24vw] min-h-[36vh] break-words bg-baseDark2 w-full mb-6 sm:mb-10 shadow-lg rounded-xl mt-16 md:max-w-[26vw] lg:min-w-[16vw]'
      onClick={() => setIsClicked(!isClicked)}
    >
      <div>
        <div className='px-4'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full flex justify-center'>
              <div className='relative flex justify-center items-center'>
                <img
                  src={img}
                  className='shadow-xl rounded-full align-middle border-none absolute max-w-[150px]'
                />
              </div>
            </div>
          </div>
          {isClicked ? (
            <div className='text-center mt-[5.2rem]'>
              <h3 className='text-sm text-white font-semibold leading-normal '>
                {title}
              </h3>
              <div className='text-xs mt-2 text-slate-400 font-bold mb-6'>
                Lorem ipsum dolor
              </div>
              <button className='bg-primary w-full rounded-md '>
                <div className='text-xs mt-2 mb-2 text-white font-bold'>
                  {price}
                </div>
              </button>
            </div>
          ) : (
            <div className='text-center mt-[5.2rem]'>
              <h3 className='text-sm text-white font-semibold leading-normal mb-1'>
                {title}
              </h3>
              <div className='text-xs mt-2 mb-2 text-slate-400 font-bold sm:pt-4'>
                {price}
              </div>
              <div className='text-xs mt-0 text-slate-400 font-bold'>
                {quantity} Bowls available
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default Card;
