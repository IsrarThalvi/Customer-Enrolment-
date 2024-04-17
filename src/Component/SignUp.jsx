import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './Firebase';

const SignUp = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [radio, setRadio] = useState(""); 
  const [condition, setCondition] = useState(false); 
  const paperStyle = { padding: '30px 20px', width: 300, margin: '0 auto' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const headerStyle = { margin: 0 };
  const marginTopStyle = { marginTop: 5 };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  const handleChange = (event) => {
    setCondition(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error('Name field is required');
    } else if (!email.trim()) {
      toast.error('Email field is required');
    } else if (!email.includes('@')) {
      toast.error('Please enter a valid email address');
    } else if (!password) {
      toast.error('Password field is required');
    } else if (password.length < 5) {
      toast.error('Password length should be greater than 5 characters');
    } else if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else if (!condition) {
      toast.error('Please accept the terms and conditions');
    } else {
      toast.success('Data added successfully please go back to SignIn page and SignIn with Email and Password Best Of luck');
      const newData = [...data, { name, email, password, confirmPassword, gender: radio }];
      setData(newData);
      auth.createUserWithEmailAndPassword(email,password).then(res=>{
        console.log("resonse ", res)
      }).catch(e=>{
        console.log("error  ", e)
      })
      localStorage.setItem('userYoutube', JSON.stringify(newData));
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRadio("");
      setCondition(false); 
    }
  };

  return (
    <Grid>
      <ToastContainer />
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleInputChange}
            id="name"
            name="name"
            label="Name"
            variant="standard"
            placeholder="Enter Name"
            fullWidth
            required
            value={name}
          />
          <TextField
            onChange={handleInputChange}
            id="email"
            name="email"
            label="Email"
            variant="standard"
            placeholder="Enter Email"
            fullWidth
            required
            value={email}
          />
          <FormControl style={marginTopStyle}>
            <FormLabel style={marginTopStyle}>Gender</FormLabel>
            <RadioGroup name="gender" style={{ display: 'initial' }} value={radio} onChange={handleRadioChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            onChange={handleInputChange}
            id="password"
            name="password"
            label="Password"
            variant="standard"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
            value={password}
          />
          <TextField
            onChange={handleInputChange}
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            variant="standard"
            placeholder="Enter Confirm Password"
            type="password"
            fullWidth
            required
            value={confirmPassword}
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" onChange={handleChange} checked={condition} />}
            label="I Accept The Terms And Conditions"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={marginTopStyle}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;