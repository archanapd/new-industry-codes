import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from 'views/404';
import Home from 'components/Home/Home';
import Search from 'views/SearchResults';
import About from 'views/About';
import CodeConversion from 'views/CodeConversion';
import CodeSystem from 'views/CodeSystem';
import Contact from 'views/Contact';

const AppRouter = (props: any) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="contact" element={<Contact />} />
        <Route path="codesystem" element={<CodeSystem />} />
        <Route path="codeconversion" element={<CodeConversion />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
