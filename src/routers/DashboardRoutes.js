import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DCScreen } from '../components/dc/DCScreen';
import { HeroScreen } from "../components/hero/HeroScreen";

export const DashboardRoutes = () => {
    
  return (
    <>
        <Navbar />

        <div className="container mt-5">

          <Routes>

              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DCScreen />} />
              <Route path="search" element={<SearchScreen />} />
              <Route path="hero/:heroId" element={<HeroScreen />} />
              <Route path="/" element={<MarvelScreen />} />
              
          </Routes>

        </div>
    </>
  );
};
