import { Home } from "@/components/Pages/Home.tsx";
import { Registration } from "@/components/Pages/Registration.tsx";
import {RegistrationM}from"@/components/Pages/RegistrationM"
import { Header } from "@/components/Static/Header.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Dashboard } from "./components/Pages/Dashboard";
import { Error } from "./components/Static/Error";
import { Footer } from "./components/Static/Footer";
import { Login } from "./components/Pages/Login";
import { FindDoctors } from "./components/Pages/FindDoctors";
import Doctor from "./components/Pages/Doctor";
// import Servicies from "./components/Pages/Servicies";

function App() {

  // Dom Rendering
  return (
    <div>
      <Router>
        <div className={"w-full h-full bg-healthHub-white"}>
          <Header />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/RegistrationMedecin" element={<RegistrationM />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/FindDoctors" element={<FindDoctors />} />
            <Route path="/Doctor/:id" element={<Doctor />} />
            {/* As Features */}
            {/* <Route path="/Services" element={<Servicies />} /> */}
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
          {/* START Add the Footer section here */}
          {/* Add the footer section into src/components/Static */}
          {/* END Add the Footer section here */}
        </div>
      </Router>
    </div>
  );
}

export default App;
