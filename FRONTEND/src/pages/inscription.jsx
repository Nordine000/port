import React, { useState } from 'react';
import { getNames } from 'country-list';
import MultiCheckboxSelector from '../Composant/Sportselected';
import '../app.css';


function CreateUser() {
  const [role, setRole] = useState(null);
  const countries = getNames(); // accessible partout
  const [selectedSports, setSelectedSports] = useState([]);
  const [selectedGenerations, setSelectedGenerations] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState([]);
  const [recevoirSuggestions, setRecevoirSuggestions] = useState(null);
  const [evaluationConfidentielle, setEvaluationConfidentielle] = useState(null);
  const [messagerieActivee, setMessagerieActivee] = useState(null);
  const [preferenceReponse, setPreferenceReponse] = useState("");
  const [conditionsAcceptees, setConditionsAcceptees] = useState(false);
  const [niveauActuel, setNiveauActuel] = useState([]);
  const [palmares, setPalmares] = useState("");
  const [posteDeJeu, setPosteDeJeu] = useState([]);
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);
const prevStep = () => setStep((prev) => prev - 1);



  const poste = ["Gardien de but","Défenseur central","Latéral gauche","Latéral droit","Milieu défensif","Milieu central","Milieu offensif","Ailier gauche","Ailier droit","Attaquant","Avant-centre"];
  const niveau = ["Amateur","Semi-professionnel","Scolaire / Universitaire"];
  const sports = ["Football", "Basketball", "Tennis", "Rugby", "Boxe"];
  const generations = ["U13", "U15", "U17", "U19", "Seniors"];
  const criteria = ["Vitesse", "Endurance", "Technique", "Mental", "Leadership"];


  const handleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="inscription-wrapper">
  <header className="User-page">
    <h1 className="inscription-titre">Atlethia</h1>
  </header>

  {!role ? (
    <div className="choix-role">
      <h2 className="choix-role-titre">Choisissez votre rôle</h2>
      <button className="choix-role-bouton" onClick={() => handleSelect('invite')}>Invité</button>
      <button className="choix-role-bouton" onClick={() => handleSelect('recruteur')}>Recruteur</button>
    </div>
  ) : role === 'recruteur' ? (
    <FormulaireRecruteur
      countries={countries}
      sports={sports}
      generations={generations}
      criteria={criteria}
      selectedSports={selectedSports}
      setSelectedSports={setSelectedSports}
      selectedGenerations={selectedGenerations}
      setSelectedGenerations={setSelectedGenerations}
      selectedCriteria={selectedCriteria}
      setSelectedCriteria={setSelectedCriteria}
      recevoirSuggestions={recevoirSuggestions}
      setRecevoirSuggestions={setRecevoirSuggestions}
      evaluationConfidentielle={evaluationConfidentielle}
      setEvaluationConfidentielle={setEvaluationConfidentielle}
      messagerieActivee={messagerieActivee}
      setMessagerieActivee={setMessagerieActivee}
      preferenceReponse={preferenceReponse}
      setPreferenceReponse={setPreferenceReponse}
      conditionsAcceptees={conditionsAcceptees}
      setConditionsAcceptees={setConditionsAcceptees}
    />
  ) : (
    <FormulaireInvite
      countries={countries}
      sports={sports}
      generations={generations}
      criteria={criteria}
      niveau={niveau}
      poste={poste}
      selectedSports={selectedSports}
      setSelectedSports={setSelectedSports}
      selectedGenerations={selectedGenerations}
      setSelectedGenerations={setSelectedGenerations}
      selectedCriteria={selectedCriteria}
      setSelectedCriteria={setSelectedCriteria}
      recevoirSuggestions={recevoirSuggestions}
      setRecevoirSuggestions={setRecevoirSuggestions}
      evaluationConfidentielle={evaluationConfidentielle}
      setEvaluationConfidentielle={setEvaluationConfidentielle}
      messagerieActivee={messagerieActivee}
      setMessagerieActivee={setMessagerieActivee}
      preferenceReponse={preferenceReponse}
      setPreferenceReponse={setPreferenceReponse}
      conditionsAcceptees={conditionsAcceptees}
      setConditionsAcceptees={setConditionsAcceptees}
      niveauActuel={niveauActuel}
      setNiveauActuel={setNiveauActuel}
      palmares={palmares}
      setPalmares={setPalmares}
      posteDeJeu={posteDeJeu}
      setPosteDeJeu={setPosteDeJeu}
      step={step}
  nextStep={nextStep}
  prevStep={prevStep}
    />
  )}
</div>
  );
}

function FormulaireInvite({
  countries, sports, poste, niveau,
  step, nextStep, prevStep,
  selectedSports, setSelectedSports,
  niveauActuel, setNiveauActuel,
  posteDeJeu, setPosteDeJeu,
  palmares, setPalmares
}) {
  return (
    <div className="form-athlete-container">
      <h2 className="form-title">Inscription Athlète – Étape {step} / 3</h2>

      {step === 1 && (
        <form className="form-section">
          <input type="text" className="form-input" placeholder="Nom" />
          <input type="text" className="form-input" placeholder="Prénom" />
          <input type="email" className="form-input" placeholder="Email" />
          <input type="password" className="form-input" placeholder="Mot de passe" />
          <select className="form-select">
            <option value="">Sexe</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
          <select className="form-select">
            <option value="">--Sélectionnez votre pays--</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <button type="button" className="form-button" onClick={nextStep}>Suivant</button>
        </form>
      )}

      {step === 2 && (
        <form className="form-section">
          <MultiCheckboxSelector
            label="Sport(s) pratiqué(s)"
            options={sports}
            selectedItems={selectedSports}
            setSelectedItems={setSelectedSports}
          />
          <MultiCheckboxSelector
            label="Poste(s)"
            options={poste}
            selectedItems={posteDeJeu}
            setSelectedItems={setPosteDeJeu}
          />
          <MultiCheckboxSelector
            label="Niveau actuel"
            options={niveau}
            selectedItems={niveauActuel}
            setSelectedItems={setNiveauActuel}
          />
          <input type="text" className="form-input" placeholder="Nom du club actuel" />
          <input type="text" className="form-input" placeholder="Années de pratique" />
          <div className="form-navigation">
            <button type="button" className="form-button" onClick={prevStep}>Retour</button>
            <button type="button" className="form-button" onClick={nextStep}>Suivant</button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form className="form-section">
          <textarea
            className="form-textarea"
            placeholder="Parle de toi, ton palmarès, tes objectifs..."
            value={palmares}
            onChange={(e) => setPalmares(e.target.value)}
            rows={5}
          />
          <div className="form-navigation">
            <button type="button" className="form-button" onClick={prevStep}>Retour</button>
            <button type="submit" className="form-button">Terminer l’inscription</button>
          </div>
        </form>
      )}
    </div>
  );
}




function FormulaireRecruteur({
  countries, sports, generations, criteria,
  selectedSports, setSelectedSports,
  selectedGenerations, setSelectedGenerations,
  selectedCriteria, setSelectedCriteria,
  recevoirSuggestions, setRecevoirSuggestions,
  evaluationConfidentielle, setEvaluationConfidentielle,
  messagerieActivee, setMessagerieActivee,
  preferenceReponse, setPreferenceReponse,
  conditionsAcceptees, setConditionsAcceptees
}) {
  return (
    <div className="form-recruteur-container">
      <h2 className="form-title">Formulaire de Recruteur / Entraîneur</h2>

      <p className="form-description">
        Ce formulaire est destiné aux professionnels du sport souhaitant accéder aux profils des
        jeunes athlètes sur Athletia.<br />
        Il permet de personnaliser votre expérience, d’évaluer les talents et d’entrer en contact via une messagerie sécurisée.
      </p>

      <form className="form-section">
        <h3 className="form-section-title">Informations Personnelles</h3>
        <input type="text" className="form-input" placeholder="Nom" />
        <input type="text" className="form-input" placeholder="Prénom" />
        <select className="form-select">
          <option value="">Fonction</option>
          <option value="PrépaOption">Préparateur physique</option>
          <option value="CoachOption">Entraîneur principal</option>
          <option value="recruteurOption">Recruteur</option>
        </select>
        <input type="text" className="form-input" placeholder="Numéro de téléphone : (optionnel)" />
        <label>
          <select name="country" required className="form-select">
            <option value="">--Sélectionnez votre pays--</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <input type="email" className="form-input" placeholder="Email" />
        <input type="password" className="form-input" placeholder="Mot de passe" />
        <button type="submit" className="form-button">S'inscrire</button>
      </form>

      <h3 className="form-section-title">Objectifs de Recrutement</h3>
      <form className="form-section">
        <MultiCheckboxSelector
          label="Discipline(s) sportive(s) ciblée(s) :"
          options={sports}
          selectedItems={selectedSports}
          setSelectedItems={setSelectedSports}
        />
        <MultiCheckboxSelector
          label="Catégorie(s) recherchée(s) :"
          options={generations}
          selectedItems={selectedGenerations}
          setSelectedItems={setSelectedGenerations}
        />
        <MultiCheckboxSelector
          label="Critères prioritaires :"
          options={criteria}
          selectedItems={selectedCriteria}
          setSelectedItems={setSelectedCriteria}
        />
      </form>

      <h3 className="form-section-title">Accès aux Profils</h3>
      <label className="form-label">
        Souhaitez-vous recevoir des suggestions de profils ?
        <input type="radio" className="form-radio" name="suggestions" value="oui" onChange={() => setRecevoirSuggestions(true)} /> Oui
        <input type="radio" className="form-radio" name="suggestions" value="non" onChange={() => setRecevoirSuggestions(false)} /> Non
      </label>
      <label className="form-label">
        Souhaitez-vous évaluer les profils de manière confidentielle ?
        <input type="radio" className="form-radio" name="confidential" value="oui" onChange={() => setEvaluationConfidentielle(true)} /> Oui
        <input type="radio" className="form-radio" name="confidential" value="non" onChange={() => setEvaluationConfidentielle(false)} /> Non
      </label>

      <h3 className="form-section-title">Messagerie Sécurisée</h3>
      <label className="form-label">
        Activer la messagerie ?
        <input type="radio" className="form-radio" name="messaging" value="oui" onChange={() => setMessagerieActivee(true)} /> Oui
        <input type="radio" className="form-radio" name="messaging" value="non" onChange={() => setMessagerieActivee(false)} /> Non
      </label>
      <label className="form-label">
        Préférence de réponse :
        <input type="radio" className="form-radio" name="response" value="email" onChange={() => setPreferenceReponse("email")} /> Par e-mail
        <input type="radio" className="form-radio" name="response" value="platform" onChange={() => setPreferenceReponse("platform")} /> Sur Athletia
        <input type="radio" className="form-radio" name="response" value="both" onChange={() => setPreferenceReponse("both")} /> Les deux
      </label>

      <h3 className="form-section-title">Engagement</h3>
      <p className="form-description">
        En soumettant ce formulaire, vous acceptez de respecter la charte de confidentialité d’Athletia et d’utiliser les données des jeunes sportifs uniquement dans un cadre professionnel et éthique.
      </p>
      <label className="form-label">
        <input type="checkbox" className="form-checkbox" checked={conditionsAcceptees} onChange={(e) => setConditionsAcceptees(e.target.checked)} />
        J’accepte les conditions d’utilisation et la charte Athletia.
      </label>
    </div>
  );
}

export default CreateUser;
