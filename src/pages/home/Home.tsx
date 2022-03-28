import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import car from '../../assets/car.svg';
import house from '../../assets/house.svg';
import logo from '../../assets/stipruskartu_logo.svg';
import union from '../../assets/ukraine-union.svg';
import flag from '../../assets/ua_flag.svg';
import arrowright from '../../assets/arrowright.svg';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import { LocalRoute } from '../../common/constants/routes';

const Home = () => {
  return (
    <div className="max-w-6xl mx-6 md:mx-14 pt-3">
      <section className="flex flex-1 flex-row-reverse md:flex-row justify-around items-center my-8">
        <img src={logo} width={64} height={64} alt="logo" />
        <p className="flex-1 md:text-3xl font-bold md:mx-8">Assistance for war refugees from Ukraine</p>
        <div className="flex-col hidden md:flex">
          <div className="flex flex-col text-sm">
            <a href="tel:1827" className="font-bold text-base">
              1827
            </a>
            <FormattedMessage id="fromLithuania" />
          </div>
          <div className="flex flex-col text-sm">
            <a href="tel:+37067722222" className="font-bold text-base">
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
          buttons={[{ text: 'Get help', color: 'bg-amber-700', link: LocalRoute.FormHelp }]}
        />

        <Card
          title="Do you have a vacant flat, house, or room? Can you offer a ride?"
          description="Sign up to help people fleeing war in Ukraine."
          buttons={[
            { text: 'Offer accommodation', color: 'bg-teal-800', link: '/' },
            { text: 'Offer a ride from the border', color: 'bg-teal-800', link: '/' },
          ]}
        />
      </section>

      <section className="my-14">
        <p className="text-2xl font-normal mb-10">People in Lithuania have already offered:</p>
        <div className="flex flex-1 flex-row justify-around">
          <div className="flex flex-1 flex-wrap justify-center items-center">
            <img width={54} height={54} src={house} alt="hosue" />
            <div className="md:ml-8 flex flex-col items-center">
              <p className="text-4xl font-bold">10119</p>
              <p className="text-lg text-center">places to stay</p>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-center items-center">
            <img width={54} height={54} src={car} alt="car" />
            <div className="md:ml-8 flex flex-col items-center">
              <p className="text-4xl font-bold">5009</p>
              <p className="text-lg text-center">rides from the border</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-900 -mx-6 md:-mx-14">
        <div
          className="flex flex-1 flex-col items-center text-white py-7 bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${union})` }}
        >
          <p className="text-3xl font-bold text-center">Ukraine needs you.</p>
          <p className="text-3xl font-bold text-center mb-7">We're strong together!</p>
          <p className="text-2xl font-normal text-center">National volunteer support coordination center</p>
        </div>
      </section>
      <section>
        <p className="capitalize py-4 font-normal text-2xl">
          <FormattedMessage id="news" />
        </p>
        <div className="flex flex-1 flex-row py-4">
          <p className="max-w-xs pr-4">INFORMATION FOR UKRAINIAN NATIONALS AND THEIR FAMILY MEMBERS</p>
          <img className="rounded" src={flag} width={130} height={90} alt="logo" />
        </div>
        <Link to={LocalRoute.News} className="inline-flex text-teal-800">
          <p className="capitalize mr-2">more</p>
          <img className="rounded" src={arrowright} width={20} height={20} alt="logo" />
        </Link>
      </section>

      <section className="my-14">
        <div className="flex justify-center py-4">
          <p className="font-bold text-4xl max-w-sm text-center leading-10">
            #StrongTogether is the initiative of the Pelėdos squad in the Lithuanian Riflemen's Union
          </p>
        </div>
      </section>
    </div>
  );
};

export default memo(Home);
