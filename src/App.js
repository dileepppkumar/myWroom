import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Portfolio } from "./screens/portfolio/Portfolio";
import { ResetPassword } from "./screens/ResetPassword/ResetPassword";
import { Home } from "./screens/Home/Home";
import { Login } from "./screens/Login/Login";
import { SignUp } from "./screens/SignUp/SignUp";
import { Footer } from "./components/Footer/Footer.jsx/Footer";
import { ReferModal } from "./screens/Modal/ReferModal";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/modal" element={<ReferModal />} />
      </Routes>
    </div>
  );
}

export default App;
