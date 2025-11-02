import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/accueil';
import Login from './pages/login';
import CreateUser from './pages/inscription';
import ForgetPassword from './pages/mdpoublier';
import Profil from './pages/profilUser';
import Layout from './Composant/Layout';

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
          {/* Ajoute ici toutes les autres pages avec navbar */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
