import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { ProvidersContext } from '../../Providers';
import { Language } from '../constants';

const Header = () => {
  const { language, setLanguage } = useContext(ProvidersContext);
  return (
    <div className="flex flex-row justify-between p-4">
      <Link to="/">
        #
        <FormattedMessage id="strongTogether" />
      </Link>
      <Link to="/" className="capitalize">
        <FormattedMessage id="home" />
      </Link>
      <Link to="/a">Paremkite iniciatyvą</Link>
      <Link to="/b">Naujienos</Link>
      <Link to="/c">Informacija</Link>

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
