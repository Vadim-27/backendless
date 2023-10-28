import { Routes, Route } from "react-router-dom";
import Navbar from "modules/Navbar/Navbar";
import { Suspense } from "react";

import DummyListPage from "Pages/DummyListPage/DummyListPage";
import DummyChartPage from "Pages/DummyChartPage/DummyChartPage";
import D

export const App = () => {
  return (
    <>
      <Suspense>
        <Navbar />
        <Routes>
          <Route path="tabs/dummyTable" element={<DummyListPage />} />
          <Route path="tabs/dummyChart" element={<DummyChartPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
