import React from 'react';
import { Box, Typography, Avatar, Grid, Chip } from '@mui/material';
import RightNavbar from '../Composant/RightNavbar';

function ProfilRecruteur() {
    const recruteur = {
        nom: "Dupont",
        prenom: "Claire",
        metier: "Recruteuse sportive",
        entreprise: "FC Recrutement",
        email: "claire.dupont@example.com",
        photo: "https://via.placeholder.com/150",
    };

    return (
        <div style={{ marginRight: '180px', padding: '20px' }}>
            <Box sx={{ p: 4, maxWidth: 800, margin: 'auto' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Avatar
                            src={recruteur.photo}
                            alt={`${recruteur.prenom} ${recruteur.nom}`}
                            sx={{ width: 150, height: 150 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h4">
                            {recruteur.prenom} {recruteur.nom}
                        </Typography>
                        <Typography variant="subtitle1">{recruteur.metier}</Typography>
                        <Typography variant="body1">Entreprise : {recruteur.entreprise}</Typography>
                        <Typography variant="body1">Email : {recruteur.email}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default ProfilRecruteur;

// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Avatar, Grid, CircularProgress } from '@mui/material';

// function ProfilRecruteur() {
//   const [recruteur, setRecruteur] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Récupération des données depuis ton backend
//   useEffect(() => {
//     fetch("https://ton-backend.com/api/recruteur") // remplace par ton URL réelle
//       .then((res) => res.json())
//       .then((data) => {
//         setRecruteur(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Erreur de chargement :", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ marginRight: '180px', padding: '20px', textAlign: 'center' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!recruteur) {
//     return (
//       <Box sx={{ marginRight: '180px', padding: '20px', textAlign: 'center' }}>
//         <Typography color="error">Impossible de charger le profil recruteur.</Typography>
//       </Box>
//     );
//   }

//   return (
//     <div style={{ marginRight: '180px', padding: '20px' }}>
//       <Box sx={{ p: 4, maxWidth: 800, margin: 'auto' }}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={4}>
//             <Avatar
//               src={recruteur.photo}
//               alt={`${recruteur.prenom} ${recruteur.nom}`}
//               sx={{ width: 150, height: 150 }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={8}>
//             <Typography variant="h4">
//               {recruteur.prenom} {recruteur.nom}
//             </Typography>
//             <Typography variant="subtitle1">{recruteur.metier}</Typography>
//             <Typography variant="body1">Entreprise : {recruteur.entreprise}</Typography>
//             <Typography variant="body1">Email : {recruteur.email}</Typography>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// }

// export default ProfilRecruteur;
