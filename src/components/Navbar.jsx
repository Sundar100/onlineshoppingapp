import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from '../components'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AuthenticationService from './AuthenticationService';

const Navbar = () => {

    const isLoggedIn = AuthenticationService.isUserLoggedIn();


    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between', height: { sm: '40px' } }}
        >
            <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#fff', fontSize: '15px', fontWeight: 'bold' }}>OnlineShopingApp</span>
            </Link>

            <SearchBar />
            <Box>
                <Button sx={{ borderRadius: '50%' }}>
                    <span style={{ color: 'white' }}>Cart</span>
                    <span style={{ color: 'Blue', padding: '10px' }}>{<ShoppingCartOutlinedIcon />} <sup>1</sup></span>
                </Button>
                {!isLoggedIn && <Link to='/login'><span style={{ fontSize: '20px', color: '#fff' }}>Login</span></Link>}
                {isLoggedIn && <Link to='/logout' onClick={AuthenticationService.logout}><span style={{ fontSize: '20px', color: '#fff' }}>Logout</span></Link>}
            </Box>

        </Stack>
    )
}

export default Navbar