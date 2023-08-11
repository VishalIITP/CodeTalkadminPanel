import React, { useEffect } from 'react'
import './Allfeeds.model.css'
// import styles from './Allfeeds.model.css'


const API_PATH = process.env.REACT_APP_API_PATH

const Allfeeds = () => {
    const [allFeed, setAllFeed] = React.useState([]);

    const fetchallfeeds = async () => {
        try {
            const response = await fetch(`${API_PATH}/allFeedbacks`, {
                method: 'GET'
            })
            if (response.ok) {
                console.log("Response was Ok");
                const data = await response.json();
                setAllFeed(data);
                console.log(data);
            } else {
                console.log("Response wan not Ok");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchallfeeds();
    },[]);

    return (
        <>
            <div><button onClick={fetchallfeeds}>Fetch Now</button></div>
            {
                allFeed.length ? (
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Details</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allFeed.map((feed, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>Name: {feed.Name} <br />College: {feed.College}</td>
                                    <td>{feed.Feedback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (<div>Jai Shri Ram</div>)
            }
        </>
    )
}

export default Allfeeds