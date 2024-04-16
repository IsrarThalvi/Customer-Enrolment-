import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  Link
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { auth } from './Firebase';

const SignIn = () => {
  const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '0 auto' };
  const avatarStyle = { backgroundColor: 'green' };
  const btnStyle = { margin: '8px 0' };
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [condition, setCondition] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleOnChange = (event) => {
    setCondition(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Email field is required');
    } else if (!email.includes('@')) {
      toast.error('Please enter a  valid email address');
    } else if (!password) {
      toast.error('Password field is required');
    } else if (password.length < 5) {
      toast.error('Password length should be at least 5 characters');
    } else {
      auth.signInWithEmailAndPassword(email, password).then(res => {
        console.log("resonse", res)
        toast.success("User login successfully");
        navigation("/details");
      }).catch(e => {
        console.log("error", e)
        toast.error("INVALID Please Regestration In SignUp page Then come back to login page and login here");

      })
      setEmail("");
      setPassword("");
      setCondition(false);

    }
  };

  return (
    <Grid>
      <ToastContainer />
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
          <TextField
            onChange={handleChange}
            id="email"
            name="email"
            label="Email"
            variant="standard"
            placeholder="Enter Email"
            fullWidth
            required
            value={email}
          />
          <TextField
            onChange={handleChange}
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
        </Grid>
        <FormControlLabel
          control={<Checkbox name="rememberMe" color="primary" onChange={handleOnChange} checked={condition} />}
          label="Remember Me"
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          color="primary"
          style={btnStyle}
          fullWidth
          variant="contained"
        >
          SIGN IN
        </Button>
        <Typography>
          <Link href="#" underline="none">
            Forgot Password?
          </Link>
        </Typography>
        <Typography>
          <Link href="#" underline="none">
            Don't have an account? Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignIn;
