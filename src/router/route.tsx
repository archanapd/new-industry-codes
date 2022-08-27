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
import Terms from 'views/Terms'
import TermsAndPrivacy from 'views/TermsAndPrivacy';
import Menu from 'views/Menu';
import HomeSearch from 'views/HomeSearch';


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
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="search" element={<Search />} />
        <Route path="terms" element={<Terms />} />
        <Route path="termsAndPrivacy" element={<TermsAndPrivacy />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="homesearch" element={<HomeSearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
