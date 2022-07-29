import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from 'views/404';
import Home from 'components/Home/Home';

const AppRouter = (props: any) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
