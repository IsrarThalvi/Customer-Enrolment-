import React from 'react'
import { Grid, Paper, Stack, TextField } from '@mui/material';
const Name = () => {
  return (
    <Stack>
     <Grid style={{ display:"flex", justifyContent:"center", marginTop:"20%" }}>
      <Paper style={{ width: "30%", height: "50%" }}>
        <Stack>
          <TextField label="name" placeholder='Enter your Name' variant='standard' fullWidth />
          
          <TextField label="email" placeholder='Enter your Email' variant='standard' fullWidth />
          
          <TextField label="cnic" placeholder='Enter your Cnic' variant='standard' fullWidth />
          
          <TextField label="password" placeholder='Enter your password' variant='standard' fullWidth />
        </Stack>
      </Paper>
    </Grid>
    </Stack>
  )
}

export default Name