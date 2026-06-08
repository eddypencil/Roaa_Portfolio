import "./index.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import PortfolioPage from "./pages/Portfolio/PortfolioPage"
import AboutPage from "./pages/About/AboutPage"
import HirePage from "./pages/Hire/HirePage"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/hire" element={<HirePage />} />
      </Routes>
    </>
  )
}

export default App
