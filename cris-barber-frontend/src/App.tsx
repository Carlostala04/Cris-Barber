import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cita" element={<Appointment/>}/>
      </Routes>
    </>
  );
}

export default App;
