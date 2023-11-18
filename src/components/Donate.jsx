import { useState } from 'react';
import { ReactComponent as Coin } from '../assets/icons/coin.svg';
import { donateDatas } from '../datas';

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
        <span className="block text-[30px] lg:text-[60px] font-bold mb-3">
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

const IsDonate = ({ isDonateCloseClick, hidden, donateDatas }) => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

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
    const finalAmount= customAmount||amount
    console.log(finalAmount);
  };

  return (
    <div name="isdonate-wrap" className={`donate-card-wrap ${hidden}`}>
      <h5>選擇捐款方案</h5>
      <form action="" className="w-full" onSubmit={handleSubmit}>
        <div name="donate-amount" className="flex flex-wrap justify-between">
          {donateDatas.map((data, i) => {
            return (
              <label
                key={i}
                className="w-[48%] lg:w-[31%] max-w-[177px] mb-3 relative"
              >
                <input
                  type="radio"
                  id="donation"
                  name="donation"
                  value={data.number}
                  checked={amount === data.number}
                  onChange={handleAmountChange}
                  className="absolute top-0 left-0 opacity-0"
                />
                <div className="rounded-md border-2 border-medium-gray checked:border-main-purple w-full w-min-[150px] h-[114px] flex flex-col items-center justify-center">
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
            <div className="rounded-md border-2 border-medium-gray checked:border-main-purple w-full w-min-[150px] h-[114px] lg:h-[86px] flex flex-col lg:flex-row items-center justify-center px-3">
              <h6>自訂捐款金額</h6>
              <input
                type="text"
                name="customAmount"
                id="customAmount"
                placeholder="請輸入金額"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-[75%] p-3 m-3"
              />
            </div>
          </label>
        </div>
        <div name="icons" className="flex justify-center gap-3">
          <a
            href="#"
            className="flex-center-all rounded-full gap-1 w-[120px] h-[60px] lg:w-[176px] lg:h-[82px] bg-white border-2 border-main-purple"
            onClick={isDonateCloseClick}
          >
            <span className="inline-block text-[20px] lg:text-[28px] font-bold text-main-purple">
              返回
            </span>
          </a>
          <button
            type="submit"
            className="flex-center-all rounded-full gap-1 w-[160px] h-[60px] lg:w-[222px] lg:h-[82px] bg-main-purple"
          >
            <Coin className="fill-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]" />
            <span className="inline-block text-[20px] lg:text-[28px] font-bold text-white">
              我要捐款
            </span>
          </button>
        </div>
      </form>
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
        className="m-auto max-w-[1200px] h-[488px] lg:h-[527px] flex justify-center items-center lg:justify-start p-3"
      >
        <GoToDonate
          isDonateOpenClick={handleClick}
          hidden={isDonateOpen ? 'hidden' : 'flex'}
        />
        <IsDonate
          isDonateCloseClick={handleClick}
          hidden={isDonateOpen ? 'flex' : 'hidden'}
          donateDatas={donateDatas}
        />
      </div>
    </div>
  );
};
