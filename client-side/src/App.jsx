import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { Routes, Route ,useNavigate} from "react-router-dom";
import Login_page from "./AUTHPAGE/Login";
import Welcome_page from "./WELCOMEPAGE/Welcome_page";
import {AdminSidebar} from "./AdminPanel/AdminSidebar";
import { AdminDesboard } from "./AdminPanel/AdminDesboard";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const check = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/Auth/auto",
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        if (response.status === 200) {
          navigate("/admin");
        } else {
          console.log("Auto login failed");
        }
      } catch (error) {
        console.error("Error during auto login:", error);
      }
    };
    check();
  }, [navigate]);
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Welcome_page />} />
          <Route path="/login" element={<Login_page />} />
          <Route path="/admin" element={<><AdminSidebar /> <AdminDesboard/></>} />
        </Routes>
    </div>
  );
}
export default App;
