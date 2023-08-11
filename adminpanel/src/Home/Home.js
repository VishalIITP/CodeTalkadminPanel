import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Allstuds from "../Components/Allstudents/Allstuds";
import Allfeeds from "../Components/Allfeedbacks/Allfeeds";

const Home = () => {



    return (
        <>
            <h2>Home Page</h2>
            <Link to={'/allStudents'}><button>All Registered Students</button></Link>
            <Link to={'/allFeedbacks'}><button>All feedbacks</button> </Link>
            <Routes>
                <Route path="/allStudents" element={<Allstuds />} />
                <Route path="/allFeedbacks" element={<Allfeeds />} />
            </Routes>


        </>
    )
}

export default Home;