import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Chip,
  Card,
  CardMedia,
  Button
} from '@mui/material';

const PlayerProfile = ({ player, isRecruteur, onEvaluer }) => {
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

          {/* Évaluations */}
          {player.evaluations && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">Évaluations</Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                {player.evaluations.map((evalItem, index) => (
                  <Chip key={index} label={`${evalItem.label} : ${evalItem.score}/10`} />
                ))}
              </Box>
              {player.comment && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle1">Commentaires :</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {player.comment}
                  </Typography>
                </Box>
              )}
            </Box>
          )}

          {/* Bouton visible uniquement pour les recruteurs */}
          {isRecruteur && (
            <Box sx={{ mt: 4 }}>
              <Button variant="contained" color="primary" onClick={onEvaluer}>
                Faire une évaluation
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>

      {/* Galerie */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Galerie</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ height: 200, backgroundColor: '#f0f0f0', display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography color="textSecondary">Vidéo à venir</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PlayerProfile;
