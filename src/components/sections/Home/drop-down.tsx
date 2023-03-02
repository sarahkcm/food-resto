import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const DropDown = () => {
  const options = [
    { name: "Dine in" },
    { name: "To Go" },
    { name: "Delivery" },
  ];
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className='py-1'>
      <div className='w-full pt-1'>
        <Listbox
          value={selected}
          onChange={(option) => {
            setSelected(option);
          }}
        >
          <div className='relative '>
            <Listbox.Button className='relative w-full cursor-default rounded bg-baseDark2 py-2.5 pl-6 pr-4 text-left text-white text-xs sm:text-sm shadow-sm focus:outline-none focus-visible:border-sky-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 md:text-start'>
              <span className='block truncate'>{selected.name}</span>
              <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2'>
                <svg
                  className='h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M6.293 6.707a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className=' mt-1 max-h-60 w-full overflow-auto rounded-md bg-baseDark2 py-1 text-sm shadow-lg focus:outline-none sm:text-sm'>
                {options.map((option, optionIdx): any => (
                  <Listbox.Option
                    key={optionIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? " text-white font-medium text-sm hover:bg-primary hover:text-white hover:font-bold hover:text-lg"
                          : "text-white font-light"
                      } ${option.name === "Dine in" ? `hidden` : `block`}`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-bold" : "font-normal"
                          }`}
                        >
                          {option.name}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-blue'></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default DropDown;
