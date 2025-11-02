import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";



function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="login-page">
      {/* Vidéo en arrière-plan
      <video autoPlay loop muted className="video-bg">
        <source src={videoBg} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video> */}
      <div className="login-content">
        <h1>Bienvenue sur Atlethia</h1>

        <form id="loginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nom d'utilisateur / Mail / Numéro"
            className="login-input"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
            className="login-input"
          />
          <button type="submit" id="bouton-connexion" className="bouton">
            Se connecter
          </button>
          <div className="login-links">
            <a href="/mdpoublier">Mot de passe oublié ?</a>
            <a href="/inscription">Pas encore inscrit ? Inscrivez-vous</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
