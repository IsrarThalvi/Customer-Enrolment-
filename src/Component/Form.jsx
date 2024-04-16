import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SignInOutContainer from './Index';
import { Grid } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const handleclickbtn = {
    position: "fixed",
    top: '40%',
    left: "45%",
    background: "#004d40",
    color: "#fafafa"
}
export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid>
                <h1 style={{ textAlign: "center" }}>WELLCOME <br />SIGNIN SIGNUP FORM OF CUSTOMER ENROLLMENT USING FIREBASE
                    <br />Click Here And Submit Your Details</h1>
            </Grid>
            <Grid>
                <Button onClick={handleOpen} style={handleclickbtn}>Open modal</Button>
                <Modal
                    open={open}
                  
                    >
                    
                    <Box sx={style}>
                        <h1 onClick={handleClose}>x</h1>
                        <SignInOutContainer />
                    </Box>
                </Modal>
            </Grid>
        </>
    );
}
