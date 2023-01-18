import logo from "./logo.svg"
import "./App.css"
import Jewelry from "./pages/Jewelry.js"
import Materials from "./pages/Materials.js"
import NavBar from "./NavBar"
import Banner from "./Banner"
import Form from "./Form"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Form />
      <div className="container">
        <Routes>
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/materials" element={<Materials />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
