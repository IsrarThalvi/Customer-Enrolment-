// import * as React from 'react';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { deepOrange, green, blue, deepPurple, blueGrey, lightGreen, red } from '@mui/material/colors';
// import {Button,input,IconButton} from '@mui/material';
// import {PhotoCamera} from '@mui/material';
// import Stack from '@mui/material/Stack';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Autocomplete, Button, Grid, Icon, Modal, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';

const UserInterface = () => {
  const [avatarImage, setAvatarImage] = useState(null);
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [customers, setCustomers] = useState([
    // { id: '001', name: 'John Doe', email: 'johndoe@example.com' },

    // Add more customers as needed
  ]);
  const handleOpenModal = {
    position:"relative",
    top:"5%",
    left:"1%",
    fontSize:"large",
    padding:"5px",
    backgroundColor:"#004d40",
    startIcon:<AddIcon />
      };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const handleAvatarClick = () => {
    document.getElementById('upload-image').click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarImage(reader.result);
      }
      reader.readAsDataURL(file);
    }
  }
  const handleAddCustomer = () =>{
      // Create a new customer object
    const newCustomer = {
      Image: avatarImage,
      name: customerName,
      email: customerEmail,
    };
    setCustomers([...customers, newCustomer]);
   // Clear the input fields and close the modal
   setAvatarImage('');
   setCustomerName('');
   setCustomerEmail('');
   // Close the modal after adding the customer
   setIsModalOpen(false); 
  }



  
  // const UploadComponent = () => {
  // const [file, setFile] = useState(null);

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const handleUpload = () => {
  //   // Here you can upload the file using an API or process it further
  //   console.log('File uploaded:', file);
  // };

  return (
    <Stack direction='row' alignItems="center">
      <Paper
        sx={{
          width: 200,
          height: 700,
          bgcolor: '#009688'
        }}>
      </Paper>
      <Grid
        display="flex"
        direction="column">
        <Typography
          variant='h2'
          sx={{
            width: 300,
            height: 100
          }}>
          Customerss
        </Typography>
        <Paper
          sx={{
            width: 1300,
            height: 600,
            bgcolor: 'whitesmoke'
          }}>



          <Stack spacing={4} direction='row'>
            <Button onClick={() => setIsModalOpen(true)}
              variant='contained'
              style={handleOpenModal}>
              New Customer
            </Button>
            {/* Button variant="contained" onClick={() => setIsModalOpen(true)} style={handleclickbutton}>New Customer</Button> */}
               {/* Display entered values    */}
          {customers.map((customer, index) => (
            <Paper key={index} sx={{ p: 2, mt: 2,
              direction:'column',
              position: 'absolute', top: '55%', left: '20%',
              transform: 'translate(-50%, -50%)', p: 4, minWidth: 30,
              bgcolor:'green'
            }}>
              <Stack  display='flex' direction='row' marginLeft='3' marginTop='90'>
              <Typography marginInline='50%' variant ="h6"> {index + 1} </Typography>
              {/* <Typography marginInline= '50%' variant="body1"> {customer.id}</Typography> */}
              <Avatar src={customer.avatar} sx={{ width: 50, height: 50 }} />
              <Typography marginInline= '50%' variant="body1"> {customer.name}</Typography>
              <Typography marginInline= '50%' variant="body1"> {customer.email}</Typography>
              </Stack>
            </Paper>
          ))}
          </Stack>

          <Stack display='flex' direction='row' bgcolor='green' marginLeft='4'
            sx={{ marginLeft: 15, marginRight: 25, marginTop: 16 }} >


            <Typography
              variant='h4'
              sx={{
                width: 270,
                height: 100,
                marginBottom: -6,
                marginTop: 1,
                marginLeft: 9
              }}>
              Customer ID
            </Typography>

            <Typography
              variant='h4'
              sx={{
                width: 320,
                height: 100,
                marginBottom: -6,
                marginTop: 1
              }}>
              Customer Name
            </Typography>

            <Typography
              variant='h4'
              sx={{
                width: 320,
                height: 100,
                marginBottom: -6,
                marginTop: 1
              }}>
              Email
            </Typography>


          </Stack>

          {/* <Avatar
            alt="User Avatar"
            src={avatarImage}
            sx={{
              width: 100,
              height: 100,
              marginTop: 10,
              marginLeft: 10,
              bgcolor: deepPurple[500]
            }} /> */}
          <Button onClick={
            handleFileChange}
            sx={{ borderRadius: '60%' }}
          >
          </Button>
          <Modal open={isModalOpen} onClose={handleCloseModal}>
            <Paper sx={{
              direction:'column',
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)', p: 4, minWidth: 300
            }}>
              <Typography variant="h5" gutterBottom sx={{ bgcolor: '#009688', borderRadius: '2' }}>Add New Customer</Typography>


  
              {/* Modal for adding new customer */}

              <Stack direction='column'>
              

              <input
            id="upload-image"
            type="file"
            onChange={handleFileChange}
            inputProps={{ accept: 'image/*' }}
            style={{ display: 'none' }}
          />
          {avatarImage && <Avatar src={avatarImage} sx={{ width: 100, height: 100 }} />}
          <Button onClick={
            handleAvatarClick}
            sx={{ borderRadius: '60%' }}
          />
              <TextField
                label='Customer Name'
                variant='outlined'
                value={customerName}
                margin='normal'
                type='text'
                onChange={(e) => setCustomerName(e.target.value)}
                InputLabelProps={{}}
              />
              <TextField
                label='Customer Email'
                variant='outlined'
                value={customerEmail}
                margin='normal'
                onChange={(e) => setCustomerEmail(e.target.value)}
                InputLabelProps={{}}
              />
              {/* <TextField label="Customer Email" variant="outlined"  margin="normal" /> */}
              </Stack>
              
     
     
              <Button onClick={handleAddCustomer} variant='contained' color="primary">
                Add new customer
              </Button>

              </Paper>
          </Modal>
        </Paper>
      </Grid>
      <Grid>






        {/* <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
            onClick={() => {
              document.getElementById('upload-image').click();

            }}>
            <PhotoCamera />
          </IconButton>
          <input
            id="upload-image"
            type="file"
            onChange={handleFileChange}
            inputProps={{ accept: 'image/*' }}
            style={{ display: 'none' }}
          />

          <Button
            onClick={handleUpload}
            disabled={!file}
            variant="contained">upload
          </Button> */}


      </Grid>


    </Stack>
  )
}
// }
export default UserInterface