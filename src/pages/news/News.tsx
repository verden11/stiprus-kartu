import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { LocalRoute } from '../../common/constants/routes';
import flag from '../../assets/ua_flag.svg';
import savanoriaiLogo from '../../assets/savanoriai-logo.png';
import arrowright from '../../assets/arrowright.svg';

const News = () => {
  return (
    <div className="max-w-6xl mx-6 md:mx-14 pt-3">
      <section>
        <h1 className="capitalize py-4 font-bold text-5xl text-center text-teal-800">
          <FormattedMessage id="news" />
        </h1>
        <div className="flex flex-1 flex-wrap">
          <div>
            <img className="rounded" src={flag} width={130} height={90} alt="logo" />
            <p className="max-w-xs pr-4">INFORMATION FOR UKRAINIAN NATIONALS AND THEIR FAMILY MEMBERS</p>
          </div>

          <div>
            <img className="rounded" src={savanoriaiLogo} width={130} height={90} alt="logo" />
            <p className="max-w-xs pr-4">Ačiū, #StiprūsKartu savanoriai!</p>
          </div>
        </div>
        <Link to={LocalRoute.News} className="inline-flex text-teal-800">
          <p className="capitalize mr-2">more</p>
          <img className="rounded" src={arrowright} width={20} height={20} alt="logo" />
        </Link>
      </section>
    </div>
  );
};

export default memo(News);
