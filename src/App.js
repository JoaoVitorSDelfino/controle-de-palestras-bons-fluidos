import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Routes/login";
import MainMenu from "./Routes/mainMenu";

import UserMenu from "./Routes/userMenu";
import AddUser from "./Routes/Operations/Users/addUser";
import EditUser from "./Routes/Operations/Users/editUser";
import DeleteUser from "./Routes/Operations/Users/deleteUser";

import PalestrasMenu from "./Routes/palestrasMenu";
import AddPalestra from "./Routes/Operations/Palestras/addPalestra";
import EditPalestra from "./Routes/Operations/Palestras/editPalestra";
import DeletePalestra from "./Routes/Operations/Palestras/deletePalestra";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MainMenu />} />

        <Route path="/users" element={<UserMenu />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit" element={<EditUser />} />
        <Route path="/users/remove" element={<DeleteUser />} />

        <Route path="/palestras" element={<PalestrasMenu />} />
        <Route path="/palestras/add" element={<AddPalestra />} />
        <Route path="/palestras/edit" element={<EditPalestra />} />
        <Route path="/palestras/remove" element={<DeletePalestra />} />
      </Routes>
    </Router>
  );
}

export default App;
