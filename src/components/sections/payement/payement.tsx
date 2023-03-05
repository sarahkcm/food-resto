import React from "react";
import Title from "../../../common/components/Home/title";
import FormPayement from "./form-payement";
import MethodPayement from "./method-payement";


const PayementComponent = () => {

  return (
    <div>
      <div className='fixed inset-y-0 top-0 right-0 z-10 flex-shrink-0 bg-baseDark2 w-full sm:w-1/2 lg:w-6/12 h-screen'>
        <div className='py-10 md:px-10'>
          <div className='border-b-2 pb-8 border-textLight/50'>
            <Title text={"Payement"} method={true} style={"text-2xl"} />
          </div>
        </div>
        <div className='flex flex-col md:px-10'>
          <Title text={"Payement Method"} />
          <MethodPayement />
          <FormPayement />
        </div>
      </div>
    </div>
  );
};

export default PayementComponent;
