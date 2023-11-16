import { useState } from 'react';
import { ReactComponent as Coin } from '../assets/icons/coin.svg';

const GoToDonate = ({ isDonateOpenClick, hidden }) => {
  return (
    <div name="gotodonate-wrap" className={`donate-card-wrap ${hidden}`}>
      <h2 className="lg:text-[60px] font-bold">小額捐款</h2>
      <p className="text-[16px] lg:text-[24px] font-semibold">
        您的小筆捐款， 是每隻毛孩未來的大大動力！
      </p>
      <p className="flex flex-col items-center text-main-purple">
        <span className="block text-[25px] lg:text-[35px] font-bold">
          累積總金額
        </span>
        <span className="block text-[30px] lg:text-[60px] font-bold">
          NT$987,655,873
        </span>
        <a
          href="#"
          className="flex-center-all rounded-full  gap-1 w-[160px] h-[60px] lg:w-[222px] lg:h-[82px] bg-main-purple"
          onClick={isDonateOpenClick}
        >
          <Coin className="fill-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]" />
          <span className="inline-block text-[20px] lg:text-[28px] font-bold text-white">
            前往捐款
          </span>
        </a>
      </p>
    </div>
  );
};

const IsDonate = ({ isDonateCloseClick, hidden }) => {
  return (
    <div name="isdonate-wrap" className={`donate-card-wrap ${hidden}`}>
      <h5>選擇捐款方案</h5>
      {/* TODO */}
      <div name="icons" className="flex gap-3">
        <a
          href="#"
          className="flex-center-all rounded-full gap-1 w-[120px] h-[60px] lg:w-[176px] lg:h-[82px] bg-white border-2 border-main-purple"
          onClick={isDonateCloseClick}
        >
          <span className="inline-block text-[20px] lg:text-[28px] font-bold text-main-purple">
            返回
          </span>
        </a>
        <button className="flex-center-all rounded-full gap-1 w-[160px] h-[60px] lg:w-[222px] lg:h-[82px] bg-main-purple">
          <Coin className="fill-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]" />
          <span className="inline-block text-[20px] lg:text-[28px] font-bold text-white">
            我要捐款
          </span>
        </button>
      </div>
    </div>
  );
};

export const Donate = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsDonateOpen(!isDonateOpen);
  };

  return (
    <div
      name="donate-wrap"
      className="bg-[url(../src/assets/bg-donate.png)] bg-center bg-cover"
    >
      <div
        name="donate-container"
        className="m-auto max-w-[1200px] h-[488px] lg:h-[527px] flex justify-center items-center lg:justify-start"
      >
        <GoToDonate
          isDonateOpenClick={handleClick}
          hidden={isDonateOpen ? 'hidden' : 'flex'}
        />
        <IsDonate
          isDonateCloseClick={handleClick}
          hidden={isDonateOpen ? 'flex' : 'hidden'}
        />
      </div>
    </div>
  );
};
