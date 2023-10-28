import { Routes, Route } from "react-router-dom";
import Navbar from "modules/Navbar/Navbar";
import { Suspense } from "react";

export const App = () => {
  return (
    <>
      <Suspense>
        <Navbar/
      </Suspense>
    </>
  );
};
