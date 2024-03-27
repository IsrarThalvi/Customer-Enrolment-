import React,{useState, useEffect} from 'react'
import { Button, Grid, Paper } from '@mui/material'
import Model from './Model'
const Form = () => {
    const [prod, setProd] = useState([])
    const paperstyle = {
        backgroundColor: "#00796b",
        height: "100vh",
        width: "15%"
    }
    const papercustomer = {
        fontSize: "4vh",
        width: "100%",
        height: "20vh",
        display: "flex",
        alignItems: "center",

    }
    const handlebtn = {
        position: "fixed",
        top: "25%",
        left: "15%",
        backgroundColor: "#00796b",
        color: "white"
    }
    useEffect(()=>{
console.log(prod)
    }, [prod])
    return (
        <>
            <Grid backgroundColor="#e3f2fd">
                <Grid display="flex">

                    <Paper style={paperstyle}>
                        <b>my name is irfan ali</b>
                    </Paper>

                    <Button style={handlebtn}>
                    <b>+ ADD CUSTOMER</b>
                    </Button>

                    <Paper style={papercustomer}>
                        <b style={{ marginLeft: "5%" }}>CUSTOMERS</b>
                    </Paper>                 
                    <Model prod={prod} setProd={setProd} />
                </Grid>
            </Grid>
        </>
    )
}

export default Form