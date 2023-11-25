import React, { useEffect } from 'react'
import './Allstuds.model.css'
// import styles from './Allstuds.model.css'

const API_PATH = process.env.REACT_APP_API_PATH;


const Allstuds = () => {
    const [allStuds, setAllStuds] = React.useState([]);

    const fetchNow = async () => {
        try {
            let response = await fetch(`${API_PATH}/admin/allStudents/`, {
                method: 'GET',

            })
            if (response.ok) {
                console.log("Response was OK",);
                const data = await response.json();
                setAllStuds(data);
                console.log(allStuds);
            } else {
                console.log("Error fetching All Students", response);
            }

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchNow();
    }, []);
    return (
        <>
            <div>Students: <button className='FNbutton' onClick={fetchNow}>Fetch Now</button></div>
            {
                allStuds.length>0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>ID</th>
                                <th>Details</th>
                                <th>Contact details</th>
                                <th>VPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allStuds.map((student, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>User Id : {student.UserId}<br />RC: {student.UserRefrralCode}<br />ARC: {student.RefrrelCodeApplied}</td>
                                    <td>Name: {student.FirstName} {student.LastName}<br />College: {student.College}<br/>Mob: {student.Phone}</td>
                                    <td>{student.Email}<br/>{student.Time.replace('GMT+0530 (India Standard Time)', ' ')}</td>
                                    <td>{student.VPA}<br />{student.PTime.replace('GMT+0530 (India Standard Time)', ' ')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (<div>Jai Shree Ram</div>)
            }
        </>
    )
}

export default Allstuds;
