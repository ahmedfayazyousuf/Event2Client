import React from 'react';
import Logo2 from '../images/Logo2.png';
import thankyou from '../images/thankyou.png';
import { Link } from "react-router-dom";

const Thankyou = () => { 


    return (
        <>
            <div className="form-body">
                <div className="form-holder">
                            <div className="form-items">

                                <form>
                                    <div class="container" className="profilepanel">
                                                
                                                
                                                <img src={thankyou} alt="Logo" 
                                                    style={{
                                                        height: '90px',
                                                        width: '200px',
                                                        marginBottom: '100px',
                                                        marginTop: '100px',
                                                    }}
                                                />  

                                                    <br></br>
                                                    <div
                                style={{
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                }}>
                                    <Link to="/">
                                        <button 
                                        style={{
                                            paddingRight: '55px',
                                            paddingLeft: '55px',
                                            padding: '10px',
                                            marginTop: '20px',
                                            backgroundColor: 'white',
                                            fontWeight: '1000',
                                        }}>
                                            RETURN
                                        </button>
                                    </Link>
                                </div>

                                                <img src={Logo2} alt="Logo" 
                                                    style={{
                                                        height: '40.5px',
                                                        width: '250px',
                                                        marginBottom: '100px',
                                                        marginTop: '200px',
                                                    }}
                                                />
                                    </div>
                                </form>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Thankyou