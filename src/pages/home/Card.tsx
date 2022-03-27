interface IButton {
  text: string;
  color: string;
  link: string;
}
interface ICard {
  title: string;
  description: string;
  buttons: Array<IButton>;
}

export const Card: React.FC<ICard> = ({ title, description, buttons }) => {
  return (
    <div className="flex flex-1 flex-row border border-black rounded p-7 my-3">
      <div className="flex flex-1 flex-col">
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        {buttons.map((button) => (
          <div key={button.text} className="flex flex-col mx-12">
            <button className="border border-black rounded py-4">{button.text}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
