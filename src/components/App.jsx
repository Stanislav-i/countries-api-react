import { Suspense, lazy } from "react";
import { Header } from "./Header"
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";


const HomePage = lazy(()=> import("Pages/Home/HomePage"));

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
