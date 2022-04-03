import cx from 'classnames';
import { memo, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import { ProvidersContext } from '../../Providers';
import { Language } from '../constants';
import { LocalRoute } from '../constants/routes';

const Header = () => {
  const { language, setLanguage } = useContext(ProvidersContext);
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between py-4 px-9 items-center text-base font-bold">
      <div className="flex flex-1">
        <Link to="/" className="text-teal-800 text-2xl md:text-3xl font-bold">
          <span className="text-red-500">#</span>
          <FormattedMessage id="strongTogether" />
        </Link>
      </div>
      <div className="flex flex-1 flex-wrap justify-between gap-2">
        <Link to={LocalRoute.Home} className={cx('capitalize', pathname === LocalRoute.Home && 'text-red-500')}>
          <FormattedMessage id="home" />
        </Link>
        <Link to={LocalRoute.Donate} className={cx('capitalize', pathname === LocalRoute.Donate && 'text-red-500')}>
          <FormattedMessage id="donate" />
        </Link>
        <Link to={LocalRoute.News} className={cx('capitalize', pathname === LocalRoute.News && 'text-red-500')}>
          <FormattedMessage id="news" />
        </Link>
        <Link to={LocalRoute.Info} className={cx('capitalize', pathname === LocalRoute.Info && 'text-red-500')}>
          <FormattedMessage id="info" />
        </Link>

        <select
          name="language"
          id="language"
          defaultValue={language}
          onChange={(event) => {
            setLanguage(event.target.value as Language);
          }}
        >
          <option value="lt">🇱🇹 Lietuvių</option>
          <option value="en">🇬🇧 English</option>
          <option value="ua">🇺🇦 Yкраїнська</option>
        </select>
      </div>
    </div>
  );
};

export default memo(Header);
