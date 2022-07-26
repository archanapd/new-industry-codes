import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";

const AppRouter = (props: any) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here yet!</p>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;