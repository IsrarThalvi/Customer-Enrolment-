import React, { useState } from 'react';
import { Avatar, Button, Grid, Typography } from '@mui/material';

const File = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleList = {
        display: "flex",
        backgroundColor: "#a5d6a7",
        width: "70%",
        position: "fixed",
        left: "15%",
        top: "35%",
        padding: "10px",
    };

    const handleCustomer = {
        width: "71%",
        position: "fixed",
        left: "15%",
        top: "43%",
        padding: "10px",

    };
    const Container = {
        // display: 'flex',
        // flexDirection: 'row'
        // justifyContant:"space-between"
    }
    const handleNo = {
        position: "fixed",
        left: "16%"
    }
    const handleName = {
        position: "fixed",
        left: "33%"
    }
    const handleEmail = {
        position: "fixed",
        left: "52%"
    }
    const handleActions = {
        position: "relative",
        left: "80%"
    }
    const handleCustomerbox = {
        marginTop: "10px",
        backgroundColor: "white",
        padding: "10px"
    }
    const handleEditbtn = {
        fontSize: "small",
        marginRight: "10px",
        backgroundColor: "#2196f3",
        color: "white",
    };

    const handleDeletebtn = {
        fontSize: "small",
        backgroundColor: "#d50000",
        color: "white",
        marginLeft: "10px",
    };



    return (
        <>
            <Grid style={Container}>
                <Grid style={handleList}>
                    <Typography variant="h6" style={handleNo}>Customer ID</Typography>
                    <Typography variant="h6" style={handleName}>Customer Name</Typography>
                    <Typography variant="h6" style={handleEmail}>Email</Typography>
                    <Typography variant="h6" style={handleActions}>Actions</Typography>
                </Grid>
                <Grid style={handleCustomer}>
                    {props.product.map((item, index) => (
                        <Grid key={index} container alignItems="center" style={handleCustomerbox}>
                            <Grid item xs={2} style={{ display: "flex" }}>
                                <Grid >
                                    <label htmlFor="avatarInput">
                                        <Avatar alt="Avatar" src={selectedImage ? selectedImage : ''} style={{ cursor: 'pointer' }} />
                                    </label>
                                    <input
                                        id="avatarInput"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleImageChange}
                                    />
                                </Grid>
                                <Typography style={{ marginTop: "6%", marginLeft: "8%" }}>{index + 1}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>{item.name}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>{item.email}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="outlined" style={handleEditbtn} onClick={() => props.handleEdit(index)}>Edit</Button>
                                <Button variant="outlined" style={handleDeletebtn} onClick={() => props.handleDelete(index)}>Delete</Button>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid >
        </>
    );
};

export default File;
