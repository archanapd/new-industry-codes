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
        <Route path="naiscCodes" element={<NaiscCodes />} />
        <Route path="structure" element={<StructureOfNaics />} />
        <Route path="whySicCode" element={<WhySicCode />} />
        <Route path="contact" element={<Contact />} />
        <Route path="codeSystem" element={<CodeSystem />} />
        <Route path="codeConversion" element={<CodeConversion />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
