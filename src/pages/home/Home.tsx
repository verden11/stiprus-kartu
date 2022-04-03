import { memo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import car from '../../assets/car.svg';
import house from '../../assets/house.svg';
import logo from '../../assets/stipruskartu_logo.svg';
import union from '../../assets/ukraine-union.svg';
import flag from '../../assets/ua_flag.svg';
import arrowRight from '../../assets/arrowRight.svg';
import savanoriaiLogo from '../../assets/savanoriai-logo.png';
import { Card } from './Card';
import { Link } from 'react-router-dom';
import { LocalRoute } from '../../common/constants/routes';

const Home = () => {
  const { formatMessage } = useIntl();
  
  return (
    <div className="max-w-6xl mx-6 md:mx-14 pt-3">
      <section className="flex flex-1 flex-row-reverse md:flex-row justify-around items-center my-8">
        <img src={logo} width={64} height={64} alt="logo" />
        <p className="flex-1 md:text-3xl font-bold md:mx-8">
          <FormattedMessage id="home.title"/>
        </p>
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
          title={formatMessage({id:"home.card.refugee.title"})}
          description={formatMessage({id:"home.card.refugee.description"})}
          buttons={[{
            text: formatMessage({id:"home.card.refugee.button"}),
            color: 'bg-amber-700',
            link: LocalRoute.FormHelp
          }]}
        />

        <Card
          title={formatMessage({id:"home.card.volunteer.title"})}
          description={formatMessage({id:"home.card.volunteer.description"})}
          buttons={[
            { 
              text: formatMessage({id:"home.card.volunteer.button.accomodation"}),
              color: 'bg-teal-800',
              link: LocalRoute.FormAccommodation
            },
            { 
              text: formatMessage({id:"home.card.volunteer.button.ride"}),
              color: 'bg-teal-800',
              link: LocalRoute.FormRide
            },
          ]}
        />
      </section>

      <section className="my-14">
        <p className="text-2xl font-normal mb-10">
          <FormattedMessage id="home.statistics.title" />
        </p>
        <div className="flex flex-1 flex-row justify-around">
          <div className="flex flex-1 flex-wrap justify-center items-center">
            <img width={54} height={54} src={house} alt="hosue" />
            <div className="md:ml-8 flex flex-col items-center">
              <p className="text-4xl font-bold">10119</p>
              <p className="text-lg text-center">
                <FormattedMessage id="home.statistics.placesToStay" />
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-center items-center">
            <img width={54} height={54} src={car} alt="car" />
            <div className="md:ml-8 flex flex-col items-center">
              <p className="text-4xl font-bold">5009</p>
              <p className="text-lg text-center">
                <FormattedMessage id="home.statistics.ridesFromBorder" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-14">
        <iframe
          id="front-page-iframe"
          src="https://stiprus-kartu.maps.arcgis.com/apps/instant/basic/index.html?appid=1f7fa81be1184b36b77cf7249f4353f2"
          title="map"
          className="border-0 w-full h-96 rounded"
          loading="lazy"
        >
          iFrames are not supported on this page.
        </iframe>
      </section>

      <section className="bg-teal-900 -mx-6 md:-mx-14">
        <div
          className="flex flex-1 flex-col items-center text-white py-7 bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${union})` }}
        >
          <p className="text-3xl font-bold text-center">
            <FormattedMessage id="home.banner.ukraineNeedsYou" />
          </p>
          <p className="text-3xl font-bold text-center mb-7">
            <FormattedMessage id="home.banner.strongTogether"/>
          </p>
          <p className="text-2xl font-normal text-center">
            <FormattedMessage id="home.banner.coordinationCenter" />
          </p>
        </div>
      </section>
      <section>
        <p className="capitalize py-4 font-normal text-2xl">
          <FormattedMessage id="news" />
        </p>
        <div className="flex flex-1 flex-wrap justify-between">
          <div>
            <div className="flex flex-1 flex-row py-4">
              <Link to={LocalRoute.InfoForUkrainians} className="hover:underline max-w-xs pr-4 uppercase text-teal-800">
                <FormattedMessage id="informationForUkrainian" />
              </Link>
              <img className="rounded" src={flag} width={130} height={90} alt="logo" />
            </div>
          </div>

          <div>
            <div className="flex flex-1 flex-row py-4">
              <Link to={LocalRoute.ThankYou} className="hover:underline max-w-xs pr-4 text-teal-800">
                <FormattedMessage id="thankYou" />
                <FormattedMessage id="strongTogether" /> <FormattedMessage id="volunteer" />!
              </Link>
              <img className="rounded" src={savanoriaiLogo} width={130} height={90} alt="logo" />
            </div>
          </div>
        </div>
        <Link to={LocalRoute.News} className="hover:underline inline-flex text-teal-800 capitalize mr-2">
          <FormattedMessage id="more" />
          <img className="rounded" src={arrowRight} width={20} height={20} alt="logo" />
        </Link>
      </section>

      <section className="my-14">
        <div className="flex justify-center py-4">
          <p className="font-bold text-4xl max-w-sm text-center leading-10">
            <FormattedMessage id="home.hashtag.strongTogether" />
          </p>
        </div>
      </section>
    </div>
  );
};

export default memo(Home);
