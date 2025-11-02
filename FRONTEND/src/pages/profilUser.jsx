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
        galleryVideos: []

    };
    return (
        <div style={{ marginRight: '180px', padding: '20px' }}>
            <RightNavbar />
            <ProfilJoueur player={player} />

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