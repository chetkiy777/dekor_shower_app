import React from 'react';
import logo from '../assets/img/dekorLogo.png'
import {Box, Container, Typography} from "@material-ui/core";

const Header = () => {
    return (
        <Container sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", mt: 2,pb:2, borderBottom:'2px solid black'}}>
            <Box component='img' sx={{height:'80px',width:'80px'}} alt='logo' src={logo}></Box>
            <Typography component='span' variant="h6" >www.dekor.ua</Typography>
        </Container>
    );
};

export default Header;