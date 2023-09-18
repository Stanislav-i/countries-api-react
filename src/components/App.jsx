import { Suspense, lazy } from "react";
import { Header } from "./Header"
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";


const HomePage = lazy(()=> import("Pages/Home/HomePage"));
const CountryInfoPage = lazy(()=> import("Pages/CountryInfoPage/CountryInfoPage"));

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/countryinfo/:name/*" element={<CountryInfoPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
