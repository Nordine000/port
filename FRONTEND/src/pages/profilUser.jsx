import React from 'react';
import { Box, Typography, Avatar, Grid, Chip, Card, CardMedia } from '@mui/material';
import RightNavbar from '../Composant/RightNavbar';
import ProfilJoueur from '../Composant/ProfilJoueur';




function Profil() {
    const player = {
        name: "Kylian Mbappé",
        age: 26,
        position: "Attaquant",
        club: "Paris Saint-Germain",
        nationality: "Française",
        goals: 35,
        assists: 12,
        matches: 42,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kylian_Mbapp%C3%A9_2019.jpg/800px-Kylian_Mbapp%C3%A9_2019.jpg",
        galleryPhotos: [],
        galleryVideos: [],
        evaluations: [
            { label: "Vitesse", score: 8 },
            { label: "Technique", score: 9 },
            { label: "Mental", score: 7 },
        ],
        comment: "Très bon potentiel, rapide et décisif dans les derniers mètres.",


    };
    return (
        <div style={{ marginRight: '180px', padding: '20px' }}>
            <ProfilJoueur player={player} isRecruteur={true} onEvaluer={() => console.log("Ouvrir le formulaire d'évaluation")}/>

            <Typography variant="h5" sx={{ mt: 4 }}>Galerie</Typography>
            <Grid container spacing={2}>

                {/* Affichage des photos */}
                {player.galleryPhotos.length > 0 ? (
                    player.galleryPhotos.map((photoUrl, index) => (
                        <Grid item xs={6} key={`photo-${index}`}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={photoUrl}
                                    alt={`Photo ${index + 1}`}
                                    sx={{ height: 200 }}
                                />
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Card sx={{ height: 200, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography color="textSecondary">Aucune photo disponible</Typography>
                        </Card>
                    </Grid>
                )}


                {/* Affichage des vidéos */}
                {player.galleryVideos.length > 0 ? (
                    player.galleryVideos.map((videoUrl, index) => (
                        <Grid item xs={6} key={`video-${index}`}>
                            <Card>
                                <CardMedia
                                    component="video"
                                    src={videoUrl}
                                    controls
                                    sx={{ height: 200 }}
                                />
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Card sx={{ height: 200, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography color="textSecondary">Aucune vidéo disponible</Typography>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default Profil;

// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   Avatar,
//   Grid,
//   Chip,
//   Card,
//   CardMedia,
//   CircularProgress
// } from '@mui/material';

// function Profil() {
//   const [player, setPlayer] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Récupération des données du joueur depuis ton backend
//   useEffect(() => {
//     fetch("https://ton-backend.com/api/joueur") // remplace par ton URL réelle
//       .then((res) => res.json())
//       .then((data) => {
//         setPlayer(data);
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

//   if (!player) {
//     return (
//       <Box sx={{ marginRight: '180px', padding: '20px', textAlign: 'center' }}>
//         <Typography color="error">Impossible de charger le profil du joueur.</Typography>
//       </Box>
//     );
//   }

//   return (
//     <div style={{ marginRight: '180px', padding: '20px' }}>
//       <Box sx={{ p: 4, maxWidth: 800, margin: 'auto' }}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={4}>
//             <Avatar
//               src={player.photo}
//               alt={player.name}
//               sx={{ width: 150, height: 150 }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={8}>
//             <Typography variant="h4">{player.name}</Typography>
//             <Typography variant="subtitle1">{player.position}</Typography>
//             <Typography variant="body1">Âge : {player.age}</Typography>
//             <Typography variant="body1">Club : {player.club}</Typography>
//             <Typography variant="body1">Nationalité : {player.nationality}</Typography>
//             <Box sx={{ mt: 2 }}>
//               <Typography variant="h6">Statistiques</Typography>
//               <Chip label={`Buts : ${player.goals}`} sx={{ mr: 1 }} />
//               <Chip label={`Passes : ${player.assists}`} sx={{ mr: 1 }} />
//               <Chip label={`Matchs : ${player.matches}`} />
//             </Box>
//             {player.evaluations && (
//               <Box sx={{ mt: 4 }}>
//                 <Typography variant="h6">Évaluations</Typography>
//                 <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
//                   {player.evaluations.map((evalItem, index) => (
//                     <Chip key={index} label={`${evalItem.label} : ${evalItem.score}/10`} />
//                   ))}
//                 </Box>
//                 {player.comment && (
//                   <Box sx={{ mt: 2 }}>
//                     <Typography variant="subtitle1">Commentaires :</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {player.comment}
//                     </Typography>
//                   </Box>
//                 )}
//               </Box>
//             )}
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Galerie */}
//       <Typography variant="h5" sx={{ mt: 4 }}>Galerie</Typography>
//       <Grid container spacing={2}>
//         {player.galleryPhotos?.length > 0 ? (
//           player.galleryPhotos.map((photoUrl, index) => (
//             <Grid item xs={6} key={`photo-${index}`}>
//               <Card>
//                 <CardMedia
//                   component="img"
//                   image={photoUrl}
//                   alt={`Photo ${index + 1}`}
//                   sx={{ height: 200 }}
//                 />
//               </Card>
//             </Grid>
//           ))
//         ) : (
//           <Grid item xs={12}>
//             <Card sx={{ height: 200, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <Typography color="textSecondary">Aucune photo disponible</Typography>
//             </Card>
//           </Grid>
//         )}

//         {player.galleryVideos?.length > 0 ? (
//           player.galleryVideos.map((videoUrl, index) => (
//             <Grid item xs={6} key={`video-${index}`}>
//               <Card>
//                 <CardMedia
//                   component="video"
//                   src={videoUrl}
//                   controls
//                   sx={{ height: 200 }}
//                 />
//               </Card>
//             </Grid>
//           ))
//         ) : (
//           <Grid item xs={12}>
//             <Card sx={{ height: 200, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <Typography color="textSecondary">Aucune vidéo disponible</Typography>
//             </Card>
//           </Grid>
//         )}
//       </Grid>
//     </div>
//   );
// }

// export default Profil;
