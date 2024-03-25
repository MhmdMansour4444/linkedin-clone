import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/authentication";
import { useEffect } from "react";
import Home from "./pages/Home/home";
import { Header } from './pages/Home/components/header/header'

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {<Route path="/" element={<login />} /> }
          <Route path="/auth" element={<Authentication />} />
          { <Route path="/Home" element={<Home />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
