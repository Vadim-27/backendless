import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import { Suspense } from "react";

const Navbar = lazy(() => import('modules/Navbar/Navbar'));
const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const DummyListPage = lazy(() => import('Pages/DummyListPage/DummyListPage'));
const DummyChartPage = lazy(() => import('Pages/DummyChartPage/DummyChartPage'));
const DummyTablePage = lazy(() => import('Pages/DummyTablePage/DummyTablePage'));
const NotFoundPage = lazy(() => import('Pages/NotFoundPage/NotFoundPage'));


export const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<p>...Loading</p>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/tabs/dummyList" element={<DummyListPage />} />
          <Route path="/tabs/dummyChart" element={<DummyChartPage />} />
          <Route path="/tabs/dummyTable" element={<DummyTablePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
