import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import { deepPurple } from '@mui/material/colors';
import { Button, Grid, Modal, Paper, Stack, TextField, Typography } from '@mui/material';

const CustomModel = () => {
  const [avatarImage, setAvatarImage] = useState(null);
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers, setCustomers] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
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
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCustomer = () => {
    const newCustomerData = {
      id: customerId,
      name: customerName,
      email: customerEmail,
    };
    setCustomers([...customers, newCustomerData]);
    setCustomerId('');
    setCustomerName('');
    setCustomerEmail('');
    setIsModalOpen(false);
  };

  return (
    <Stack direction='row' alignItems="center">
      <Paper sx={{ width: 200, height: 700, bgcolor: '#009688' }}></Paper>
      <Grid display="flex" direction="column">
        <Typography variant='h2' sx={{ width: 300, height: 100 }}>Customers</Typography>
        <Paper sx={{ width: 1300, height: 600, bgcolor: 'whitesmoke' }}>
          <Stack spacing={4} direction='row'>
            <Button onClick={handleOpenModal} variant='contained' size='large' startIcon={<AddIcon />} sx={{ bgcolor: '#009688', marginTop: 80, marginLeft: 80, color: 'white', width: 200, height: 60 }}>
              New Customer
            </Button>
          </Stack>
          {/* Display entered values */}
          {customers.map((customer, index) => (
            <Paper key={index} sx={{ p: 2, mt: 2 }}>
              <Typography variant="h6">Customer {index + 1} Details:</Typography>
              <Typography variant="body1">Customer ID: {customer.id}</Typography>
              <Typography variant="body1">Customer Name: {customer.name}</Typography>
              <Typography variant="body1">Customer Email: {customer.email}</Typography>
            </Paper>
          ))}
        </Paper>
      </Grid>
      <Grid></Grid>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Paper sx={{ direction: 'column', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', p: 4, minWidth: 300 }}>
          <Typography variant="h5" gutterBottom sx={{ bgcolor: '#009688', borderRadius: '2' }}>Add New Customer</Typography>

          <Stack direction='column'>
          <input
            id="upload-image"
            type="file"
            onChange={handleFileChange}
            inputProps={{ accept: 'image/*' }}
            style={{ display: 'flex', height: 309 }}
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
          </Stack>

          <Button onClick={handleAddCustomer} variant='contained' color="primary" sx={{ marginTop: 2 }}>
            Add new customer
          </Button>
        </Paper>
      </Modal>
    </Stack>
  );
};

export default CustomModel;
