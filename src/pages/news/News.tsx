import { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { LocalRoute } from '../../common/constants/routes';
import flag from '../../assets/ua_flag.svg';
import savanoriaiLogo from '../../assets/savanoriai-logo.png';

const News = () => (
  <div className="max-w-6xl mx-6 md:mx-14 pt-3">
    <h1 className="capitalize py-4 font-bold text-5xl text-center text-teal-800 mb-16">
      <FormattedMessage id="news" />
    </h1>
    <div className="flex flex-1 flex-wrap">
      <div className="flex flex-1 flex-col">
        <img className="rounded" src={flag} width="50%" height={90} alt="logo" />
        <Link to={LocalRoute.InfoForUkrainians} className="hover:underline">
          <p className="max-w-xs pr-4 uppercase text-teal-800">
            <FormattedMessage id="informationForUkrainian" />
          </p>
        </Link>
      </div>

      <div className="flex flex-1 flex-col">
        <img className="rounded" src={savanoriaiLogo} width="50%" height={90} alt="logo" />
        <Link to={LocalRoute.ThankYou} className="hover:underline">
          <p className="max-w-xs pr-4 text-teal-800">
            <FormattedMessage id="thankYou" />, #
            <FormattedMessage id="strongTogether" /> <FormattedMessage id="volunteer" />!
          </p>
        </Link>
      </div>
    </div>
  </div>
);

export default memo(News);
