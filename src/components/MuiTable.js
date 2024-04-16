import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Button, Grid, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const MuiTable = () => {
  const [avatarImage, setAvatarImage] = useState(null);
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers, setCustomers] = useState([
    { id: '001', name: 'John Doe', email: 'johndoe@example.com' },

    // Add more customers as needed
  ]);
  const handleclickbutton = {
position:"fixed",
top:"27%",
left:"15%",
fontSize:"large",
padding:"5px",
backgroundColor:"#004d40"
  }
  const handleAvatarClick = () => {
    // Logic to handle avatar click
  };

  const handleAddCustomer = () => {
    // Logic to add a new customer
    const newCustomer = {
      id: customerId,
      name: customerName,
      email: customerEmail
    };
    setCustomers([...customers, newCustomer]);
    setCustomerId('');
    setCustomerName('');
    setCustomerEmail('');
    setIsModalOpen(false); // Close the modal after adding the customer
  };

  return (
    <Stack direction='row' alignItems="center">
      <Paper sx={{ width: 300, height: '100vh', p: 2 }}>
        <Typography variant='h5'>CUSTOMERS</Typography>
        <Stack spacing={2} mt={2}>
          <Button variant="contained" onClick={() => setIsModalOpen(true)} style={handleclickbutton}>New Customer</Button>
          {customers.map(customer => (
            <Paper key={customer.id} sx={{ p: 2 }}>
              <Avatar sx={{ bgcolor: deepPurple[500], mr: 2 }}>{customer.id}</Avatar>
              <Typography variant='body1'>Customer Names: {customer.name}</Typography>
              <Typography variant='body1'>Emails: {customer.email}</Typography>
            </Paper>
          ))}
        </Stack>
      </Paper>

      {/* Modal for adding new customer */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Paper sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', p: 4, minWidth: 300 }}>
          <Typography variant="h6" gutterBottom>Add News Customer</Typography>
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
          <Button onClick={handleAddCustomer} variant="contained" color="primary">Add Customers</Button>
        </Paper>
      </Modal>
    </Stack>



  )
}

export default MuiTable






// import React from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Tooltip
// } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';

// const MuiTable = ({ data }) => {
//   const handleEdit = (id) => {
//     // Handle edit action
//     console.log(`Edit clicked for ID: ${id}`);
//   };

//   const handleDelete = (id) => {
//     // Handle delete action
//     console.log(`Delete clicked for ID: ${id}`);
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Age</TableCell>
//             <TableCell>Country</TableCell>
//             <TableCell>Actions</TableCell> {/* Added Actions column */}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.name}</TableCell>
//               <TableCell>{row.age}</TableCell>
//               <TableCell>{row.country}</TableCell>
//               <TableCell>
//                 {/* Edit button */}
//                 <Tooltip title="Edit">
//                   <IconButton onClick={() => handleEdit(row.id)}>
//                     <Edit />
//                   </IconButton>
//                 </Tooltip>
//                 {/* Delete button */}
//                 <Tooltip title="Delete">
//                   <IconButton onClick={() => handleDelete(row.id)}>
//                     <Delete />
//                   </IconButton>
//                 </Tooltip>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default MuiTable;
