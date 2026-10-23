import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Employees from "./pages/Employees";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cita" element={<Appointment/>}/>
        <Route path="/empleado" element={<Employees/>}/>
      </Routes>
    </>
  );
}

export default App;
