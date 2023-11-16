const Card = ({ card, cardClass }) => {
  return (
    <div
      name="card"
      className={`h-[320px] w-[330px] lg:h-[366px] lg:w-[379px] rounded-xl bg-white p-3 lg:mb-0 ${cardClass}`}
    >
      <span className="inline-block text-white bg-secondary-green text-sm px-2 py-1 mb-2 rounded-tl-lg rounded-br-lg">
        {card.number}
      </span>
      <h5>{card.title}</h5>
      <ul>
        <li>
          <p>{card.text1}</p>
        </li>
        <li>
          <p>{card.text2}</p>
        </li>
        <li>
          <p>{card.text3}</p>
        </li>
      </ul>
    </div>
  );
};

export const Issue = ({ cards }) => {
  return (
    <div name="issue-wrap" className="bg-main-purple">
      <div
        name="issue-container"
        className="m-auto max-w-[1200px] flex flex-col items-center"
      >
        <h2 className="text-white my-5">政策議題</h2>
        <div className="lg:h-[396px] flex flex-col lg:flex-row lg:justify-between lg:w-full gap-5 mb-12">
          {cards.map((card, i) => {
            const selfEnd = i === 1 && 'lg:self-end';
            return <Card key={i} card={card} cardClass={selfEnd} />;
          })}
        </div>
      </div>
    </div>
  );
};
