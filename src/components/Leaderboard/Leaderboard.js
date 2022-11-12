import React from 'react';
import Logo1 from '../images/Logo1.png';

import { useEffect } from 'react';
import { useState } from 'react';

const Profile = () => {



    const [data, setData] = useState([
        {
            timetake:0,
            _id:0,
            name:""
        },
        {
            timetake:0,
            _id:0,
            name:""
        },
        {
            timetake:0,
            _id:0,
            name:""
        },
        {
            timetake:0,
            _id:0,
            name:""
        },
        {
            timetake:0,
            _id:0,
            name:""
        },
        {
            timetake:0,
            _id:0,
            name:""
        },
        {
            timetake:0,
            _id:0,
            name:""
        },
        {
            timetake:0,
            _id:0,
            name:""
        },
        {
            timetake:0,
            _id:0,
            name:""
        },
        {
            timetake:0,
            _id:0,
            name:""
        }
    ]);

    const GetData = async () => {
        //object destruction so dont need to write user.name etc again and again

        
        const res = await fetch(`https://sailgp2server.herokuapp.com/api/getAll`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json();

        
        setData(data);
        console.log(data)

        if(data.status === 422 || !data) {
            
            console.log("Invalid Credentials - If error persists, contact admin");
        } else {
           
            console.log("Registration Successful! Welcome Aboard!");

            // history("/login");
        }

    }

    useEffect(()=>{
        GetData();
    },[])



    

    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items" >
                            <div
                                style={{
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                }}>
                                    <img src={Logo1} alt="Logo" 
                                    style={{
                                        width: '100%',  
                                        marginBottom: '5%',
                                        marginTop: '5%'
                                    }}
                                    />
                                </div>
                                <form method="POST" id="register-form" className="requires-validation" noValidate>


                                <table class="table"
                                style={{
                                    color: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '20px',
                                    textAlign: 'center'
                                }}>
                                    <tr
                                    style={{
                                        marginTop: '20px',
                                    }}>
                                        <td style={{
                                            fontWeight: '700',
                                            fontSize: "4vh"
                                        }}>
                                            NAME 
                                            
                                        </td>


                                        <td style={{
                                            fontWeight: '700',
                                            fontSize: "4vh",
                                            paddingLeft:'55px',
                                        }}>
                                            SCORE
                                        </td>
                                    </tr>

                                    {
                                        data.map(d =>{
                                            return(
                                                <tr>
                                        <td style={{
                                            fontSize: "4vh",
                                        }}>{d.name}</td>
                                        <td style={{
                                            fontSize: "4vh",
                                            paddingLeft:'55px',
                                        }}>{d.timetaken}</td>
                                        </tr>
                                            )
                                        })
                                    }


                                </table>

                        

                                

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile