import React from "react";
import { Navbar, Register } from "./";
import { Routes, Route } from "react-router-dom"

const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <Routes>
                <Route path='/users/register' element={<Register />}/>
            
            </Routes>
        </div>
    )
}

export default Main