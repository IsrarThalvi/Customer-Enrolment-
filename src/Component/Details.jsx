import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const [logindata, setlogindata] = useState([]);
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        birthday()
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const birthday = () => {
        const getuser = localStorage.getItem("userYoutube");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setlogindata(user);
            setTimeout(() => {
                handleShow();
            }, 3000);
        }
    }

    const logout = () => {
        navigate("/");
    }

    return (
        <div>
            {logindata.length === 0 ? "error" :
                <>
                    <h1 style={{textAlign:"center"}}>WELLCOME Your Detail Page Is Here: {logindata[0].name}</h1>
                    <h1 style={{textAlign:"center"}}>Name: {logindata[0].name}</h1>
                    <h1 style={{textAlign:"center"}}>Email: {logindata[0].email}</h1>
                    <h1 style={{textAlign:"center"}}>Password: {logindata[0].password   }</h1>
                    <Button onClick={logout} variant="contained" color="primary" style={{position:"relative",left:"47%"}}>Log Out</Button>
                        <Modal open={show} onClose={handleClose} style={{position:"fixed",left:"30%",width:"30%"}}>
                            <div style={{ backgroundColor: 'white', padding: '20px' }}>
                                <h2 style={{textAlign:"center"}}>{logindata[0].name}</h2>
                                <p>Wish you many many happy returns of the day!</p>
                                <Button onClick={handleClose} variant="contained" color="primary" style={{position:"relative",left:"40%"}}>Close</Button>
                            </div>
                        </Modal>
                    
                </>
            }
        </div>
    )
}

export default Details;
