import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import './css/Index.css'
import { ThemeProvider } from './context/Themecontext';

const App = () => {
    return (
        <>
            <ThemeProvider>
                <Header />
                <Outlet />
                <Footer />
            </ThemeProvider>
        </>
    )
}
export default App