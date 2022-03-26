import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { ProvidersContext } from '../../Providers';

const Header = () => {
  const { setLanguage } = useContext(ProvidersContext);
  return (
    <div className="flex flex-1 flex-row justify-evenly">
      <Link to="/">#stiprus kartu</Link>
      <Link to="/" className="capitalize">
        <FormattedMessage id="home" />
      </Link>
      <Link to="/a">Paremkite iniciatyvą</Link>
      <Link to="/b">Naujienos</Link>
      <Link to="/c">Informacija</Link>

      <label htmlFor="language">pasirinkite kalba:</label>
      <select name="language" id="language" onChange={(event) => setLanguage(event.target.value)}>
        <option value="lt">lietuviu</option>
        <option value="en">english</option>
        <option value="ua">yкраїнська</option>
      </select>
    </div>
  );
};

export default memo(Header);
