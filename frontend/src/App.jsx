import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/authentication";
import { useState } from "react";
import Home from "./pages/Home/home";
import { Header } from './pages/Home/components/header/header'


const App = () => {
  const [userId, setUserId] = useState(null);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {<Route path="/" element={<login />} /> }
          <Route path="/auth" element={<Authentication setUserId = {setUserId} userId = {userId} />} />
          { <Route path="/Home" element={<Home />} />}         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
