import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login_page from './AUTHPAGE/Login';
import Welcome_page from './WELCOMEPAGE/Welcome_page';
function App() {
  return (
    <div className="App">  
      <Router>
        <Routes>
          <Route path="/" element={<Welcome_page />} />
          <Route path="/login" element={<Login_page />} />
        </Routes>
      </Router>
    </div>
  );
}                 
export default App
