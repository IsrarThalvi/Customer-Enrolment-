import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import CustomModel from './CustomModel';

const Customerinterface = () => {
    const [avatarImage, setAvatarImage] = useState(null);


    const handleAvatarClick = () => {
        // Logic to handle avatar click
    };

    // const handleAddCustomer = () => {
    //     // Logic to add a new customer
    //     const newCustomer = {
    //         id: customerId,
    //         name: customerName,
    //         email: customerEmail
    //     };
    //     console.log('New Customer:', newCustomer);
    // You can further process the new customer data here, such as sending it to a backend server or updating state in your application
    // setIsModalOpen(false);
    // Close the modal after adding the customer


return (
    <Stack direction='row' alignItems="center">
        <Paper sx={{ width: 200, height: 700, bgcolor: '#009688' }}></Paper>
        <Grid display="flex" direction="column">
            <Typography variant='h2' sx={{ width: 300, height: 100 }} >Customer</Typography>
            <Paper sx={{ width: 1300, height: 600, bgcolor: 'whitesmoke' }}>

                <Stack display= 'flex' direction='row' bgcolor='green' marginLeft='4'
                sx={{marginLeft:15, marginRight:25, marginTop:16}} >
               
               
                <Typography
          variant='h4'
          sx={{
            width: 270,
            height: 100,
            marginBottom:-6,
            marginTop:1,
            marginLeft:9
          }}>
          Customer ID
        </Typography>     

        <Typography
          variant='h4'
          sx={{
            width: 320,
            height: 100,
            marginBottom:-6,
            marginTop:1
          }}>
          Customer Name
        </Typography>

        <Typography
          variant='h4'
          sx={{
            width: 320,
            height: 100,
            marginBottom:-6,
            marginTop:1
          }}>
           Email
        </Typography>


                </Stack>
                {/* <Grid>
                    <Button onClick={() => setIsModalOpen(true)}
                        variant='contained'
                        size='large'
                        startIcon={<AddIcon />}
                        sx={{
                            bgcolor: '#009688',
                            marginTop: 5,
                            marginLeft: 5,
                            color: 'white',
                            width: 200,
                            height: 60,

                        }}>
                        New Customer</Button>
                </Grid> */}

                <Avatar
                    alt="User Avatar"
                    src={avatarImage}
                    sx={{ width: 100, height: 100, bgcolor: deepPurple[500] }} />

                <Button onClick={handleAvatarClick} sx={{ borderRadius: '60%' }}>
                </Button>

            </Paper>
        </Grid>

{/* <CustomModel/> */}
        {/* Modal for adding new customer */}
        {/* <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}> */}
            {/* <Paper sx={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)', padding: '20px', minWidth: '300px'
            }}> */}
                {/* <Typography variant="h5" gutterBottom sx={{ bgcolor: '#009688', borderRadius: '4' }}>Add New Customer</Typography>
                <Stack direction='column' >
                    <TextField
                        label="Customer ID"
                        variant="outlined"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Customer Name"
                        variant="outlined"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Customer Email"
                        variant="outlined"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />

                    <Button onClick={handleAddCustomer}
                        variant="contained" color="primary">Add Customer</Button>
                </Stack> */}
            {/* </Paper> */}
        {/* </Modal> */}
    </Stack>
)
}


export default Customerinterface