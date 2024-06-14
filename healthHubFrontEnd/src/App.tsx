import "./App.css";
import { Header } from "@/components/Static/Header.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "@/components/Pages/Home.tsx";
import { Registration } from "@/components/Pages/Registration.tsx";

import { Footer } from "./components/Static/Footer";

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
