import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavBarData } from "../constants/nav-bar";
import SettingMenu from "../containers/setting-menu";
import SideNavBar from "./side-nav-bar";

const pathToAsset = "/assets/image/";

const NavBar = ({ clicked, setClicked, open, setOpen }: any) => {
  return (
    <div className=''>
      <>
        <div className='max-w-7xl mx-auto px-2'>
          <div className='relative flex justify-between h-16 md:h-10'>
            <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
              <button
                onClick={() => {
                  setOpen(true) && clicked === true
                    ? setClicked(false)
                    : setClicked(false);
                }}
                className='inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100/30'
              >
                <img src={pathToAsset + "button-nav.png"} />
              </button>
            </div>
            <div className=' md:items-stretch md:justify-start md:z-10'>
              <div className='hidden md:block fixed left-0 '>
                <SideNavBar />
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:hidden'>
              {!open && (
                <SettingMenu cliked={clicked} setClicked={setClicked} />
              )}
            </div>
          </div>
        </div>
        {open && !clicked && (
          <div className='md:hidden'>
            <div className='absolute top-0 w-10/12 h-screen z-10 bg-baseDark2 sm:w-1/2'>
              <div className='grid grid-flow-row place-items-start gap-y-6 pt-14'>
                {NavBarData.map(({ name, path }, index) => {
                  return (
                    <div key={index} className='px-4 transi'>
                      <button className='border-transparent text-start block pl-3 pr-4 hover:border-l-4 text-base text-white font-medium'>
                        {name}
                      </button>
                    </div>
                  );
                })}
              </div>
              <button
                className='absolute top-0 right-0 mt-2 mr-2'
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default NavBar;
