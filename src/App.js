import React from 'react';
import './App.css';
import { Grid } from '@mui/material';
import Name from './components/Name';
import UserInterface from './components/UserInterface';
import Customerinterface from './components/Customerinterface';
import Table from './components/MuiTable';
import CustomModel from './components/CustomModel';





function App() {
  return (
   <Grid>
    {/* <Name/> */}
    <UserInterface/>
    {/* <Customerinterface/> */}
    <CustomModel/>
    <Table/>

    </Grid> 
  );
}

export default App;
