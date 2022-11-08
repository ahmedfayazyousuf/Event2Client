import React from 'react';
import Logo1 from '../images/Logo1.png';
import { useEffect } from 'react';
import { useState } from 'react';

const Leaderboard2 = () => {



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

        
        const res = await fetch(`https://sailgpserver.herokuapp.com/api/getAll`, {
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
                                        height: '65 px',
                                        width: '250px',
                                        marginBottom: '20px',  
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
                                    <tr>
                                        <td style={{
                                            fontWeight: '700',
                                        }}>
                                            NAME 
                                            
                                        </td>


                                        <td style={{
                                            fontWeight: '700',
                                        }}>
                                            TIME SCORE
                                        </td>
                                    </tr>

                                    {
                                        data.map(d =>{
                                            return(
                                                <tr>
                                        <td>{d.name}</td>
                                        <td>{d.timetaken}</td>
                                        </tr>
                                            )
                                        })
                                    }

                                </table>

                        

                                <div
                                style={{
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    marginTop: '40px',
                                }}>
                                    <a href="https://adminsailgp.vercel.app"
                                    style={{
                                        paddingRight: '55px',
                                        paddingLeft: '55px',
                                        padding: '10px',
                                        marginTop: '20px',
                                        backgroundColor: 'white',
                                        fontWeight: '1000',
                                        color: '#061A1B',
                                        textDecoration: 'none',
                                    }}>
                                            RETURN TO ADMIN
                                    </a>
                                </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leaderboard2