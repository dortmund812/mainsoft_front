import styled from 'styled-components';
import React from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  }
  return (
    <Page404>
      <Box sx={{
        textAlign: "center",
        width: "100%"
      }}>
        <FourZeroFourBg>
          <Typography variant='h1' textAlign={'center'}>404</Typography>
        </FourZeroFourBg>

        <ContantBox404>
          <Typography variant='h3'>Parece que te perdiste.</Typography>
          <Typography component='p'>La pagina que estas buscando no existe.</Typography>

          <Link404 onClick={() => handleClick()}>Volver</Link404>
        </ContantBox404>
      </Box>
    </Page404>
  )
}

export default NotFound


const Page404 = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:#FFF;
  font-family: 'Arvo', serif;
  img {
    width: 100%;
  }
`
const FourZeroFourBg = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  background-repeat: no-repeat;
  height: 400px;
  background-position: center;
  h1, h3 {
    font-size:80px;
  }
`
const Link404 = styled.a`
  color: #fff!important;
  padding: 10px 20px;
  background: #39AC31;
  margin: 20px 0;
  display: inline-block;
  cursor: pointer;
  font-family: 'Lato';
  &:hover {
    background: #51B44B;
  }
`
const ContantBox404 = styled.div`
  margin-top:-50px;
`