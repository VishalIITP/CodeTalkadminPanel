import React, { useEffect, useState,  } from "react";
import { useNavigate } from "react-router-dom";
const API_PATH = process.env.REACT_APP_API_PATH;

const AllWebsites = () => {
    const navigate=useNavigate();

    const [allWebsites, setAllWebsites] = useState([]);

    const fetchWebsites = async () => {
        try {
            let response = await fetch(`${API_PATH}/allwebsites`, {
                method: 'GET',
                headers: {
                    'content-type': 'Application/json',
                }
            });
            if (response.ok) {
                console.log("All websites fetched successfully", response);
                const data = await response.json();
                setAllWebsites(data);
                console.log(allWebsites);
            }
            else {
                console.log("response was not ok", response);
            }
        } catch (error) {
            console.log(error);
        }
    }
  


    const deleteWebsite = async (x) => {
        try {
            let delresponse = await fetch(`${API_PATH}/deleteWebD`, {
                method: 'DELETE',
                body: JSON.stringify({
                    websiteName: x,
                }),
                headers: {
                    'content-type': 'Application/json',
                },
            })
            if (delresponse.ok) {
                console.log("Delete request sent successfully");
            }
            else {
                console.log("Response was no ok");
            }
        } catch (error) {
            console.log(error);
        }
    }
    
   useEffect(()=>{
    fetchWebsites();
   },[])
    return (
        <>
            <h3>Websites on this platform</h3>
            <button onClick={fetchWebsites}>Fetch Websites</button>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Website Name</th>
                        <th>HeroT1U</th>
                        <th>HeroT1D</th>
                        <th>HeroT2U</th>
                        <th>HeroT2D</th>
                        <th>date</th>
                        <th>time</th>
                        <th>Disc. Price</th>
                        <th>Price</th>
                        <th>Timer (in sec)</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allWebsites.map((website, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{website.websiteName}</td>
                            <td>{website.heroT1U}</td>
                            <td>{website.heroT1D}</td>
                            <td>{website.heroT2U}</td>
                            <td>{website.heroT2D}</td>
                            <td>{website.date}</td>
                            <td>{website.time}</td>
                            <td>{website.price}</td>
                            <td>{website.strikePrice}</td>
                            <td>{website.timer}</td>
                            <td>
                                <button onClick={()=>navigate(`/update-website/${website._id}`)}>Update</button>
                            </td>
                            <td>
                                <button onClick={() => deleteWebsite(website.websiteName)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default AllWebsites;