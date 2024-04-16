// import React, { useEffect, useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import AddIcon from '@mui/icons-material/Add';
// import { db } from '../FirebaseConfig';
// import { Button, Grid, Paper, Stack, TextField, Typography, Modal } from '@mui/material';
// import { Update } from '@mui/icons-material';

// const UserInterface = () => {
//   const [avatarImage, setAvatarImage] = useState(null);
//   const [customerId, setCustomerId] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [customerEmail, setCustomerEmail] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [customers, setCustomers] = useState([]);
//   const [isDeleting, setIsDeleting] = useState(false);
  
  
//     useEffect(() => {
//       const fetchCustomers = async () => {
//         try {
//           const snapshot = await db.collection('customers').get();
//           const customersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//           setCustomers(customersData);
//         } catch (error) {
//           console.error('Error fetching customers:', error);
//         }
//       };
//       fetchCustomers();
//     }, []);


//   const handleOpenModal = {
//     position: "relative",
//     top: "5%",
//     left: "1%",
//     fontSize: "large",
//     padding: "5px",
//     backgroundColor: "#004d40",
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleAvatarClick = () => {
//     document.getElementById('upload-image').click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setAvatarImage(reader.result);
//       }
//       reader.readAsDataURL(file);
//     }
//   }

//   const handleAddCustomer = async () => {
//     const newCustomer = {
//       avatar: avatarImage,
//       name: customerName,
//       email: customerEmail
//     };
//     try {
//       let res = await db.collection('customers').add(newCustomer);
//       const snapshot = await db.collection('customers').get();
//           const customersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//           setCustomers(customersData);
//       console.log('Customer added successfully');
//       // setCustomers([...customers, res]);  
//       setAvatarImage(null);
//       setCustomerName('');
//       setCustomerEmail('');
//       setSubmitted(true);
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error('Error adding customer:', error);
//     }
//   };
//   const handleUpdateCustomer = async (id,newData) =>{
//     try{
//     const customerRef =db.collection('customers').doc(id);
//     await customerRef.update(newData)
//     console.log('Customer Updated Successfully');
//     // Optionally, update the local state to reflect the changes immediately
//     setCustomers(customers.map(customer => {
//       if (customer.id === id) {
//         return { ...newData };
//       }
//       return customer;
//     }));
//     }catch(error){
//       console.error('Error Updating Customer:',error);

//     }

//   }
//   const handleDeleteCustomer = async (id) => {
//     // if (isDeleting) return;
//     // setIsDeleting(true);
//     try {
//       await db.collection('customers').doc(id).delete();
//       setCustomers(customers.filter(customer => customer.id !== id));
//       console.log('Customer Deleted Successfully');
//     } catch (error) {
//       console.error('Error Deleting Customer:', error);
//     } finally {
//       // setIsDeleting(false);
//     }
//   };

//   return (
//     <Stack direction='row' alignItems="center">
//       <Paper
//         sx={{
//           width: 200,
//           height: 700,
//           bgcolor: '#009688'
//         }}>
//       </Paper>
//       <Grid
//         display="flex"
//         direction="column">
//         <Typography
//           variant='h2'
//           sx={{
//             width: 300,
//             height: 100
//           }}>
//           Customers
//         </Typography>
//         <Paper
//           sx={{
//             width: 1300,
//             height: 600,
//             bgcolor: 'whitesmoke'
//           }}>
//           <Stack>
//             <Stack spacing={4} direction='column' width="15%">
//               <Button onClick={() => setIsModalOpen(true)} variant='contained' startIcon= {<AddIcon/>} style={handleOpenModal}>
//                 New Customer
//               </Button>
//             </Stack >
//           <Stack display='flex' direction='row' bgcolor='green' sx={{ marginLeft: 19.5, marginRight: 22,width:'75%', marginTop: 10,margin:'25' }}>
//             <Typography variant='h6' sx={{ width: 270, height: 100, marginBottom: -6, marginTop: 2, marginLeft: 9 }}>
//               Customer ID
//             </Typography>
//             <Typography variant='h6' sx={{ width: 380, height: 100, marginBottom: -6, marginTop: 2 }}>
//               Customer Name
//             </Typography>
//             <Typography variant='h6' sx={{ width: 380, height: 100, marginBottom: -6, marginTop: 2 }}>
//               Email
//             </Typography>
//           </Stack>
//             <Grid position="relative" top="50%" left="12%" width="107vw">
//             {customers.map((customer, index) => (
//               <Paper key={index}sx={{ mt: 2, bgcolor: 'green', width: "60%", padding: "1%" }} >
//                 <Stack display="flex" flexDirection="row" justifyContent="space-evenly">
//                   <Typography variant="h6">{index + 1}</Typography>
//                   <Avatar src={customer.avatar} />
//                   <Typography variant="body1">{customer.name}</Typography>
//                   <Typography variant="body1">{customer.email}</Typography>
//                   <Button onClick={()=> handleUpdateCustomer (customer.id)} sx={{color:'white', bgcolor:'blue'}}>Update</Button>
//                   <Button onClick={()=> handleDeleteCustomer (customer.id)} sx={{color:'white', bgcolor:'red'}}>Delete</Button>
//                 </Stack>
//               </Paper>
//             ))}
//             </Grid>

//           </Stack>
//           {/* <Button onClick={handleFileChange} sx={{ borderRadius: '60%' }} /> */}
//           <Modal open={isModalOpen} onClose={handleCloseModal}>
//             <Paper sx={{ direction: 'column', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', p: 4, minWidth: 300 }}>
//               <Typography variant="h5" gutterBottom sx={{ bgcolor: '#009688', borderRadius: '2' }}>Add New Customer</Typography>
//               <Stack direction='column'>
//                 <input id="upload-image" type="file" onChange={handleFileChange} inputProps={{ accept: 'image/*' }} style={{ display: 'none' }} />
//                 {avatarImage && <Avatar src={avatarImage} sx={{ width: 100, height: 100 }} />}
//                 <Button onClick={handleAvatarClick} sx={{ borderRadius: '60%' }} />
//                 <TextField label='Customer Name' variant='outlined' value={customerName} margin='normal' type='text' onChange={(e) => setCustomerName( e.target.value)} required InputLabelProps={{}} />
//                 <TextField label='Customer Email' variant='outlined' value={customerEmail} margin='normal' onChange={(e) => setCustomerEmail( e.target.value)} required InputLabelProps={{}} />
//               </Stack>
//               <Button onClick={handleAddCustomer} variant='contained' color="primary">
//                 Add new customer
//               </Button>
//             </Paper>
//           </Modal>
//         </Paper>
//       </Grid>
//     </Stack>
//   )
// }

// export default UserInterface;


import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../FirebaseConfig';
import CircularProgress from "@mui/material/CircularProgress";
import { Button, Grid, Paper, Stack, TextField, Typography, Modal, Box } from '@mui/material';

const UserInterface = () => {
  const [avatarImage, setAvatarImage] = useState(null);
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const snapshot = await db.collection('customers').get();
        const customersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCustomers(customersData);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };
    fetchCustomers();
  }, []);

  const modalStyle = {
    fontSize: "large",
    padding: "5px",
    backgroundColor: "#004d40",
  };
  

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCustomer(null);
    setCustomerName('');
    setCustomerEmail('');
    setAvatarImage(null);
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

  const handleAddOrUpdateCustomer = async () => {
    setIsDeleting(true);
    const customerData = {
      avatar: avatarImage,
      name: customerName,
      email: customerEmail,
    };
    try {
      if (editingCustomer) {
        await db.collection('customers').doc(editingCustomer.id).update(customerData);
        console.log('Customer updated successfully');
      } else {
        await db.collection('customers').add(customerData);
        console.log('Customer added successfully');
      }
      handleCloseModal();
      const snapshot = await db.collection('customers').get();
      const updatedCustomers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCustomers(updatedCustomers);
      setIsDeleting(false);
    } catch (error) {
      setIsDeleting(false);
      console.error('Error adding/updating customer:', error);
    }
  };

  const handleEditCustomer = (customer) => {
    setEditingCustomer(customer);
    setCustomerName(customer.name);
    setCustomerEmail(customer.email);
    setAvatarImage(customer.avatar);
    setIsModalOpen(true);
  };

  const handleDeleteCustomer = async (id) => {
    setIsDeleting(true);
    try {
      await db.collection('customers').doc(id).delete();
      setCustomers(customers.filter(customer => customer.id !== id));
      console.log('Customer deleted successfully');
    } catch (error) {
      console.error('Error deleting customer:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Stack direction='row' alignItems="center">
      <Paper
        sx={{
          width: '20vw',
          height: '100vh',
          bgcolor: '#009688'
        }}>
      </Paper>
      <Grid
        sx={{
          width: '80vw',
          height: '100vh'
        }}
        direction="column">
        <Typography
          variant='h2'
          sx={{
            height: '20vh'
          }}>
          Customers
        </Typography>
        <Paper
          sx={{
            width: '80vw',
            height: '80vh',
            bgcolor: 'whitesmoke'
          }}>
          {/* <Stack> */}
            <Stack spacing={4} direction='column' sx={{width: '20vw', pl: 5, pt: 5}}>
              <Button onClick={() => setIsModalOpen(true)} variant='contained' startIcon={<AddIcon />} style={modalStyle}>
                New Customer
              </Button>
            </Stack >
      

            <Stack display='flex'  direction='row' justifyContent={'space-around'} bgcolor='green' sx={{ margin: 5}}>
              <Typography variant='h6' sx={{}}>
                ID
              </Typography>
              <Typography variant='h6' sx={{ }}>
                Image
              </Typography>
              <Typography variant='h6' sx={{ width: '8vw'}}>
                Name
              </Typography>
              <Typography variant='h6' sx={{ width: '15vw'}}>
                Email
              </Typography>
              <Typography variant='h6' sx={{ }}>
                Update
              </Typography>
              <Typography variant='h6' sx={{ }}>
                Delete
              </Typography>
            </Stack>
            <Stack sx={{margin: 5,}}>
              {customers.map((customer, index) => (
                <Paper key={index} sx={{ mt: 2, py: 2, bgcolor: 'green'}} >
                  <Stack display="flex" flexDirection="row" justifyContent="space-evenly">
                    <Typography variant="h6">{index + 1}</Typography>
                    <Avatar src={customer.avatar} />
                    <Typography variant="body1" sx={{width: '5vw'}}>{customer.name}</Typography>
                    <Typography variant="body1"sx={{width: '15vw'}}>{customer.email}</Typography>
                    <Button onClick={() => handleEditCustomer(customer)} sx={{ color: 'white', bgcolor: 'blue'}}>Update</Button>
                    <Button onClick={() => handleDeleteCustomer(customer.id)} sx={{ color: 'white', bgcolor: 'red'}}>Delete</Button>
                  </Stack>
                </Paper>
              ))}
            </Stack>

          {/* </Stack> */}
          {/* <Modal open={isModalOpen} onClose={handleCloseModal}>
            <Paper sx={{ direction: 'column', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', p: 4, minWidth: 300 }}>
              <Typography variant="h5" gutterBottom sx={{ bgcolor: '#009688', borderRadius: '2' }}>{editingCustomer ? 'Edit Customer' : 'Add New Customer'}</Typography>
              <Stack direction='column'>
                <input id="upload-image" type="file" onChange={handleFileChange} inputProps={{ accept: 'image/*' }} style={{ }} />
                {avatarImage && <Avatar src={avatarImage} sx={{ width: 100, height: 100 }} />}
                <Button onClick={handleAvatarClick} sx={{ borderRadius: '60%' }} />
                <TextField label='Customer Name' variant='outlined' value={customerName} margin='normal' type='text' onChange={(e) => setCustomerName(e.target.value)} required InputLabelProps={{}} />
                <TextField label='Customer Email' variant='outlined' value={customerEmail} margin='normal' type='email' onChange={(e) => setCustomerEmail(e.target.value)} required InputLabelProps={{}} />
              </Stack>
              {isDeleting && <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box> }
              <Button onClick={handleAddOrUpdateCustomer} variant='contained' color="primary">
                {editingCustomer ? 'Update Customer' : 'Add new customer'}
              </Button>
            </Paper>
          </Modal> */}
        </Paper>
      </Grid>
    </Stack>
  )
}

export default UserInterface;

