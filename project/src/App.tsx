import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NOTFOUND from "./pages/NotFoundPage";
import EditDetailsPage from "./pages/EditDetailsPage";

import "./App.css";
import DetailsPage from "./pages/DetailsPage";
import AddEmployeePage from "./pages/AddEmployeePage";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route path="*" element={<NOTFOUND />} />

      <Route path="edit/:id" element={<EditDetailsPage />} />

      <Route path="details/:id" element={<DetailsPage />} />

      <Route path="add/" element={<AddEmployeePage />} />
    </Routes>
  );
}

export default App;
