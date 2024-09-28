import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
