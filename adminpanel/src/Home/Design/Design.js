import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import './Design.model.css'
import AllWebsites from "./AllWebsites/AllWebsites";
import UpdateWeb from "./UpdateWeb/UpdateWeb";
const API_PATH = process.env.REACT_APP_API_PATH;

const Design = () => {
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
  const [wthc1, setWthc1] = useState('');
  const [wthc2, setWthc2] = useState('');
  const [wttp, setWttp] = useState('');
  const [wtdp1h, setWtdp1h] = useState('');
  const [wtdp1c, setWtdp1c] = useState('');
  const [wtdp2h, setWtdp2h] = useState('');
  const [wtdp2c, setWtdp2c] = useState('');
  const [wtdp3h, setWtdp3h] = useState('');
  const [wtdp3c, setWtdp3c] = useState('');
  const [wtdp4h, setWtdp4h] = useState('');
  const [wtdp4c, setWtdp4c] = useState('');
  const [wtdp5h, setWtdp5h] = useState('');
  const [wtdp5c, setWtdp5c] = useState('');
  const [wtdp6h, setWtdp6h] = useState('');
  const [wtdp6c, setWtdp6c] = useState('');



  // const [timer, setTimer] = useState('');
  // const [timer, setTimer] = useState('');
  // const [timer, setTimer] = useState('');
  // const [timer, setTimer] = useState('');
  // const [timer, setTimer] = useState('');

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
  const handleWthc1Change = (e) => {
    setWthc1(e.target.value);
  }
  const handleWthc2Change = (e) => {
    setWthc2(e.target.value);
  }
  const handleWttpChange = (e) => {
    setWttp(e.target.value);
  }
  const handleWtdp1hChange = (e) => {
    setWtdp1h(e.target.value);
  }
  const handleWtdp1cChange = (e) => {
    setWtdp1c(e.target.value);
  }
  const handleWtdp2hChange = (e) => {
    setWtdp2h(e.target.value);
  }
  const handleWtdp2cChange = (e) => {
    setWtdp2c(e.target.value);
  }
  const handleWtdp3hChange = (e) => {
    setWtdp3h(e.target.value);
  }
  const handleWtdp3cChange = (e) => {
    setWtdp3c(e.target.value);
  }
  const handleWtdp4hChange = (e) => {
    setWtdp4h(e.target.value);
  }
  const handleWtdp4cChange = (e) => {
    setWtdp4c(e.target.value);
  }
  const handleWtdp5hChange = (e) => {
    setWtdp5h(e.target.value);
  }
  const handleWtdp5cChange = (e) => {
    setWtdp5c(e.target.value);
  }
  const handleWtdp6hChange = (e) => {
    setWtdp6h(e.target.value);
  }
  const handleWtdp6cChange = (e) => {
    setWtdp6c(e.target.value);
  }




  const handleNWsubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${API_PATH}/design`, {
        method: 'POST',
        body: JSON.stringify({
          websiteName: newWeb,
          heroT1U: heroT1U,
          heroT1D: heroT1D,
          heroT2U: heroT2U,
          heroT2D: heroT2D,
          date: date,
          time: time,
          price: price,
          strikePrice: strikePrice,
          timer: timer,
          wthc1: wthc1,
          wthc2: wthc2,
          wttp:wttp,
          Wtdp1h: wtdp1h,
          wtdp1c: wtdp1c,
          Wtdp2h: wtdp2h,
          wtdp2c: wtdp2c,
          Wtdp3h: wtdp3h,
          wtdp3c: wtdp3c,
          Wtdp4h: wtdp4h,
          wtdp4c: wtdp4c,
          Wtdp5h: wtdp5h,
          wtdp5c: wtdp5c,
          Wtdp6h: wtdp6h,
          wtdp6c: wtdp6c,
        }),
        headers: {
          'content-type': 'Application/json'
        },
      });
      if (response.ok) {
        console.log('New website data added successfully', response);
      }
      else {
        console.log("Response was not Ok", response);
      }
    } catch (error) {
      console.log("Not able to post", error);
    }
  }



  return (
    <>
      <AllWebsites />

      <h3>Add New Website Design</h3>

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
          <input className='fiinput' id='heroT1' value={time} onChange={handleTimeChange}></input>
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
        <div>
          <div><br />What's there in the bootcamp overview</div>
          <br />
          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Heading colour1(white)</label>
            <input className='fiinput' id='wthc1' value={wthc1} onChange={handleWthc1Change}></input>
          </div>
          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Heading colour2(green)</label>
            <input className='fiinput' id='wthc2' value={wthc2} onChange={handleWthc2Change}></input>
          </div>
          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Time period(ex. 4 week bootcamp)</label>
            <input className='fiinput' id='heroT1' value={wttp} onChange={handleWttpChange}></input>
          </div><br />

          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 1 heading</label>
            <input className='fiinput' id='heroT1' value={wtdp1h} onChange={handleWtdp1hChange}></input>
          </div>          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 1 content</label>
            <input className='fiinput' id='heroT1' value={wtdp1c} onChange={handleWtdp1cChange}></input>
          </div><br />
          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 2 heading</label>
            <input className='fiinput' id='heroT1' value={wtdp2h} onChange={handleWtdp2hChange}></input>
          </div>          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 2 content</label>
            <input className='fiinput' id='heroT1' value={wtdp2c} onChange={handleWtdp2cChange}></input>
          </div><br />
          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 3 heading</label>
            <input className='fiinput' id='heroT1' value={wtdp3h} onChange={handleWtdp3hChange}></input>
          </div>
          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 3 content</label>
            <input className='fiinput' id='heroT1' value={wtdp3c} onChange={handleWtdp3cChange}></input>
          </div><br />
          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 4 heading</label>
            <input className='fiinput' id='heroT1' value={wtdp4h} onChange={handleWtdp4hChange}></input>
          </div>          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 4 content</label>
            <input className='fiinput' id='heroT1' value={wtdp4c} onChange={handleWtdp4cChange}></input>
          </div><br />
          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 5 heading</label>
            <input className='fiinput' id='heroT1' value={wtdp5h} onChange={handleWtdp5hChange}></input>
          </div>          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 5 content</label>
            <input className='fiinput' id='heroT1' value={wtdp5c} onChange={handleWtdp5cChange}></input>
          </div><br />
          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 6 heading</label>
            <input className='fiinput' id='heroT1' value={wtdp6h} onChange={handleWtdp6hChange}></input>
          </div>          <div className='fibox'>
            <label className='filabel' htmlFor='fname'>Dis. Point 6 content</label>
            <input className='fiinput' id='heroT1' value={wtdp6c} onChange={handleWtdp6cChange}></input>
          </div>
        </div>

        <div className="nwebsubmit">
          <button className="nwSB" onClick={handleNWsubmit}>Add Design</button>
        </div>
      </div >

    </>
  )
}

export default Design;