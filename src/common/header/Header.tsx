import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { ProvidersContext } from '../../Providers';
import { Language } from '../constants';
import { LocalRoute } from '../constants/routes';

const Header = () => {
  const { language, setLanguage } = useContext(ProvidersContext);
  return (
    <div className="flex flex-row justify-between p-4">
      <Link to="/">
        #
        <FormattedMessage id="strongTogether" />
      </Link>
      <Link to={LocalRoute.Home} className="capitalize">
        <FormattedMessage id="home" />
      </Link>
      <Link to={LocalRoute.Donate} className="capitalize">
        <FormattedMessage id="donate" />
      </Link>
      <Link to={LocalRoute.News} className="capitalize">
        <FormattedMessage id="news" />
      </Link>
      <Link to={LocalRoute.Info} className="capitalize">
        <FormattedMessage id="info" />
      </Link>

      <label htmlFor="language">pasirinkite kalba:</label>
      <select
        name="language"
        id="language"
        defaultValue={language}
        onChange={(event) => {
          setLanguage(event.target.value as Language);
        }}
      >
        <option value="lt">🇱🇹 Lietuviu</option>
        <option value="en">🇬🇧 English</option>
        <option value="ua">🇺🇦 Yкраїнська</option>
      </select>
    </div>
  );
};

export default memo(Header);
