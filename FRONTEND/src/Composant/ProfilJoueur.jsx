import React from 'react';
import { Box, Typography, Avatar, Grid, Chip, Card, CardMedia } from '@mui/material';

const PlayerProfile = ({ player }) => {
  return (
    <Box sx={{ p: 4, maxWidth: 800, margin: 'auto' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Avatar
            src={player.photo}
            alt={player.name}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4">{player.name}</Typography>
          <Typography variant="subtitle1">{player.position}</Typography>
          <Typography variant="body1">Âge : {player.age}</Typography>
          <Typography variant="body1">Club : {player.club}</Typography>
          <Typography variant="body1">Nationalité : {player.nationality}</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Statistiques</Typography>
            <Chip label={`Buts : ${player.goals}`} sx={{ mr: 1 }} />
            <Chip label={`Passes : ${player.assists}`} sx={{ mr: 1 }} />
            <Chip label={`Matchs : ${player.matches}`} />
          </Box>
        </Grid>
      </Grid>
      {/* Sectiion Galerie */}
      <Box sx={{mt: 4}}>
        <Typography variant="h5" gutterBottom>Galerie</Typography>
        <Grid container spacing={2}>
          {/* Place Photo Galerie */}
          <Grid item xs={6}>
            <Card sx={{height: 200, backgroundColor: '#f0f0f0', display: "flex", alignItems: "center", justifyContent: "center"}}>
              <Typography color="textSecondary">Vidéo à venir</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlayerProfile;