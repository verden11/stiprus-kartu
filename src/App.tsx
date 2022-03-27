import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './common/header/Header';

const Home = lazy(() => import('./pages/home/Home'));

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 bg-neutral-200">
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
            path="/a"
            element={
              <Suspense fallback={null}>
                <h1>home A</h1>
              </Suspense>
            }
          />
          <Route
            path="/b"
            element={
              <Suspense fallback={null}>
                <h1>home B</h1>
              </Suspense>
            }
          />
          <Route
            path="/c"
            element={
              <Suspense fallback={null}>
                <h1>home C</h1>
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
