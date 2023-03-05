import { Disclosure } from "@headlessui/react";
import React from "react";
import SettingMenu from "../containers/setting-menu";
import SideNavBar from "./side-nav-bar";

const pathToAsset = "/assets/image/";

const NavBar = ({ clicked, setClicked }: any) => {
  return (
    <Disclosure as='nav' className=''>
      {({ open }: any) => (
        <>
          <div className='max-w-7xl mx-auto px-2'>
            <div className='relative flex justify-between h-16 md:h-10'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100/30'>
                  <img src={pathToAsset + "button-nav.png"} />
                </Disclosure.Button>
              </div>
              <div className=' md:items-stretch md:justify-start md:z-10'>
                <div className='hidden md:block fixed left-0 '>
                  <SideNavBar />
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:hidden'>
                <SettingMenu cliked={clicked} setClicked={setClicked} />
              </div>
            </div>
          </div>
          <Disclosure.Panel className='md:hidden'>
            <div className='pt-2 pb-4 space-y-1'>
              <Disclosure.Button
                as='a'
                href='/'
                className='border-transparent cyan cyan block pl-3 pr-4 py-2 hover:border-l-4 text-base text-white font-medium'
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                className='border-transparent text-white/50 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Dashbord
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/services/laver'
                className='border-transparent text-white/50 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Orders
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/loi'
                className='border-transparent text-white/50 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Email
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/blogs'
                className='border-transparent text-white/50 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Notifications
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/contact/'
                className='border-transparent text-white/50 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              >
                Settings
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
