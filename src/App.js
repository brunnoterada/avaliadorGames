import Home from "./Pages/Home"
import Lista from "./Pages/Lista"
import Sobre from "./Pages/Sobre"

import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Lista" element={<Lista />} />
        </Routes>
      </div>
    </>
  )
}

export default App