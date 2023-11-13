import { GoDotFill } from 'react-icons/go';

const CarouselCard = ({ card }) => {
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

  return (
    <>
        <span name="month-day" className="flex flex-col justify-center items-center absolute top-0 right-0 z-[1] text-white font-bold bg-secondary-green h-[65px] w-[65px] ">
          <span className="block text-[30px] leading-9">{card.day}</span>
          <span className="block text-[15px]">{monthEn[card.month-1]}</span>
        </span>
      <span
        name="card-img-wrap"
        className="relative flex flex-col items-center h-[201px] w-[300px]"
      >
        <img
          src={card.image}
          alt="image"
          className="object-center object-cover h-[201px] w-full"
        />
        <span name="triangle" className="block">
          <span className="absolute bottom-0 border-[15px] border-t-transparent  border-r-transparent border-b-white border-l-transparent -translate-x-1/2"></span>
        </span>
      </span>
      <div name="card-text-wrap" className="flex flex-col  p-3">
        <h5 className="h-[60px] mb-2">{card.title}</h5>
        <p className="line-clamp-3">{card.text}</p>
      </div>
    </>
  );
};

const Carousel = ({ cards }) => {
  return (
    <div name="carousel" className="w-full">
      <ul name="cards-wrap" className="flex overflow-x-scroll overflow-hidden">
        {cards.map((card, i) => {
          return (
            <li
              key={i}
              className="rounded-xl h-[370px] min-w-[300px] bg-white overflow-hidden mx-3 relative"
            >
              <CarouselCard card={card} />
            </li>
          );
        })}
      </ul>
      <div name="dots" className="flex justify-center p-[17px]">
        <GoDotFill className="h-6 w-6 text-main-purple" />
        <GoDotFill className="h-6 w-6 text-white" />
        <GoDotFill className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export const Activity = ({ cards }) => {
  return (
    <div name="activity-wrap">
      <div
        name="activity-container"
        className="flex flex-col items-center h-[502px] w-[screen] bg-medium-gray"
      >
        <h2 className="mb-5">最新活動</h2>
        <Carousel cards={cards} />
      </div>
    </div>
  );
};
