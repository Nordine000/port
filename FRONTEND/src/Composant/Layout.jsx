// Composant/Layout.js
import React from 'react';
import RightNavbar from './RightNavbar'; // adapte le chemin si besoin
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <RightNavbar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
}
