import React from 'react'
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <Container>
            <Typography variant='h2' textAlign={'center'}>MainSoft - Humedad por ciudades</Typography>
            <Typography textAlign={'center'}>
                <Link to={'/search'}>Inicia tu busqueda aqui.</Link>
            </Typography>
        </Container>
    )
}

export default Index