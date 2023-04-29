import { Autocomplete, Box, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import mapboxgl from 'mapbox-gl';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import SunImage from '../../assets/img/sunset.svg';
import CloudsImage from '../../assets/img/clouds.svg';
import RainImage from '../../assets/img/rain.svg';
import StormImage from '../../assets/img/storm.svg';
import styled from 'styled-components';

const Search = () => {

    const [latitud, setLatitud] = useState(4.60971);
    const [longitud, setLongitud] = useState(-74.08175);
    const [cityInfo, setCityInfo] = useState(null);
    const [cityList, setCityList] = useState(null);

    const weather = {
        "Clear" : SunImage,
        "Clouds" : CloudsImage,
        "Thunderstorm" : StormImage,
        "Rain" : RainImage,
        "Drizzle" : RainImage,
        "Snow" : RainImage,
        "Atmosphere" : SunImage,
    };

    // CONSULTA ADMOSFETICA
    useEffect(() => {
        const appid = "1f0bc6c7dd38c273882c25ded4d38d0a";
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${appid}`)
            .then((response) => response.json())
            .then((resp) => setCityInfo(resp));
    }, [latitud, longitud]);

    useEffect(() => {
        if (cityInfo?.main) {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'city': cityInfo?.name,
                    'latitud': latitud,
                    'longitud': longitud,
                    'data': JSON.stringify(cityInfo)
                })
            }
            fetch(`${'http://127.0.0.1:8000'}/api/history`, config)
            .then((response) => response.json())
        }
    }, [cityInfo]);

    // INICIALIZACION MAPA
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/dark-v9', // style URL
            center: [longitud, latitud], // starting position [lng, lat]
            zoom: 8, // starting zoom
            scrollZoom: true,
            boxZoom: true,
            dragRotate: false,
            dragPan: true,
            keyboard: false,
            doubleClickZoom: false,
            touchZoomRotate: false,
            touchPitch: false
        });
    }, [latitud, longitud]);

    useEffect(() => {
        const appid = "1f0bc6c7dd38c273882c25ded4d38d0a";
        fetch(`http://127.0.0.1:8000/api/city`)
            .then((response) => response.json())
            .then((resp) => setCityList(resp.map((item) => {
                return {
                    label: item.name,
                    lat: item.latitud,
                    lon: item.longitud
                }
            })));
    }, []);

    const handleChange = (val) => {
        setLatitud(val?.lat || latitud);
        setLongitud(val?.lon || longitud);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography variant='h3'>Buscar</Typography>
            </Grid>

            <Grid item xs={12} sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={cityList}
                    sx={{ width: '100%', maxWidth: '500px' }}
                    onChange={(event, newValue) => {
                        handleChange(newValue);
                    }}
                    renderInput={(params) => <TextField
                        {...params}
                        label="City"
                    />}
                />
            </Grid>

            
            <Grid item xs={12}>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={8}>
                        <Card variant="outlined">
                            <CardContent id={'map'} sx={{
                                width: '100%',
                                height: '50vh',
                                border: '1px solid #333'
                            }}>
                                <Typography>Ciudad: </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card variant="outlined">
                            <CardContent>
                                <Box>
                                    <Typography variant='h4' textAlign={'center'}>{`${cityInfo?.name}`}</Typography>
                                    <Typography variant='h4' textAlign={'center'}>{`Humedad: ${cityInfo?.main.humidity}%`}</Typography>
                                </Box>
                                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <img src={weather[cityInfo?.weather[0].main] || SunImage} alt={'Weather'} width={'50%'} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>



        </Grid>
    )
}

export default Search