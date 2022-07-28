import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/Component/adminlte.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sign_Up from "../src/Component/Sign_Up";
import Login from "../src/Component/Login";
import Data_Table from "./Component/Data_Table";
import Otp from "./Component/Otp";
import Product_page from "./Component/Product_page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sign_Up />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data-table" element={<Data_Table />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/product-page" element={<Product_page />} />
      </Routes>
    </>
  );
}

export default App;
