import React from "react";
import { SideBarData } from "../constants/side-bar";

const pathToAssetToSideBar = "/assets/image/side-bar/";

const SideNavBar = () => {
  const [active, setActive] = React.useState(null);
  const handleActive = (index: any) => {
    setActive(index);
  };
  return (
    <div className=''>
      <div className='flex flex-col items-center space-y-1 py-6 bg-baseDark2 h-screen w-[10vw] lg:w-[7vw] xl:w-[5vw]'>
        <div className='flex items-center justify-center rounded-md p-4'>
          <img
            src={pathToAssetToSideBar + "Logo.png"}
            className='w-[100%] h-full'
          />
        </div>
        <div className='space-y-10 rounded-md xl:space-y-6'>
          {SideBarData.map((item, index) => {
            return (
              <ul
                className={` ${
                  item.path_deactivate === "/assets/image/side-bar/Logout.png"
                    ? `pt-4`
                    : ``
                } flex justify-center items-center`}
              >
                <li
                  className={`${
                    active === index
                      ? `bg-baseDark ml-8 rounded-2xl overflow-hidden rounded-tr-none rounded-br-none`
                      : ``
                  } p-5`}
                >
                  <div
                    className={`${
                      active === index
                        ? `bg-primary min-h-[5vh] min-w-[5vw] rounded-md flex justify-center items-center lg:min-h-[5vh] lg:min-w-[4vw]  xl:min-h-[6vh] xl:min-w-[4vw] 2xl:min-h-[5vh] 2xl:min-w-[3vw]`
                        : `bg-transparent`
                    } `}
                  >
                    <button onClick={() => handleActive(index)}>
                      {active === index ? (
                        <img
                          src={item.path_activate}
                          className=' min-w-[1vw] h-full lg:max-w-[2vw]'
                        />
                      ) : (
                        <img src={item.path_deactivate} className='' />
                      )}
                    </button>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
