import { memo } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex flex-1 flex-row justify-evenly">
      <Link to="/">#stiprus kartu</Link>
      <Link to="/">Pagrindinis</Link>
      <Link to="/a">Paremkite iniciatyvą</Link>
      <Link to="/b">Naujienos</Link>
      <Link to="/c">Informacija</Link>
      <div>pasirinkite kalba</div>
    </div>
  );
};

export default memo(Header);
