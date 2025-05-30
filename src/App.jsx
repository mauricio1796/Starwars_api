import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Personajes from './pages/Personajes';
import Naves from './pages/Naves';
import Planetas from './pages/Planetas';
import Vehiculos from './pages/Vehiculos';
import Menu from './Componentes/Menu';
import Aleatorios from './Componentes/Aleatorios';
import Favoritos from './Componentes/Favoritos';
import Login from './Componentes/Login';
import Historia from './Componentes/Historia';
import Films from './Componentes/Films';
import Especies from './pages/Especies';
import PrivateRoute from './Componentes/PrivateRoute';
import Capturados from './Componentes/Album';
import StarWarsQuiz from './Componentes/StarWarsQuiz';
function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/Login" element={<Login />} />

        <Route path="/capturados" element={<Capturados />} />

        {/* Rutas protegidas */}
        <Route path="/Films" element={
          <PrivateRoute><Films /></PrivateRoute>
        } />
        <Route path="/especies" element={
          <PrivateRoute><Especies /></PrivateRoute>
        } />
        <Route path="/Aleatorios" element={
          <PrivateRoute><Aleatorios /></PrivateRoute>
        } />
        <Route path="/Historia" element={
          <PrivateRoute><Historia /></PrivateRoute>
        } />
        <Route path="/Favoritos" element={
          <PrivateRoute><Favoritos /></PrivateRoute>
        } />
        <Route path="/personajes" element={
          <PrivateRoute><Personajes /></PrivateRoute>
        } />
        <Route path="/naves" element={
          <PrivateRoute><Naves /></PrivateRoute>
        } />
        <Route path="/planetas" element={
          <PrivateRoute><Planetas /></PrivateRoute>
        } />
        <Route path="/vehiculos" element={
          <PrivateRoute><Vehiculos /></PrivateRoute>
        } />

      <Route path="/starwars-quiz" element={<StarWarsQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
