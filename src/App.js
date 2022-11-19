import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, ProductsPage, LoginPage, RegisterPage, LogoutPage, ErrorPage } from './components'
import withNavigation from './components/withNavigation'

const App = () => {
    const NavbarWithNavigation = withNavigation(Navbar);

    return (
        <Router>
            <Box sx={{ backgroundColor: 'white' }}>
                <NavbarWithNavigation />
                <Routes>
                    <Route path='/' exact element={<LoginPage />} />
                    <Route path='/products' element={<ProductsPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/logout' element={<LogoutPage />} />
                    <Route path='/*' element={<ErrorPage />} />
                </Routes>
            </Box>
        </Router>
    )
}

export default App