import './App.css'
import Nav from "./components/Nav";
import Rout from "./components/Rout";
import { BrowserRouter } from 'react-router-dom'; 

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Rout/>
    </BrowserRouter>
    </>
  )
}

export default App
