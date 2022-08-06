import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from 'views/404';
import Home from 'components/Home/Home';
import Search from 'views/SearchResults';
import About from 'views/About';
import CodeConversion from 'views/CodeConversion';
import CodeSystem from 'views/CodeSystem';
import Contact from 'views/Contact';
import WhySicCode from 'views/WhySicCode';
import StructureOfNaics from 'views/StructureOfNaics';
import NaiscCodes from 'views/NaiscCode';

const AppRouter = (props: any) => {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="" element={<NaiscCodes />} />
        <Route path="" element={<StructureOfNaics />} />
        <Route path="" element={<WhySicCode />} />
        <Route path="" element={<Contact />} />
        <Route path="" element={<CodeSystem />} />
        <Route path="" element={<CodeConversion />} />
        <Route path="" element={<About />} />
        <Route path="" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
