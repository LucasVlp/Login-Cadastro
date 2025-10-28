import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Cadastro from "../views/Cadastro";
import Login from "../views/Login";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                
            </Routes>
        </Router>
    )
}