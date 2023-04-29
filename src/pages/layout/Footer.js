import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '45px',
            background: '#333',
            position: 'fixed',
            bottom: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography textAlign={'center'} component={'span'} color={'white'}>Carlos David Garcia Lopez</Typography>
        </Box>
    )
}

export default Footer