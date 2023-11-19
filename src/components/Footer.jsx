import { ReactComponent as LogoGray } from '../assets/icons/Logo-gray.svg';

export const Footer = ({ menus, infos, scrollToId }) => {
  return (
    <div name="footer-wrap" className="bg-main-purple">
      <div name="footer-container" className="m-auto max-w-[1200px]">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <span className="hidden lg:block pt-5 w-1/3">
            <LogoGray />
          </span>
          <div name="menu" className="flex flex-col items-center my-5">
            <span className="text-secondary-yellow pb-2">Menu</span>
            <div className="flex justify-between w-[200px]">
              <ul className="flex flex-col items-center">
                {menus.slice(0, 3).map((item, i) => {
                  return (
                    <li key={i} onClick={() => scrollToId(item.id)}>
                      <p className="text-white leading-6">{item.text}</p>
                    </li>
                  );
                })}
              </ul>
              <ul className="flex flex-col items-center">
                {menus.slice(3, 6).map((item, i) => {
                  return (
                    <li key={i} onClick={() => scrollToId(item.id)}>
                      <p className="text-white leading-6">{item.text}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div name="info" className="my-5 mx-5">
            <span className="text-secondary-yellow block text-center pb-2">
              Office information
            </span>
            <ul>
              {infos.map((item, i) => {
                return (
                  <li key={i}>
                    <p className="text-white leading-6">{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <span className="text-xs text-gray-500 block text-center pb-3">
          {`版權聲明：© 2023 喵立翰 ( Miao Li-Han ) 版權所有。`}
        </span>
      </div>
    </div>
  );
};
