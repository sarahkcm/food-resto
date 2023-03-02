import React from "react";
import Title from "../../../common/components/Home/title";
import Search from "./search";

const Hero = () => {
  return (
    <div className="sm:px-4">
      <div className='grid grid-flow-col overflow-auto md:pr-10'>
        <Title text={"Jaegar Resto"} status={true} style={"md:text-3xl md:py-1"} />
        <Search />
      </div>
    </div>
  );
};

export default Hero;
