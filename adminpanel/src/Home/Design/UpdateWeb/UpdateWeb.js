import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './UpdateWeb.model.css'

const API_PATH = process.env.REACT_APP_API_PATH;

const UpdateWeb = () => {
    const navigate=useNavigate();
    const [design, setDesign] = useState([]);
    const [newWeb, setNewWeb] = useState('');
    const [heroT1U, setHeroT1U] = useState('');
    const [heroT1D, setHeroT1D] = useState('');
    const [heroT2U, setHeroT2U] = useState('');
    const [heroT2D, setHeroT2D] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    const [strikePrice, setStrikePrice] = useState('');
    const [timer, setTimer] = useState('');

    const { slug } = useParams();
    const fetchWfUpdate = async () => {
        try {
            let response = await fetch(`${API_PATH}/update-website/${slug}`)
            if (response.ok) {
                console.log("Fetched website design by id");
                const data = await response.json();
                return data;
            }
            else {
                console.log("Website with given id not available");
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    useEffect(() => {
        const setdata = async () => {
            try {
                let data = await fetchWfUpdate();
                if (data) {
                    // Update the state with the fetched data
                    setDesign(data);
                    setNewWeb(data.websiteName);
                    setHeroT1U(data.heroT1U);
                    setHeroT1D(data.heroT1D);
                    setHeroT2U(data.heroT2U);
                    setHeroT2D(data.heroT2D);
                    setDate(data.date);
                    setTime(data.time);
                    setPrice(data.price);
                    setStrikePrice(data.strikePrice);
                    setTimer(data.timer);
                } else {
                    console.log("No data");
                }
            } catch (error) {
                console.error("Error fetching and setting data:", error);
            }
        }

        setdata(); // Call the setdata function to initiate the API request and state updates
    }, []);


    const handleNewWebChange = (e) => {
        setNewWeb(e.target.value);
    }
    const handleHT1UChange = (e) => {
        setHeroT1U(e.target.value);
    }
    const handleHT1DChange = (e) => {
        setHeroT1D(e.target.value);
    }
    const handleHT2UChange = (e) => {
        setHeroT2U(e.target.value);
    }
    const handleHT2DChange = (e) => {
        setHeroT2D(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handleStrikePriceChange = (e) => {
        setStrikePrice(e.target.value);
    }
    const handleTimerChange = (e) => {
        setTimer(e.target.value);
    }


    const handleNWsubmit = async (e) => {
        e.preventDefault();
        navigate('/design');
        try {
            let response = await fetch(`${API_PATH}/update-website/${slug}`, {
                method: 'PUT',
                body: JSON.stringify({
                    websiteName: newWeb,
                    heroT1U: heroT1U,
                    heroT1D: heroT1D,
                    heroT2U: heroT2U,
                    heroT2D: heroT2D,
                    date:date,
                    time: time,
                    price: price,
                    strikePrice:strikePrice,
                    timer:timer,
                }),
                headers: {
                    'content-type': 'Application/json'
                },
            });
            if (response.ok) {
                console.log('Website updated successfully', response);
            }
            else {
                console.log("Response was not Ok", response);
            }
        } catch (error) {
            console.log("Not able to Update the website", error);
        }
    }

    return (
        <>
            <div className="updateBox">
                <h3>Update Website </h3>
                <div className="designForm">
                    <div className='fibox'>
                        <label className='filabel' htmlFor='newweb'>Web Site Name</label>
                        <input className='fiinput' id='newweb' value={newWeb} onChange={handleNewWebChange}></input>
                    </div>
                    <div className='fibox'>
                        <label className='filabel' htmlFor='heroT1U'>Hero Text 1 Up</label>
                        <input className='fiinput' id='heroT1U' value={heroT1U} onChange={handleHT1UChange}></input>
                    </div>
                    <div className='fibox'>
                        <label className='filabel' htmlFor='heroT2'>Hero Text 1 Down</label>
                        <input className='fiinput' id='heroT2' value={heroT1D} onChange={handleHT1DChange}></input>
                    </div>
                    <div className='fibox'>
                        <label className='filabel' htmlFor='heroT3'>Hero Text 2 Up</label>
                        <input className='fiinput' id='heroT3' value={heroT2U} onChange={handleHT2UChange}></input>
                    </div>
                    <div className='fibox'>
                        <label className='filabel' htmlFor='fname'>Hero Text 2 Down</label>
                        <input className='fiinput' id='heroT1' value={heroT2D} onChange={handleHT2DChange}></input>
                    </div>
                    <div className='fibox'>
                        <label className='filabel' htmlFor='fname'>Date</label>
                        <input className='fiinput' id='date' value={date} onChange={handleDateChange}></input>
                    </div>
                    <div className='fibox'>
                        <label className='filabel' htmlFor='fname'>Time</label>
                        <input className='fiinput' id='time' value={time} onChange={handleTimeChange}></input>
                    </div>
                    <div className='fibox'>
                        <label className='filabel' htmlFor='fname'>Price</label>
                        <input className='fiinput' id='price' value={price} onChange={handlePriceChange}></input>
                    </div>
                    <div className='fibox'>
                        <label className='filabel' htmlFor='fname'>Strike Price</label>
                        <input className='fiinput' id='strikePrice' value={strikePrice} onChange={handleStrikePriceChange}></input>
                    </div>
                    <div className='fibox'>
                        <label className='filabel' htmlFor='fname'>Timer (in sec)</label>
                        <input className='fiinput' id='timer' value={timer} onChange={handleTimerChange}></input>
                    </div>
                    <div className="nwebsubmit">
                        <button className="nwSB" onClick={handleNWsubmit}>Update</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default UpdateWeb;