import { useState } from 'react';
import { ReactComponent as Coin } from '../assets/icons/coin.svg';

const GoToDonate = ({ isDonateOpenClick, hidden }) => {
  return (
    <div name="gotodonate-wrap" className={`donate-card-wrap ${hidden}`}>
      <h2 className="lg:text-[52px] font-bold">小額捐款</h2>
      <p className="text-[16px] lg:text-[24px]">
        您的小筆捐款， 是每隻毛孩未來的大大動力！
      </p>
      <p className="flex flex-col items-center text-main-purple">
        <span className="block text-[22px] lg:text-[35px] font-bold">
          累積總金額
        </span>
        <span className="block text-[30px] lg:text-[55px] font-bold mb-3">
          NT$987,655,873
        </span>
        <a
          href="#"
          name="toOpen"
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

const IsDonate = ({
  isDonateCloseClick,
  isDonateDoneClick,
  hidden,
  donateDatas,
}) => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donateFocus, setDonateFocus] = useState(null);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const finalAmount = customAmount || amount;
    console.log(finalAmount);
  };

  return (
    <div name="isdonate-wrap" className={`donate-card-wrap ${hidden}`}>
      <h5>選擇捐款方案</h5>
      <form action="" className="w-full" onSubmit={handleSubmit}>
        <div name="donate-amount" className="flex flex-wrap justify-between">
          {donateDatas?.map((data, i) => {
            const name = 'donation-' + i;
            const borderClass =
              donateFocus === name
                ? 'border-main-purple'
                : 'border-medium-gray';
            return (
              <label
                key={`donation-${i}`}
                className="w-[48%] lg:w-[31%] max-w-[177px] mb-3 relative"
              >
                <input
                  type="radio"
                  value={data.number}
                  checked={amount === data.number}
                  onChange={handleAmountChange}
                  className="absolute top-0 left-0 opacity-0"
                />
                <div
                  name={name}
                  className={`rounded-md border-2 w-full w-min-[150px] h-[114px] flex flex-col items-center justify-center ${borderClass}`}
                  onClick={() => setDonateFocus(name)}
                >
                  <h6>{data.title}</h6>
                  <span className="block text-[20px] font-bold">
                    NT. {data.number}
                  </span>
                  <span className="block text-[13px] text-gray-400">
                    已有 {data.peopleAmount} 人贊助
                  </span>
                </div>
              </label>
            );
          })}
          <label
            htmlFor="customAmount"
            className="w-[48%] max-w-[177px] lg:w-full lg:max-w-full mb-3"
          >
            <div
              name="customAmount"
              className={`rounded-md border-2 w-full w-min-[150px] h-[114px] lg:h-[86px] flex flex-col lg:flex-row items-center justify-center px-3 ${
                donateFocus === 'customAmount'
                  ? 'border-main-purple'
                  : 'border-medium-gray'
              }`}
              onClick={() => setDonateFocus('customAmount')}
            >
              <h6>自訂捐款金額</h6>
              <input
                type="text"
                name="customAmount"
                id="customAmount"
                placeholder="請輸入金額"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-[75%] p-3 m-3 focus:outline-none focus:ring-1 focus:ring-main-purple rounded-md"
              />
            </div>
          </label>
        </div>
        <div name="icons" className="flex justify-center gap-3">
          <a
            href="#"
            name="toClose"
            className="flex-center-all rounded-full gap-1 w-[120px] h-[60px] lg:w-[176px] lg:h-[82px] bg-white border-2 border-main-purple"
            onClick={isDonateCloseClick}
          >
            <span className="inline-block text-[20px] lg:text-[28px] font-bold text-main-purple">
              返回
            </span>
          </a>
          <button
            type="submit"
            name="isDone"
            onClick={isDonateDoneClick}
            className="flex-center-all rounded-full gap-1 w-[160px] h-[60px] lg:w-[222px] lg:h-[82px] bg-main-purple"
          >
            <Coin className="fill-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]" />
            <span className="inline-block text-[20px] lg:text-[28px] font-bold text-white ">
              我要捐款
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

const DonateDone = ({ isDonateCloseClick, hidden }) => {
  return (
    <div name="isdonate-wrap" className={`donate-card-wrap ${hidden}`}>
      <div className="w-full w-min-[150px] h-[114px] flex flex-col items-center justify-center">
        <h6 className="mb-2">感謝您成為喵星大使</h6>
        <span className="block text-[25px] font-bold text-main-purple">
          捐款金額
        </span>
        <span className="block text-[30px] font-bold text-main-purple">
          NT. 6000
        </span>
      </div>
      <a
        href="#"
        name="toClose"
        className="flex-center-all rounded-full gap-1 w-[120px] h-[60px] lg:w-[176px] lg:h-[82px] bg-white border-2 border-main-purple"
        onClick={isDonateCloseClick}
      >
        <span
          className="inline-block text-[20px] lg:text-[28px] font-bold text-main-purple"
        >
          返回
        </span>
      </a>
    </div>
  );
};

export const Donate = ({ donateDatas }) => {
  const [isDonateState, setIsDonateState] = useState('toClose');

  const handleClick = (e) => {
    e.preventDefault();
    setIsDonateState(e.target.name);
  };

  return (
    <div
      id="donate"
      name="donate-wrap"
      className="bg-[url(../src/assets/bg-donate.png)] bg-center bg-cover"
    >
      <div
        name="donacontainerte-"
        className="m-auto max-w-[1200px] h-[488px] lg:h-[527px] flex justify-center items-center lg:justify-start p-3"
      >
        <GoToDonate
          isDonateOpenClick={handleClick}
          hidden={isDonateState === 'toClose' ? 'flex' : 'hidden'}
        />
        <IsDonate
          isDonateCloseClick={handleClick}
          isDonateDoneClick={handleClick}
          hidden={isDonateState === 'toOpen' ? 'flex' : 'hidden'}
          donateDatas={donateDatas}
        />
        <DonateDone
          isDonateCloseClick={handleClick}
          hidden={isDonateState === 'isDone' ? 'flex' : 'hidden'}
        />
      </div>
    </div>
  );
};
