import React from "react";
import './Navbar.model.css'
import { Link, Route, Routes } from "react-router-dom";
import Home from "../../Home/Home";
import Analytics from "../../Home/Analytics/Analytics";
import Design from "../../Home/Design/Design";
import UpdateWeb from "../../Home/Design/UpdateWeb/UpdateWeb";

const Navbar = () => {


    return (
        <>
            <div className="navBox">
                <Link to={'/'}><span className="navItems">Home</span></Link>
                <Link to={'/Analytics'}><span className="navItems">Analytics</span></Link>
                <Link to={'/Design'}><span className="navItems">Design</span></Link>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Analytics" element={<Analytics />} />
                <Route path="/Design" element={<Design />} />
                <Route path="/update-website/:slug" element={<UpdateWeb/>} />


            </Routes>

        </>
    );
}

export default Navbar;