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
      <div className='flex w-16 flex-col items-center space-y-1 py-6 bg-baseDark2 h-screen '>
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
                  className={` ${
                    active === index
                      ? ` bg-baseDark ml-8 rounded-2xl  xl:ml-9`
                      : ``
                  } p-5 `}
                >
                  <div
                    className={`${
                      active === index
                        ? `  bg-primary min-h-[5vh] min-w-[5vw] rounded-md relative flex justify-center items-center -left-3 lg:min-h-[5vh] lg:min-w-[3vw] xl:min-h-[6vh]`
                        : `bg-transparent`
                    } `}
                  >
                    <button onClick={() => handleActive(index)}>
                      {active === index ? (
                        <img
                          src={item.path_activate}
                          className=' min-w-[1vw] h-full'
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
          {/* <div className='flex items-center justify-center py-14 pb-5 xl:py-2'>
            <img src={pathToAssetToSideBar + "Logout.png"} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
