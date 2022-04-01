import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LocalRoute } from './common/constants/routes';

const Header = lazy(() => import('./common/header/Header'));
const Footer = lazy(() => import('./common/footer/Footer'));

const Home = lazy(() => import('./pages/home/Home'));
const Donate = lazy(() => import('./pages/donate/Donate'));
const Info = lazy(() => import('./pages/info/Info'));
const News = lazy(() => import('./pages/news/News'));
const InfoForUkrainians = lazy(() => import('./pages/info-for-ukrainians/InfoForUkrainians'));
const ThankYou = lazy(() => import('./pages/thank-you/ThankYou'));

const FormHelp = lazy(() => import('./pages/form-help/FormHelp'));
const FormRide = lazy(() => import('./pages/form-ride/FormRide'));
const FormAccommodation = lazy(() => import('./pages/form-accommodation/FormAccommodation'));

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 justify-center bg-stone-200">
        <Routes>
          <Route
            path={LocalRoute.Home}
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
            path={LocalRoute.InfoForUkrainians}
            element={
              <Suspense fallback={null}>
                <InfoForUkrainians />
              </Suspense>
            }
          />
          <Route
            path={LocalRoute.ThankYou}
            element={
              <Suspense fallback={null}>
                <ThankYou />
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
          <Route
            path={LocalRoute.FormHelp}
            element={
              <Suspense fallback={null}>
                <FormHelp />
              </Suspense>
            }
          />
          <Route
            path={LocalRoute.FormRide}
            element={
              <Suspense fallback={null}>
                <FormRide />
              </Suspense>
            }
          />
          <Route
            path={LocalRoute.FormAccommodation}
            element={
              <Suspense fallback={null}>
                <FormAccommodation />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to={LocalRoute.Home} replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
