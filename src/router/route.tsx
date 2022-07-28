import SelectDropDown from 'components/SelectDropDown/SelectDropDown';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from 'views/404';
import Home from 'components/Home/Home';

const AppRouter = (props: any) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
