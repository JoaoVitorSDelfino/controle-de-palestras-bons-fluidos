import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./routes/login";
import MainMenu from "./routes/mainMenu";
import UserMenu from "./routes/userMenu";
import PalestrasMenu from "./routes/palestrasMenu";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MainMenu />} />
        <Route path="/users" element={<UserMenu />} />
        <Route path="/palestras" element={<PalestrasMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
