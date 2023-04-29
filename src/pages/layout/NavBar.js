import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import BurguerButton from '../../components/button/BurguerButton'

const NavBar = ({
    clicked,
    setClicked,
    handleClicked
}) => {

    return (
        <>
            <NavBarContainer>
                <BgDiv className={`initial ${clicked && 'active'}`} ></BgDiv>
                
                <Link to={'/'}>
                    <Typography variant='h4' component={'h2'} fontWeight={'400'}>
                        MainSoft
                    </Typography>
                </Link>

                <Box className={`links ${clicked && 'active'}`}>
                    <Link to={'/search'}>Buscar</Link>
                    <Link to={'/history'}>Historial</Link>
                </Box>

                <Box className='burguer'>
                    <BurguerButton clicked={clicked} handleClicked={handleClicked} />
                </Box>

            </NavBarContainer>
        </>
    )
}

export default NavBar

const NavBarContainer = styled.nav`
    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10000;
    box-sizing: border-box;
    h2 {
        color: #FFF;
        font-weight: 400;
        z-index: 10000;
        padding-left: 1rem;
        span {
            font-weight: bold;
        }
    }
    a {
        color: #FFF;
        text-decoration: none;
        margin-right: 1rem;
    }
    .links {
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .7s ease;
        a {
            color: #FFF;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px) {
            position: initial;
            margin: 0;
            a {
                font-size: 1rem;
                color: #FFF;
                display: inline;
            }
        }
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a {
            font-size: 2rem;
            margin-top: 1rem ;
            color: #FFF;
        }
    }
    .burguer {
        z-index: 10000;
        @media(min-width: 768px) {
            display: none;
        }
    }
`

const BgDiv = styled.div`
    position: absolute;
    background-color: #333;
    width: 100%;
    height: 100%;
    top: -700px;
    left: -2000px;
    transition: all .6s ease;
    box-shadow: 0 0 15px #444;
    &.active {
        border-radius: 0 0 50% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`