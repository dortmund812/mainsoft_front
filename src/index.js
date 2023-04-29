import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import routes from './routes/routes';
import 'animate.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2RnYXJjaWE4MTIiLCJhIjoiY2xnejd1a3lmMDlpdDNlb3hhYWl5em9kdSJ9.mYIPmsFtnqiS2xcCnfIrow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CssBaseline/>
    <RouterProvider router={routes}/>
  </>
);