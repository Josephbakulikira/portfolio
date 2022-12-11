import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/index'
import NotfoundPage from './pages/NotfoundPage'
import HomePage from './pages/home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // toast("welcome", {theme: "dark"})
  return (
    <BrowserRouter>
      <Navbar/>
      <ToastContainer />

      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
