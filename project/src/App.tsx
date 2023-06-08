import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NOTFOUND from "./pages/NotFoundPage";
import EditDetailsPage from "./pages/EditDetailsPage";

import "./App.css";
import AddEmployeePage from "./pages/CraeteEmployeePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="login" element={<LoginPage />} />

      <Route path="*" element={<NOTFOUND />} />

      <Route path="edit/:id" element={<EditDetailsPage />} />

      <Route path="add/" element={<AddEmployeePage />} />
    </Routes>
  );
}

export default App;
