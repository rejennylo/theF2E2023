import { ReactComponent as Wifi } from '../assets/icons/wifi.svg';
import { ReactComponent as Battery } from '../assets/icons/battery.svg';
import { ReactComponent as Cellular } from '../assets/icons/cellular.svg';
import { ReactComponent as Vector } from '../assets/icons/vector.svg';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';

export const Header = () => {
  return (
    <>
      <div name="header-wrap absolute top-0">
        <div
          name="phone-top-area"
          className="md:hidden bg-main-purple flex items-center justify-between h-[65px] w-full pt-[35px] pr-[30px] pb-[15px] pl-[50px]"
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
          className="shadow-[0_0_60px_0_rgba(0,0,0,0.25)]"
        >
          <div
            name="navigate-container"
            className="flex items-center justify-between p-3"
          >
            <h1>
              <Logo />
            </h1>
            <Vector />
          </div>
        </nav>
      </div>
    </>
  );
};
