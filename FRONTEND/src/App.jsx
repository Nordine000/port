import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/accueil';
import Login from './pages/login';
import CreateUser from './pages/inscription';
import ForgetPassword from './pages/mdpoublier';
import Profil from './pages/profilUser';
import Layout from './Composant/Layout';
import MessagePage from './pages/message';
import ProfilRecruteur from "./pages/ProfilRecruteur";
import Parametres from "./pages/Parametres";




function App() {
  return (
    <Router>
      <Routes>
        {/* Routes sans navbar */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<CreateUser />} />
        <Route path="/mdpoublier" element={<ForgetPassword />} />

        {/* Routes avec navbar */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profilUser" element={<Profil />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/profil-recruteur" element={<ProfilRecruteur />} />
          <Route path="/parametres" element={<Parametres />} />

          {/* Ajoute ici toutes les autres pages avec navbar */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
