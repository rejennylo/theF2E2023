import { GoDotFill } from 'react-icons/go';

const monthEn = [
  'JAN.',
  'FEB.',
  'MAR.',
  'APR.',
  'MAY.',
  'JUN.',
  'JUL.',
  'AUG.',
  'SEP.',
  'OCT.',
  'NOV.',
  'DEC.',
];

const CardColumn = ({ card }) => {
  return (
    <div className="h-[370px] w-[300px] lg:h-[493px] lg:w-[483px] rounded-xl bg-white overflow-hidden relative flex-none">
      <span
        name="month-day"
        className="flex flex-col justify-center items-center absolute top-0 right-0 z-[1] text-white font-bold bg-secondary-green h-[65px] w-[65px]"
      >
        <span className="block text-[30px] leading-9">{card.day}</span>
        <span className="block text-[15px]">{monthEn[card.month - 1]}</span>
      </span>
      <span
        name="card-img-wrap"
        className="relative flex flex-col items-center h-[201px] w-[300px] lg:h-[325px] lg:w-[483px]"
      >
        <img
          src={card.image}
          alt="image"
          className="object-center object-cover h-[201px] lg:h-[325px] w-full"
        />
        <span name="triangle" className="block">
          <span className="absolute bottom-0 border-[15px] border-t-transparent  border-r-transparent border-b-white border-l-transparent -translate-x-1/2"></span>
        </span>
      </span>
      <div name="card-text-wrap" className="flex flex-col p-3">
        <h5 className="h-[60px] mb-2">{card.title}</h5>
        <p className="line-clamp-3">{card.text}</p>
      </div>
    </div>
  );
};

const CardRow = ({ card }) => {
  return (
    <div className="h-[232px] max-w-[686px] flex rounded-xl bg-white overflow-hidden relative flex-none">
      <span name="card-img-wrap" className="h-full w-[276px]">
        <img
          src={card.image}
          alt="image"
          className="object-center object-cover h-full w-full"
        />
      </span>
      <div name="card-text-wrap" className="h-full w-[410px] p-3">
        <span className="bg-secondary-green text-white rounded-tl-lg rounded-br-lg px-2">
          {card.year}.{card.month}.{card.day}
        </span>
        <h5 className="mb-2">{card.title}</h5>
        <p className="line-clamp-3">{card.text}</p>
      </div>
    </div>
  );
};

const Carousel = ({ cards, className }) => {
  return (
    <div name="carousel" className={className}>
      <div
        name="cards-wrap"
        className="flex flex-nowrap overflow-hidden overflow-x-scroll lg:justify-start w-full gap-5"
      >
        {cards.map((card, i) => {
          return <CardColumn key={i} card={card} />;
        })}
      </div>
      <div name="dots" className="flex justify-center p-[17px]">
        <GoDotFill className="h-6 w-6 text-main-purple" />
        <GoDotFill className="h-6 w-6 text-white" />
        <GoDotFill className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

const Board = ({ cards, className }) => {
  return (
    <div name="carousel" className={className}>
      <div
        name="cards-wrap"
        className="flex w-full m-auto justify-between mb-12 gap-5"
      >
        {cards.map((card, i) => {
          return i === 0 && <CardColumn key={i} card={card} />;
        })}
        <div className="flex flex-col justify-between">
          {cards.map((card, i) => {
            return i !== 0 && <CardRow key={i} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export const Activity = ({ cards }) => {
  return (
    <div name="activity-wrap" className="bg-medium-gray">
      <div
        name="activity-container"
        className="flex flex-col items-center max-w-[1200px] m-auto"
      >
        <h2 className="mb-5">最新活動</h2>
        <div className="w-full">
          <Carousel cards={cards} className="lg:hidden" />
          <Board cards={cards} className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
};
