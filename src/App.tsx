import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LocalRoute } from './common/constants/routes';

import Header from './common/header/Header';

const Home = lazy(() => import('./pages/home/Home'));
const Donate = lazy(() => import('./pages/donate/Donate'));
const Info = lazy(() => import('./pages/info/Info'));
const News = lazy(() => import('./pages/news/News'));

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 bg-gray-200">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={null}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path={LocalRoute.Info}
            element={
              <Suspense fallback={null}>
                <Info />
              </Suspense>
            }
          />
          <Route
            path={LocalRoute.News}
            element={
              <Suspense fallback={null}>
                <News />
              </Suspense>
            }
          />
          <Route
            path={LocalRoute.Donate}
            element={
              <Suspense fallback={null}>
                <Donate />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to={LocalRoute.Home} replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
