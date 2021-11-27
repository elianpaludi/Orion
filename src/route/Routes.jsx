import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';

import Landing from '../pages/Landing.jsx'
import Marketplace from '../pages/Marketplace.jsx'
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx'
import Wallet from '../pages/Wallet.jsx'
import Create from '../pages/Create.jsx'

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route exacth path="/" element={<Landing/>}/>
            </Routes>
            <Routes>
                <Route exacth path="/marketplace" element={<Marketplace/>}/>
            </Routes>
            <Routes>
                <Route exacth path="/register" element={<Register/>}/>
            </Routes>
            <Routes>
                <Route exacth path="/login" element={<Login/>}/>
            </Routes>
            <Routes>
                <Route exacth path="/wallet" element={<Wallet/>}/>
            </Routes>
            <Routes>
                <Route exacth path="/create" element={<Create/>}/>
            </Routes>
        </Router>
    )
}

export default routes
