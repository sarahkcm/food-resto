import { Menu } from '@headlessui/react';
import React from 'react'
const pathToAsset = "/assets/image/";

const SettingMenu = ({clicked, setClicked}:any) => {
  return (
    <Menu as='div' className='ml-3 relative'>
      <div>
        <div className='rounded-full flex text-sm'>
          <button
            onClick={() => {
              setClicked(true);
            }}
          >
            <img
              className='h-8 w-8 rounded-full'
              src={pathToAsset + "Setting.png"}
              alt=''
            />
          </button>
        </div>
      </div>
    </Menu>
  );
}

export default SettingMenu
