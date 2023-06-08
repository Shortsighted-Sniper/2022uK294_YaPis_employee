import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AddEmployeePage from "./pages/CraeteEmployeePage";
import EditDetailsPage from "./pages/EditDetailsPage";
import NOTFOUND from "./pages/NotFoundPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route path="*" element={<NOTFOUND />} />

      <Route path="edit/:id" element={<EditDetailsPage />} />

      <Route path="add/" element={<AddEmployeePage />} />
    </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
