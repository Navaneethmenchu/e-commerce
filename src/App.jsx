import './App.css'
import Nav from "./components/Nav";
import Rout from "./components/Rout";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom'; 

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Rout/>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
