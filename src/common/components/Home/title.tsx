import React from "react";
import { FormatDateOptions } from "@formatjs/intl";

const Title = ({ status, text, style, method }: any) => {
  const today = new Date();
  const options: FormatDateOptions = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  };
  const date = today.toLocaleDateString("en-US", options);
  return (
    <div className='container py-1 px-4 lg:px-0'>
      <div className='flex flex-col justify-start items-start font-barlow'>
        <h1 className={` ${style} text-white text-lg font-bold tracking-wide`}>{text}</h1>
        <p className={`${status ? `block` : `hidden`} text-textLight text-sm`}>
          {date}
        </p>
        {method && (
          <p className='text-textLight text-sm pt-2'>3 payment method available</p>
        )}
      </div>
    </div>
  );
};

export default Title;
