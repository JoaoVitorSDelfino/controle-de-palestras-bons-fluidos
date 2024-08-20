import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/login";
import MainMenu from "./routes/mainMenu";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MainMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
