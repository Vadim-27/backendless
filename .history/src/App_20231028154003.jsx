import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import Navbar from "modules/Navbar/Navbar";
import { Suspense } from "react";

const Navbar = lazy(() => import('modules/Navbar/Navbar'));
const DummyListPage = lazy(() => import('Pages/DummyListPage/DummyListPage'));
const DummyChartPage = lazy(() => import('Pages/DummyChartPage/DummyChartPage'));
const DummyTablePage = lazy(() => import('Pages/DummyTablePage/DummyTablePage'));
import DummyListPage from "Pages/DummyListPage/DummyListPage";
import DummyChartPage from "Pages/DummyChartPage/DummyChartPage";
import DummyTablePage from "Pages/DummyTablePage/DummyTablePage";

export const App = () => {
  return (
    <>
      <Suspense>
        <Navbar />
        <Routes>
          <Route path="tabs/dummyList" element={<DummyListPage />} />
          <Route path="tabs/dummyChart" element={<DummyChartPage />} />
          <Route path="tabs/dummyTable" element={<DummyTablePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
