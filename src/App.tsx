import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import MainGallery from "./components/MainGallery"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<MainGallery />} />
        <Route path="testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
