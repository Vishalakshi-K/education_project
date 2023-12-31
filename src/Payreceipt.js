import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import {ArrowForward } from '@material-ui/icons';
import axios from "axios"
import React, { useState } from 'react'
import './styles.css';
import { DataGrid } from "@material-ui/data-grid";
import { Typography } from "@material-ui/core";
import { Alert } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import {Button, TextField, Paper, Grid } from "@material-ui/core";
import StripeInput from "../../src/components/StripeInput";


const CARD_OPTIONS = {
    
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

const paperStyle={padding:'30px 20px', width: 600, margin: "20px auto"}
const marginTop = { marginTop: 10} 
    return (
        <center>
        <>
        {!success ? 
        <div>
          <Grid>
          <Paper  elevation ={20} style = {paperStyle} >
          <Grid align='center'></Grid>


        <form>
       
        <Grid  item xs ={12}></Grid>
           <Grid item xs={12} sm={6}>
            <TextField 
            //placeholder="XXXX XXXX XXXX XXXX"
            label="Card Number"
            style={marginTop}
            fullWidth
            InputLabelProps={{
                shrink: true,
              }}
            InputProps={{
                inputComponent: StripeInput,
                inputProps: {
                     component: CardNumberElement
                },
           }}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField 
            //placeholder="MM/YY"
            fullWidth
            label="Expiry Date"
            style={marginTop}
            InputLabelProps={{
                shrink: true,
              }}
            InputProps={{
                inputComponent: StripeInput,
                inputProps: {
                    component: CardExpiryElement
                },
            }}
            />
            </Grid>
            <Grid  item xs ={12}></Grid>
            <Grid item xs={12} sm={6}>
            <TextField 
            //placeholder="XXX"
            fullWidth
            label="CVV"
            style={marginTop}
            InputLabelProps={{
                shrink: true,
              }}
            InputProps={{
                inputComponent: StripeInput,
                inputProps: {
                    component: CardCvcElement
                },
            }}
            />
            </Grid>
            
            <Grid  item xs ={12}></Grid>
            <Grid item xs={12} sm={6}>
            <LoadingButton 
            loading ={loading}
            loadingPosition="start"
            startIcon={<ArrowForward />}
            fullWidth 
            variant="outlined"  
            onClick={handleSubmit}
            style={marginTop}>
                Pay
            </LoadingButton>
            </Grid>
        </form>
        </Paper>
       </Grid>
       <center>
       
    </center>
       </div>
        :
        <Grid>
          <Paper  elevation ={20} style = {paperStyle} >
          <Grid align='center'></Grid>
       <Alert severity="success">
           Your payment is Successful. Thanks for using our service.
       </Alert> 
       </Paper>
       </Grid>
      
        }




        </>
        </center>
    )
}