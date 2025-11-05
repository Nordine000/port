// import React, { useEffect, useState } from "react";
// import {
//     Box,
//     Typography,
//     TextField,
//     Switch,
//     FormControlLabel,
//     Button,
//     Paper,
//     Divider,
//     MenuItem,
//     Avatar,
//     Grid,
//     CircularProgress
// } from "@mui/material";

// function Parametres() {
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Exemple de récupération des données depuis ton backend
//     useEffect(() => {
//         fetch("https://ton-backend.com/api/utilisateur") // remplace par ton URL réelle
//             .then((res) => res.json())
//             .then((data) => {
//                 setUserData(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error("Erreur de chargement :", err);
//                 setLoading(false);
//             });
//     }, []);

//     const handleSave = () => {
//         // Envoi des modifications au backend
//         fetch("https://ton-backend.com/api/utilisateur/update", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(userData),
//         })
//             .then((res) => res.json())
//             .then((response) => {
//                 console.log("Modifications enregistrées :", response);
//             });
//     };

//     if (loading) {
//         return (
//             <Box sx={{ marginRight: "180px", padding: "20px", textAlign: "center" }}>
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     return (
//         <Box sx={{ marginRight: "180px", padding: "20px" }}>
//             <Paper elevation={3} sx={{ p: 4, maxWidth: 800, margin: "auto" }}>
//                 <Typography variant="h5" gutterBottom>
//                     Paramètres du compte
//                 </Typography>

//                 {/* Profil utilisateur */}
//                 <Typography variant="h6" sx={{ mt: 3 }}>
//                     Profil
//                 </Typography>
//                 <Grid container spacing={2} sx={{ mt: 1 }}>
//                     <Grid item xs={12} sm={3}>
//                         <Avatar
//                             src={userData.photo}
//                             alt="Photo de profil"
//                             sx={{ width: 100, height: 100 }}
//                         />
//                     </Grid>
//                     <Grid item xs={12} sm={9}>
//                         <TextField
//                             label="Prénom"
//                             fullWidth
//                             value={userData.prenom}
//                             onChange={(e) => setUserData({ ...userData, prenom: e.target.value })}
//                             sx={{ mb: 2 }}
//                         />
//                         <TextField
//                             label="Nom"
//                             fullWidth
//                             value={userData.nom}
//                             onChange={(e) => setUserData({ ...userData, nom: e.target.value })}
//                             sx={{ mb: 2 }}
//                         />
//                         <TextField
//                             label="Bio"
//                             fullWidth
//                             multiline
//                             rows={2}
//                             value={userData.bio}
//                             onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
//                         />
//                     </Grid>
//                 </Grid>

//                 {/* Email */}
//                 <Typography variant="h6" sx={{ mt: 4 }}>
//                     Email
//                 </Typography>
//                 <TextField
//                     label="Adresse email"
//                     fullWidth
//                     value={userData.email}
//                     onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//                     sx={{ mt: 2 }}
//                 />

//                 {/* Préférences */}
//                 <Typography variant="h6" sx={{ mt: 4 }}>
//                     Préférences
//                 </Typography>
//                 <TextField
//                     select
//                     label="Thème"
//                     value={userData.theme}
//                     onChange={(e) => setUserData({ ...userData, theme: e.target.value })}
//                     fullWidth
//                     sx={{ mt: 2 }}
//                 >
//                     <MenuItem value="clair">Clair</MenuItem>
//                     <MenuItem value="sombre">Sombre</MenuItem>
//                 </TextField>
//                 <FormControlLabel
//                     control={
//                         <Switch
//                             checked={userData.notifications}
//                             onChange={(e) => setUserData({ ...userData, notifications: e.target.checked })}
//                         />
//                     }
//                     label="Activer les notifications"
//                     sx={{ mt: 2 }}
//                 />

//                 <Divider sx={{ my: 4 }} />

//                 <Button variant="contained" color="primary" onClick={handleSave}>
//                     Enregistrer les modifications
//                 </Button>
//             </Paper>
//         </Box>
//     );
// }

// export default Parametres;
import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Switch,
    FormControlLabel,
    Button,
    Paper,
    Divider,
    MenuItem,
    Avatar,
    Grid
} from "@mui/material";

function Parametres() {
    const [nom, setNom] = useState("Dupont");
    const [prenom, setPrenom] = useState("Claire");
    const [email, setEmail] = useState("claire.dupont@example.com");
    const [bio, setBio] = useState("Recruteuse passionnée par le football féminin.");
    const [theme, setTheme] = useState("clair");
    const [notifications, setNotifications] = useState(true);
    const [newsletter, setNewsletter] = useState(false);
    const [motDePasse, setMotDePasse] = useState("");
    const [profilPublic, setProfilPublic] = useState(true);

    const handleSave = () => {
        console.log("Paramètres enregistrés :", {
            nom,
            prenom,
            email,
            bio,
            theme,
            notifications,
            newsletter,
            motDePasse,
            profilPublic,
        });
    };

    return (
        <Box sx={{ marginRight: "180px", padding: "20px" }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 800, margin: "auto" }}>
                <Typography variant="h5" gutterBottom>
                    Paramètres du compte
                </Typography>

                {/* Profil utilisateur */}
                <Typography variant="h6" sx={{ mt: 3 }}>
                    Profil
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} sm={3}>
                        <Avatar
                            src="https://via.placeholder.com/150"
                            alt="Photo de profil"
                            sx={{ width: 100, height: 100 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TextField
                            label="Prénom"
                            fullWidth
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Nom"
                            fullWidth
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Bio"
                            fullWidth
                            multiline
                            rows={2}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </Grid>
                </Grid>

                {/* Informations de contact */}
                <Typography variant="h6" sx={{ mt: 4 }}>
                    Informations de contact
                </Typography>
                <TextField
                    label="Adresse email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mt: 2 }}
                />

                {/* Préférences d'affichage */}
                <Typography variant="h6" sx={{ mt: 4 }}>
                    Apparence
                </Typography>
                <TextField
                    select
                    label="Thème"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    <MenuItem value="clair">Clair</MenuItem>
                    <MenuItem value="sombre">Sombre</MenuItem>
                </TextField>

                {/* Notifications */}
                <Typography variant="h6" sx={{ mt: 4 }}>
                    Notifications
                </Typography>
                <FormControlLabel
                    control={
                        <Switch
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                        />
                    }
                    label="Activer les notifications"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={newsletter}
                            onChange={(e) => setNewsletter(e.target.checked)}
                        />
                    }
                    label="Recevoir la newsletter"
                />

                {/* Confidentialité */}
                <Typography variant="h6" sx={{ mt: 4 }}>
                    Confidentialité
                </Typography>
                <FormControlLabel
                    control={
                        <Switch
                            checked={profilPublic}
                            onChange={(e) => setProfilPublic(e.target.checked)}
                        />
                    }
                    label={profilPublic ? "Profil public" : "Profil privé"}
                />

                {/* Sécurité */}
                <Typography variant="h6" sx={{ mt: 4 }}>
                    Sécurité
                </Typography>
                <TextField
                    label="Nouveau mot de passe"
                    type="password"
                    fullWidth
                    value={motDePasse}
                    onChange={(e) => setMotDePasse(e.target.value)}
                    sx={{ mt: 2 }}
                />

                <Divider sx={{ my: 4 }} />

                <Button variant="contained" color="primary" onClick={handleSave}>
                    Enregistrer les modifications
                </Button>
            </Paper>
        </Box>
    );
}

export default Parametres;
