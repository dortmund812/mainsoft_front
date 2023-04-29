import { Box, Container } from '@mui/material';
import React, {useEffect, useState} from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = () => {

    const [clicked, setClicked] = useState(false);
    const handleClicked = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <NavBarContent>
                <Box className={`${clicked && 'active'}`}>
                    <NavBar
                        clicked={clicked}
                        setClicked={setClicked}
                        handleClicked={handleClicked}
                    />
                </Box>
            </NavBarContent>
            
            <OutletContainer>
                <Container maxWidth={'xl'} className={`${clicked && 'active'}`}>
                    <Outlet />
                </Container>
            </OutletContainer>

            <FooterContainer>
                <Box className={`${clicked && 'active'}`}>
                    <Footer />
                </Box>
            </FooterContainer>
        </>
    )
}

export default Layout

const NavBarContent = styled.header`
    .active {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 3;
    }
`
const OutletContainer = styled.div`
    max-width: 100%;
    overflow: hidden;
    .active {
        padding-top: 100px;
        z-index: 2;
    }
`

const FooterContainer = styled.div`
    .active {
        z-index: 1;
    }
`