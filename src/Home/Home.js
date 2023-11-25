import React, { useEffect, useState, } from "react";
const API_PATH = process.env.REACT_APP_API_PATH;

const Home = () => {
    const [allWebsites, setAllWebsites] = useState([]);

    
        const updateActStatus = async (x) => {
            try {
                await fetch(`${API_PATH}/active-website/${x}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        isActive: true,
                    }),
                    headers: {
                        'Content-type': 'Application/json',
                    },
                })
            } catch (error) {
                console.log(error);
            }
        }
    
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
    };
    useEffect(() => {
        fetchWebsites();
    }, [])

    return (
        <>
            <h2>Home Page hai bhai</h2>
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
                        <th></th>
                        <th>Active Status</th>
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

                            <td>

                                <button onClick={() => updateActStatus(website._id)} >Activate</button>
                            </td>
                            <td>{website.isActive?"True":"False"}</td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Home;