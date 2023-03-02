import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import React, { Fragment, useState } from "react";
import Settings from "./settings";
import path from "path";
import Cart from "../components/Home/cart";

const pathToAsset = "/assets/image/";
const pathToAssetToSideBar = "/assets/image/side-bar/";

const NavBar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

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
                  <div className=''>
                    <div className='flex w-16 flex-col items-center space-y-1 py-6 bg-baseDark2 '>
                      <div className='flex items-center justify-center rounded-md p-4'>
                        <img
                          src={pathToAssetToSideBar + "Logo.png"}
                          className='w-[100%] h-full'
                        />
                      </div>

                      <div className='space-y-16 rounded-md'>
                        <ul>
                          <li className='p-5'>
                            <img
                              src={
                                pathToAssetToSideBar + "Home-desactivate.png"
                              }
                              className=''
                            />
                          </li>
                          <li className='p-5'>
                            <img src={pathToAssetToSideBar + "Discount.png"} />
                          </li>
                          <li className='p-5'>
                            <img src={pathToAssetToSideBar + "Graph.png"} />
                          </li>
                          <li className='p-5'>
                            <img src={pathToAssetToSideBar + "Message.png"} />
                          </li>
                          <li className='p-5'>
                            <img
                              src={pathToAssetToSideBar + "Notification.png"}
                            />
                          </li>
                          <li className='p-5'>
                            <img src={pathToAssetToSideBar + "Setting.png"} />
                          </li>
                        </ul>
                        <div className='flex items-center justify-center py-14 pb-5'>
                          <img src={pathToAssetToSideBar + "Logout.png"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:hidden'>
                {/* Cart dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='rounded-full flex text-sm'>
                      <button
                        onClick={() => {
                          setIsClicked(!isClicked);
                        }}
                      >
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='h-8 w-8 rounded-full'
                          src={pathToAsset + "Setting.png"}
                          alt=''
                        />
                      </button>
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
              {isClicked && <Settings clicked={isClicked} setClicked={setIsClicked} />}
              <div className='md:block'>
                <Cart />
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
