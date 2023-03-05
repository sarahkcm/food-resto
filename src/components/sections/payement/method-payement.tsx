import React from 'react'
import { MethodsPaymentData } from "../../../common/constants/methods-payment";
const pathToAssetToCard = "assets/image/card/";

const MethodPayement = () => {
      const [activePayment, setActivePayment] = React.useState(null);
      const handleActivePayment = (index: any) => {
        setActivePayment(index);
      };
  return (
    <div className='grid grid-flow-col gap-x-2 py-4 px-2 xl:gap-x-0'>
      {MethodsPaymentData.map(
        ({ title, img_deactivate, img_activate }, index) => {
          return (
            <button
              onClick={() => handleActivePayment(index)}
              key={index}
              className={`grid grid-flow-row  rounded-2xl place-items-center py-2 w-[28vw] md:w-[13vw] xl:w-[10vw] ${
                activePayment === index
                  ? ` border-2 border-white`
                  : ` border-2 border-textLight/50`
              } `}
            >
              {activePayment === index ? (
                <>
                  <div className=' relative left-6'>
                    <img
                      src={pathToAssetToCard + "checkmark-circle.png"}
                      className=''
                    />
                  </div>
                  <img
                    src={img_activate}
                    className='min-w-[5vw] min-h-[4vh] md:min-w-[3vw] md:min-h-[3vh] xl:min-w-[2vw] xl:min-h-[2vh]'
                  />
                  <p className='text-white text-center'>{title}</p>
                </>
              ) : (
                <>
                  <img
                    src={img_deactivate}
                    className={`${
                      activePayment !== null ? `hidden` : "block"
                    }min-w-[5vw] min-h-[4vh] md:min-w-[3vw] md:min-h-[3vh] xl:min-w-[2vw] xl:min-h-[2vh]`}
                  />
                  <p className='text-textLight text-center'>{title}</p>
                </>
              )}
            </button>
          );
        }
      )}
    </div>
  );
}

export default MethodPayement
