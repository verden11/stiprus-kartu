import cx from 'classnames';

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
    <div className="flex flex-1 flex-row border border-black rounded-md p-7 my-3">
      <div className="flex flex-1 flex-col">
        <p className="text-2xl font-bold pb-4">{title}</p>
        <p className="text-lg font-normal">{description}</p>
      </div>
      <div className="flex flex-1 flex-col justify-around">
        {buttons.map((button) => (
          <div key={button.text} className="flex flex-col mx-12">
            <button className={cx('rounded-md py-4 text-lg font-bold', button.color)}>{button.text}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
