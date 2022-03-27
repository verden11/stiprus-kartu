import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import logo from '../../assets/stipruskartu_logo.svg';
import { Card } from './Card';

const Home = () => {
  return (
    <div className="mx-14">
      <section className="flex flex-1 flex-row justify-around">
        <img src={logo} alt="logo" />
        <p className="text-3xl font-bold ml-8">Assistance for war refugees from Ukraine</p>
        <div className="flex-col">
          <div className="flex flex-col">
            <a href="tel:1827" className="font-bold">
              1827
            </a>
            <FormattedMessage id="fromLithuania" />
          </div>
          <div className="flex flex-col">
            <a href="tel:+37067722222" className="font-bold">
              +370 677 22222
            </a>
            <FormattedMessage id="fromAbroad" />
          </div>
        </div>
      </section>
      <section>
        <Card
          title="Fleeing war in Ukraine?"
          description="We'll find you a temporary home in Lithuania. Sign up, and our volunteers will take care of you."
          buttons={[{ text: 'Get help', color: 'foo', link: '/' }]}
        />

        <Card
          title="Do you have a vacant flat, house, or room? Can you offer a ride?"
          description="Sign up to help people fleeing war in Ukraine."
          buttons={[
            { text: 'Offer accommodation', color: 'foo', link: '/' },
            { text: 'Offer a ride from the border', color: 'foo', link: '/' },
          ]}
        />
      </section>

      <section>
        <p>People in Lithuania have already offered:</p>
        <div className="flex flex-1 flex-row justify-around">
          <p>homes</p>
          <p>cars</p>
        </div>
      </section>
    </div>
  );
};

export default memo(Home);
