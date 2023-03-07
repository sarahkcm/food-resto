import React, { useEffect } from "react";
import { HotDishesData } from "../../../common/constants/hot-dishes";
import Title from "../../../common/components/Home/title";
import Menu from "../../../common/layout/menu";
import NavBar from "../../../common/layout/nav-bar";
import Settings from "../../../common/layout/settings";
import Card from "./card";
import DropDown from "./drop-down";
import Hero from "./hero";
const pathToAsset = "/assets/image/";

const HomeComponent = () => {
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setClicked(false);
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={` bg-baseDark w-screen h-screen  xl:w-full`}>
      <NavBar
        clicked={clicked}
        setClicked={setClicked}
        open={open}
        setOpen={setOpen}
      />
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
      <div
        className={`  ${
          open || clicked ? ` brightness-75` : ``
        } bg-baseDark md:pl-20 lg:flex lg:flex-row lg:justify-between`}
      >
        <div className='lg:w-8/12'>
          <Hero />
          <Menu />
          <div className='py-2 px-1 flex flex-row sm:px-4 lg:px-6 xl:px-20 '>
            <Title text={"Choose Dishes"} status={false} />
            <DropDown />
          </div>
          <div className='px-4 pt-10'>
            <div className='grid xs:grid-cols-2 place-items-center bg-baseDark gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-3 lg:w-11/12 lg:px-6 sm:px-4'>
              {HotDishesData.map(({ title, img, price, quantity }, index) => {
                return (
                  <div key={index} className=''>
                    <Card
                      open={open}
                      clicked={clicked}
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
        <div className='hidden lg:block'>
          <div className='fixed -inset-y-0 top-0  bg-baseDark2'>
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeComponent;
