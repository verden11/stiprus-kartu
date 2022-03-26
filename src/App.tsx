import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './common/header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={null}>
              <h1>home</h1>
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
    </>
  );
};

export default App;
