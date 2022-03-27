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
    <div className="flex flex-1 flex-col md:flex-row border border-black rounded-md p-7 my-3">
      <div className="flex flex-1 flex-col">
        <p className="md:text-2xl font-bold pb-4">{title}</p>
        <p className="md:text-lg font-normal">{description}</p>
      </div>
      <div className="flex flex-1 flex-col justify-around">
        {buttons.map((button) => (
          <div key={button.text} className="flex flex-col md:mx-12 my-2">
            <button className={cx('rounded-md py-4 text-lg font-bold', button.color)}>{button.text}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
