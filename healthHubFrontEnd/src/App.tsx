import { Home } from "@/components/Pages/Home.tsx";
import { Registration } from "@/components/Pages/Registration.tsx";
import { RegistrationM } from "@/components/Pages/RegistrationM";
import { Header } from "@/components/Static/Header.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Dashboard } from "./components/Pages/Dashboard";
import { Error } from "./components/Static/Error";
import { Footer } from "./components/Static/Footer";
import { Login } from "./components/Pages/Login";
import { FindDoctors } from "./components/Pages/FindDoctors";
import Doctor from "./components/Pages/Doctor";
import { DossierMedicale } from "./components/Pages/Dossier-medicale";
import { createContext, useEffect, useState } from "react";
import { AuthContextType } from "./type";

// create context to check the local storage
const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  setIsLogged: () => {},
  user: null,
  setUser: () => {},
  typeUser: "Patient",
  setTypeUser: () => {},
});

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<string | null>(null);
  const [typeUser, setTypeUser] = useState<"Doctor" | "Patient">("Patient");

  useEffect(() => {
    // check if the user is logged in
    // if the user is logged in, redirect to the dashboard
    if (localStorage.getItem("doctor") || localStorage.getItem("patient")) {
      setIsLogged(true);
      setUser(
        localStorage.getItem("doctor") || localStorage.getItem("patient")
      );
      setTypeUser(localStorage.key(1) ? "Doctor" : "Patient");
    }
  }, [isLogged, user, typeUser]);
  // Dom Rendering
  return (
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, user, setUser, typeUser, setTypeUser }}
    >
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
              <Route path="/DossierMedicale" element={<DossierMedicale />} />
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
    </AuthContext.Provider>
  );
}

export { App, AuthContext };
