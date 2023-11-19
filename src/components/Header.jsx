import { ReactComponent as Wifi } from '../assets/icons/wifi.svg';
import { ReactComponent as Battery } from '../assets/icons/battery.svg';
import { ReactComponent as Cellular } from '../assets/icons/cellular.svg';
import { ReactComponent as Vector } from '../assets/icons/vector.svg';
import { ReactComponent as LogoPurple } from '../assets/icons/Logo-purple.svg';
import { ReactComponent as LogoGray } from '../assets/icons/Logo-gray.svg';
import { ReactComponent as Close } from '../assets/icons/close.svg';
import { ReactComponent as Coin } from '../assets/icons/coin.svg';
import { useState } from 'react';

export const Header = ({ menus, scrollToId }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <div id="home" name="header-wrap">
        <div
          name="phone-top-area"
          className="md:hidden bg-main-purple flex items-center justify-between w-full pt-[24px] pr-[30px] pb-[15px] pl-[50px] relative z-[1000]"
        >
          <span className="text-light-gray">9:41</span>
          <span name="phone-top-icons" className="flex gap-2">
            <Cellular />
            <Wifi />
            <Battery />
          </span>
        </div>
        <nav
          name="navigate-wrap"
          className="relative z-[999] shadow-[0_0_60px_0_rgba(0,0,0,0.25)]"
        >
          <div
            name="navigate-container"
            className="flex items-center justify-between p-[14px]"
          >
            <h1>
              <a href="#">
                <LogoPurple />
              </a>
            </h1>
            <Vector className="lg:hidden" onClick={handleMenuClick} />
            <ul name="menu-lg-wrap" className="hidden lg:flex">
              {menus.slice(1, 6).map((item, i) => {
                return item.style === 'text' ? (
                  <li
                    key={i}
                    onClick={() => scrollToId(item.id)}
                    className={`flex items-center hover:border-b-2 hover:border-main-purple ${
                      i !== 0 ? 'ml-8' : ''
                    }`}
                  >
                    <a href="#" className="text-xl font-bold">
                      {item.text}
                    </a>
                  </li>
                ) : (
                  <li key={i} onClick={() => scrollToId(item.id)}>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-1 w-[160px] bg-main-purple rounded-full ml-8"
                    >
                      <Coin className="fill-light-gray" />
                      <span className="inline-block text-xl font-bold leading-[52px] text-light-gray">
                        {item.text}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            name="menu-sm-wrap"
            className={
              menuIsOpen
                ? 'bg-main-purple absolute top-0 h-screen w-full'
                : 'hidden'
            }
          >
            <div className="flex justify-between p-[14px]">
              <a href="#">
                <LogoGray />
              </a>
              <Close onClick={handleMenuClick} />
            </div>
            <ul
              name="menu-items"
              className="flex flex-col items-end py-3 px-[14px]"
            >
              {menus.slice(1, 6).map((item, i) => {
                return item.style === 'text' ? (
                  <li
                    key={i}
                    className="mb-8"
                    onClick={() => scrollToId(item.id, setMenuIsOpen)}
                  >
                    <a href="#" className="text-xl font-bold text-light-gray">
                      {item.text}
                    </a>
                  </li>
                ) : (
                  <li
                    key={i}
                    onClick={() => scrollToId(item.id, setMenuIsOpen)}
                  >
                    <a
                      href="#"
                      className="flex items-center justify-center gap-1 w-[160px] bg-light-gray rounded-full"
                    >
                      <Coin className="fill-main-purple" />
                      <span className="inline-block text-xl font-bold text-main-purple leading-[52px]">
                        {item.text}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
