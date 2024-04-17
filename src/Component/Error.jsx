import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <img src='./404.png' alt='error' style={{ width: '200px', marginBottom: '20px' }} />
                <h4>404 Error - Page Not Found</h4>
                <Button onClick={() => navigate("/")} variant="contained" color="primary">Redirect to Login Page</Button>
            </div>
        </div>
    );
}

export default Error;
