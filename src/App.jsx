import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Personajes from './pages/Personajes';
import Naves from './pages/Naves';
import Planetas from './pages/Planetas';
import Vehiculos from './pages/Vehiculos';
import Menu from './Componentes/Menu'; // para navegación
import Aleatorios from './Componentes/Aleatorios';
import Favoritos from './Componentes/Favoritos';
import Login from './Componentes/Login';
import Historia from './Componentes/Historia';
import Films from './Componentes/Films';
import Especies from "./pages/Especies";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
      <Route path="/Films" element={<Films />} />
      <Route path="/especies" element={<Especies />} />
      <Route path="/Aleatorios" element={<Aleatorios />} />
      <Route path="/Historia" element={<Historia />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/naves" element={<Naves />} />
        <Route path="/planetas" element={<Planetas />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
      </Routes>
    </Router>
  );
}

export default App;
