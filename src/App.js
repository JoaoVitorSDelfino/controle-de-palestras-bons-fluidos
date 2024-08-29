import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RoleProvider } from "./RoleContext"; // Importa o provider

import Header from "./utils/components/header";
import Login from "./routes/login";
import MainMenu from "./routes/mainMenu";
import UserMenu from "./routes/userMenu";
import AddUser from "./routes/Operations/Users/addUser";
import EditUser from "./routes/Operations/Users/editUser";
import DeleteUser from "./routes/Operations/Users/deleteUser";
import ShowUsers from "./routes/Operations/Users/showUsers";
import PalestrasMenu from "./routes/palestrasMenu";
import AddPalestra from "./routes/Operations/Palestras/addPalestra";
import EditPalestra from "./routes/Operations/Palestras/editPalestra";
import DeletePalestra from "./routes/Operations/Palestras/deletePalestra";
import ShowPalestras from "./routes/Operations/Palestras/showPalestras";

function App() {
  return (
    <RoleProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<MainMenu />} />
          <Route path="/users" element={<UserMenu />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit" element={<EditUser />} />
          <Route path="/users/delete" element={<DeleteUser />} />
          <Route path="/users/show" element={<ShowUsers />} />
          <Route path="/palestras" element={<PalestrasMenu />} />
          <Route path="/palestras/add" element={<AddPalestra />} />
          <Route path="/palestras/edit" element={<EditPalestra />} />
          <Route path="/palestras/delete" element={<DeletePalestra />} />
          <Route path="/palestras/show" element={<ShowPalestras />} />
        </Routes>
      </Router>
    </RoleProvider>
  );
}

export default App;