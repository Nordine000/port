import React from 'react';
import { Box, List, ListItem, Typography, Button } from '@mui/material';
import { Home as HomeIcon, Info, Work, ContactMail } from '@mui/icons-material';
import { Settings } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import CreateUser from '../pages/inscription';
import Profil from '../pages/profilUser';



export default function RightNavbar() {
  const navItems = [
    { label: 'Accueil', icon: <HomeIcon />, path: '/home' },

    { label: 'Recherche', icon: <Info />, path: '/recherche' },
    { label: 'Découvrir', icon: <Info />, path: '/Decouvrir' },
    { label: 'Shorts', icon: <Info />, path: '/Shorts' },
    { label: 'Message', icon: <Info />, path: '/message' },
    { label: 'Notifications', icon: <Info />, path: '/Notifications' },
    { label: 'Tableau de bord', icon: <Info />, path: '/Tableau de bord' },
    { label: 'Profil', icon: <Work />, path: '/profilUser' },
    { label: 'Contact', icon: <ContactMail />, path: '/inscription' },
    { label: 'Profil Recruteur', icon: <Work />, path: '/profil-recruteur' },
    { label: 'Paramètres', icon: <Settings />, path: '/parametres' },
  ];

  return (
    <Box className="right-navbar">
      <List>
        {navItems.map((item) => (
  <ListItem key={item.label}> {/* ← AJOUT DE key */}
    <Button
      component={Link}
      to={item.path}
      startIcon={item.icon}
      className='buttonnavbar'
    >
      {item.label}
    </Button>
  </ListItem>
))}
      </List>
    </Box>
  );
}
