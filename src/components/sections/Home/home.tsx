import React from "react";
import Title from "../../../common/components/Home/title";
import { HotDishesData } from "../../../common/constants/hot-dishes";
import Menu from "../../../common/layout/menu";
import NavBar from "../../../common/layout/nav-bar";
import Settings from "../../../common/layout/settings";
import Card from "./card";
import DropDown from "./drop-down";
import Hero from "./hero";
const pathToAsset = "/assets/image/";
const HomeComponent = () => {
  const [clicked, setClicked] = React.useState<boolean>(false);
  return (
    <div className=' bg-baseDark w-screen h-screen  xl:w-full'>
      <NavBar clicked={clicked} setClicked={setClicked} />
      <div className='relative'>
        <div className='absolute right-0 top-0 md:block hidden lg:hidden'>
          <button onClick={() => setClicked(true)}>
            <img src={pathToAsset + "Setting.png"} />
          </button>
        </div>
      </div>
      {clicked && (
        <div className='relative'>
          <div className='absolute top-0 right-0 lg:hidden'>
            <Settings clicked={clicked} setClicked={setClicked} />
          </div>
        </div>
      )}
      <div className='bg-baseDark md:pl-20 lg:flex lg:flex-row lg:justify-between'>
        <div className='lg:w-8/12'>
          <Hero />
          <Menu />
          <div className='py-2 px-1 flex flex-row sm:px-4 '>
            <Title text={"Choose Dishes"} status={false} />
            <DropDown />
          </div>
          <div className='px-4 lg:px-0'>
            <div className='grid xs:grid-cols-2 place-items-center bg-baseDark gap-x-10 sm:grid-cols-3 lg:grid-cols-3 lg:w-11/12 sm:px-4'>
              {HotDishesData.map(({ title, img, price, quantity }, index) => {
                return (
                  <div key={index} className=''>
                    <Card
                      title={title}
                      img={img}
                      price={price}
                      quantity={quantity}
                      cle={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='hidden lg:block lg:w-12/12'>
          <div className='fixed -inset-y-0 top-0  bg-baseDark2 w-80'>
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
