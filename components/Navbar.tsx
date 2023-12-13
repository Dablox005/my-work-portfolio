"use client"
import { NAV_LINKS } from "@/constants";
import { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";


// Darkmode, Navbar 
// type NavbarProps = {
//   darkMode: boolean;
//   toggleDarkMode: () => void;
// }

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function darkMode() {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    setIsDarkMode(true)
  }
  function lightMode() {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
    setIsDarkMode(false);
  }

  const handleModeChange = () => {
    if (isDarkMode) {
      lightMode();
    } else {
      darkMode();
    }
  };

  useEffect(() => {
    const currentMode = localStorage.getItem('darkMode');
    if (currentMode === 'true') {
      darkMode();
    }
  }, []);


  return (
    <nav className="w-full flex py-6 items-center
    justify-between bg-gradient-to-l
     from-slate-900 font-sans antialiased static">

      <Switch
        defaultChecked={isDarkMode}
        onChange={handleModeChange}
        className={`relative w-10 h-4 rounded-full appearance-none
         cursor-pointer focus:outline-none bg-gray-400
          dark:bg-gray-700 transition-all duration-300`}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )}
      >
      </Switch>

      {/* Desktop View */}

      <ul className="list-none sm:flex hidden 
      justify-end items-center flex-1">
        {NAV_LINKS.map((item, index) => (
          <li
            key={item.key}
            className={`font-poppins 
           font-normal 
           cursor-pointer 
           text-[16px] ${index === NAV_LINKS.length
                - 1 ? 'mr-0' : 'mr-10'}
           text-white text-2xl font-black
           transition ease-in-out delay-150
             hover:-translate-y-1
             hover:rounded-lg
             hover:font-black
             hover:scale-110
            hover:bg-green-700 duration-300  
           `}
          >
            <a href={`#${item.href}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Viewing functionality on Smaller Devices */}
      <div className='sm:hidden flex flex-1 
      justify-end items-center'>
        <img src={toggle ? "/close.png" : "/menu.png"}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Conditional rendering of the menu based on toggle */}
        {toggle && (
          <div className={`p-2 top-[40px] right-0 mx-4 container
         border my-2 min-w-[40px] rounded-md shadow-md`}>
            <ul className='list-none'>
              {NAV_LINKS.map((item, index) => (
                <li
                  key={item.key}
                  className={
                    `font-poppins 
           font-normal 
           hover:font-black
           hover:text-2xl
           cursor-pointer 
           text-[14px] 
           ${index === NAV_LINKS.length - 1 ? 'mr-0' : 'mb-2'}
           hover:bg-green-700`}
                >
                  <a href={`#${item.href}`}>
                    {item.label}
                  </a>
                </li>
              ))}

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar