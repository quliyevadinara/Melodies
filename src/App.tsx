import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./app/pages/home/Index";

function App() {
  const routes = [
    {
      url: "/",
      component: <Index />,
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.url} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
