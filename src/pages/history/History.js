import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SunImage from '../../assets/img/sunset.svg';
import CloudsImage from '../../assets/img/clouds.svg';
import RainImage from '../../assets/img/rain.svg';
import StormImage from '../../assets/img/storm.svg';

const History = () => {

    const [historial, setHistorial] = useState(null);

    const weather = {
        "Clear" : SunImage,
        "Clouds" : CloudsImage,
        "Thunderstorm" : StormImage,
        "Rain" : RainImage,
        "Drizzle" : RainImage,
        "Snow" : RainImage,
        "Atmosphere" : SunImage,
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/history`)
            .then((response) => response.json())
            .then((resp) => {
                const res = resp.reverse();
                const newRes = res.map((item) => {
                    const dateFormat = new Date(item.created_at);
                    return {
                        id: item.id,
                        city: item.city,
                        latitud: item.latitud,
                        longitud: item.longitud,
                        dateDate: `${dateFormat.getDate()}/${dateFormat.getMonth() + 1}/${dateFormat.getFullYear()}`,
                        dateHour: `${dateFormat.getHours()}:${dateFormat.getMinutes()}:${dateFormat.getSeconds()}`,
                        data: JSON.parse(item.data)
                    }
                });
                setHistorial(newRes)
            });
    }, []);

    useEffect(() => {
        if (historial) {
            // historial.map((item) => {
            //     console.log(item)
            // })
            console.log(historial)
        }
    }, [historial]);

    return (
        <Container sx={{padding: '3rem 0'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3' textAlign={'center'}>Historial</Typography>
                </Grid>

                {historial && historial.map((item) => (
                    <Grid item xs={6} sm={4} md={3}  key={item.id}>
                        <Card>
                            <CardContent>
                                <Typography variant='h5' textAlign={'center'}>{item?.city}</Typography>
                                <Typography variant='h6' textAlign={'center'}>{`Humedad: ${item?.data.main.humidity}%`}</Typography>

                                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <img src={weather[item.data.weather[0].main] || SunImage} alt={'Weather'} width={'50%'} />
                                </Box>

                                <Typography textAlign={'center'}>{item.dateDate}</Typography>
                                <Typography textAlign={'center'}>{item.dateHour}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default History