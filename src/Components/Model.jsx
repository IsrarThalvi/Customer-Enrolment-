import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { Avatar } from '@mui/material';
import File from './File';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../Firebase';
import { MyContext } from '../App';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "20%",
    height: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const handlehadding = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "90%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00796b",
    color: "white"
};

const handleclose = {
    position: "fixed",
    top: "0%",
    left: "81%",
    width: "10%",
    height: "20%",
    fontSize: "xx-large",
    backgroundColor: "#00796b",
    color: "white",
};

const handletext = {
    position: "fixed",
    top: "25%",
    left: "16%"
};

const handleaddbtn = {
    position: "fixed",
    top: "85%",
    left: "30%",
    backgroundColor: "#00796b",
    color: "white"
};

const handleimage = {
    position: "fixed",
    top: "65%",
    left: "25%",
    color: "black"
};

const handlebtn = {
    position: "fixed",
    top: "25%",
    left: "15%",
    backgroundColor: "#00796b",
    color: "white"
};

const handleimgName = {
    position: "fixed",
    top: "67%",
    left: "40%",
    color: "black"
};

export default function BasicModal() {
    const { prod, setProd } = useContext(MyContext); 
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [edit, setEdit] = useState(null);

    const handleOpen = () => {
        setName("");
        setEmail("")
        setSelectedImage('')
        setOpen(true);
        setEdit(null);
    };

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

    const handleEdit = (index) => {
        setEdit(index);
        const editedCustomer = prod[index];
        setName(editedCustomer.name);
        setEmail(editedCustomer.email);
        setOpen(true);
    };

    const handleDelete = (index) => {
        try {
            const key = prod[index].id;
            db.child(key).remove();
            const updatedProd = [...prod];
            updatedProd.splice(index, 1);
            setProd(updatedProd);
            toast.error("contact delete successfully!", {
                position: "top-center"
            });
        } catch (e) {
            console.log("error : ", e);
        }
    };

    const handleAddCustomer = async () => {
        if (name.length === 0 || email.length === 0) {
            toast.error("All fields are required!", { position: "top-center" });
            return;
        } try {
            if (edit === null) {
                const newData = { name, email, selectedImage };
                db.push(newData);
                prod.push(newData);
                setProd(prod);
                toast.success("contact added successfully!", {
                    position: "top-center"
                });
            } else {
                const newData = { name, email, selectedImage };
                const key = prod[edit].id;
                db.child(key).update(newData)
                const updatedProd = [...prod];
                updatedProd.splice(edit, 1, newData);
                setProd(updatedProd);
                toast.success("contact update successfully!", {
                    position: "top-center"
                });
            }
            setName('');
            setEmail('');
            setSelectedImage('');
            setOpen(false);
        } catch (error) {
            console.error('Error adding/editing customer:', error);
            setOpen(false);
            toast("contact edit successfully!", {
                position: "top-center"
            });
        }
    };

    return (
        <div>
            <Button style={handlebtn} onClick={handleOpen}>
                <b>+ ADD CUSTOMER</b>
            </Button>
            <ToastContainer />
            <File product={prod} handleEdit={handleEdit} handleDelete={handleDelete} />
            <Modal
                open={open}
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2" style={handlehadding}>
                        ADD NEW CUSTOMER
                    </Typography>
                    <Button style={handleclose} onClick={handleClose} size="1px">
                        X
                    </Button>
                    <Grid style={handletext}>
                        <TextField label="Name" value={name} placeholder='Enter your name' style={{ marginBottom: "5%" }}
                            onChange={(val) => setName(val.target.value)} />
                        <TextField label="Email" value={email} placeholder='Enter your Email' style={{ marginBottom: "5%" }}
                            onChange={(val) => setEmail(val.target.value)} />
                    </Grid>
                    <Grid>
                        <Grid style={handleimage}>
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
                        <Typography style={handleimgName}>Upload Image</Typography>
                    </Grid>
                    <Button style={handleaddbtn} onClick={handleAddCustomer}>{edit === null ? 'ADD ' : 'Update '} CUSTOMER</Button>
                </Box>
            </Modal>
        </div>
    );
}
