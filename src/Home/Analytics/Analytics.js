import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../Analytics/Analytics.model.css'

import Navbar from "../../Components/Navbar/Navbar";
import Allstuds from "../../Components/Allstudents/Allstuds";
import Allfeeds from "../../Components/Allfeedbacks/Allfeeds";

const Analytics = () => {

    const [showStuds, setShowStuds]=useState(true);
    const ToggleSS=()=>{
        setShowStuds(!showStuds);
    }

    return (
        <>
        <h3>Analytics</h3>
            <button className="SFtoggle" onClick={ToggleSS}>{showStuds?"Show Feedbacks":"Show Students"}</button>
            {showStuds ?<Allstuds/>:<Allfeeds/> }
            
 

        </>
    )
}

export default Analytics ;