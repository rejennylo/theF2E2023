import { useState } from 'react';

const Text = () => {
  return (
    <div className="flex flex-col items-center lg:w-1/2 px-[10%] py-3">
      <h2 className="my-4">民眾服務信箱</h2>
      <h5 className="mb-3">您的聲音，我們的行動！</h5>
      <p>
        親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
      </p>
    </div>
  );
};

const Alert = ({ setAlertOn, hidden }) => {
  const handleClick = (event) => {
    event.preventDefault();
    setAlertOn(false);
  };

  return (
    <div
      name="isdonate-wrap"
      className={`donate-card-wrap ${hidden} absolute flex flex-col`}
    >
      <div className="w-full w-min-[150px] h-[114px] flex flex-col items-center justify-center m-auto">
        <h5 className="mb-3">感謝您抽出寶貴的時間給予我們寶貴的建議。</h5>
        <p>
          我們非常重視您的意見，它是我們不斷改進和提升服務的動力。您提出的建議已經轉交給相關部門進行評估，我們將努力在未來的服務中加以考慮和實施。
        </p>
      </div>
      <a
        href="#"
        name="toClose"
        className="flex-center-all rounded-full gap-1 w-[120px] h-[60px] lg:w-[176px] lg:h-[82px] bg-white border-2 border-main-purple"
        onClick={handleClick}
      >
        <span className="inline-block text-[20px] lg:text-[28px] font-bold text-main-purple">
          返回
        </span>
      </a>
    </div>
  );
};

const Form = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    mail: '',
    phoneNum: '',
    message: '',
  });
  const [submitError, setSubmitError] = useState('');

  const [alertOn, setAlertOn] = useState(false);

  const inputItems = [
    { name: 'name', text: '您的姓名' },
    { name: 'mail', text: '您的Email' },
    { name: 'phoneNum', text: '您的手機' },
    { name: 'message', text: '您的建言' },
  ];

  const validateEmail = (mail) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in inputValue) {
      if (!inputValue[key]) {
        setSubmitError('所有欄位都必須填寫。');
        return;
      }
    }
    if (!validateEmail(inputValue.mail)) {
      setSubmitError('請輸入有效的電子郵件地址。');
      return;
    }
    setSubmitError('');
    setAlertOn(true);
    console.log(
      `name: ${inputValue.name}, mail: ${inputValue.mail}, phone: ${inputValue.phoneNum}, message: ${inputValue.message}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center lg:w-1/2 lg:pt-8 relative"
    >
      {inputItems.map((item) => {
        return (
          <label
            key={item.name}
            className={`w-[360px] my-2 ${
              item.name === 'message' ? 'h-[100px]' : 'h-[50px]'
            }`}
          >
            <input
              type="text"
              placeholder={item.text}
              name={item.name}
              className="w-full h-full border rounded-md border-medium-gray p-3"
              value={inputValue[item.name]}
              onChange={handleChange}
            />
          </label>
        );
      })}
      {submitError && <p className='text-red-500'>{submitError}</p>}
      <button
        type="submit"
        name="submit"
        className="flex-center-all rounded-full gap-1 w-[160px] h-[60px] lg:w-[222px] lg:h-[82px] bg-main-purple mt-3 mb-16"
      >
        <span className="inline-block text-[20px] lg:text-[28px] font-bold text-white">
          送出意見
        </span>
      </button>
      <Alert setAlertOn={setAlertOn} hidden={alertOn ? '' : 'hidden'} />
    </form>
  );
};

export const Service = () => {
  return (
    <div id="service" name="service-wrap" className="w-full bg-medium-gray">
      <div
        name="service-container"
        className="flex flex-col lg:flex-row max-w-[1200px] m-auto px-[5%] pb-[100px] lg:pb-0 relative"
      >
        <Text />
        <Form />
        <span className="absolute max-w-[530px] max-h-[267px] bottom-[-85px]">
          <img src="./footer-image.png" />
        </span>
      </div>
    </div>
  );
};
