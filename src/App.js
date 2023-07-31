import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import './App.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
