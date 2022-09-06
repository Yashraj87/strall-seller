import React, { Component } from 'react'
import {TextField, Appbar, Button, Paper, Typography, ListItemText, AppBar} from '@mui/material';
import { List,ListItem} from '@mui/material';

export class Confirm extends Component {

    confirmncontinue=e=>{
        e.preventDefault();
        //SAVE INFO IN MONGODB//
        this.props.nextStep();

    }

    back=e=>{
        e.preventDefault();
        this.props.prevStep();
      
      }
      

    render() {
        const {values:{sellerName, storeName, phone, email, gstno, password, confirmPassword, shippingMethod, maxDeliveryDistance, deliveryFees,address, city, state, pincode, nameAsPerBank, bankName, accountNo, ifsc}} = this.props;
        return (
          <div>
            <h1 className='heading'>Confirmation page</h1>
                <List>
                    <ListItem >
                        <b>Seller Name</b>
                        {sellerName}
                    </ListItem>
                    <ListItem>
                        <b>Store Name</b>
                        {storeName}
                    </ListItem>
                    <ListItem>
                        <b>Phone</b>
                        {phone}
                    </ListItem>
                    <ListItem>
                        <b>Email</b>
                        {email}
                    </ListItem>
                    <ListItem>
                        <b>GST No.</b>
                        {gstno}
                    </ListItem>
                    <ListItem>
                        <b>Shipping Method</b>
                        {shippingMethod}
                    </ListItem>
                    <ListItem>
                        <b>Seller Name</b>
                        {sellerName}
                    </ListItem>
                    <ListItem>
                        <b>Seller Name</b>
                        {sellerName}
                    </ListItem>
                </List>
                <Button
                    className='button'
                    label='Next'
                    variant='contained'
                    color='primary'
                    //size='large'
                    type='submit'
                    onClick={this.confirmncontinue}
                    //fullWidth
                    size='large'
                >Confirm</Button>
                <br/>
                <br/>
                <Button
              className='button'
              label='Back'
              variant='contained'
              color='secondary'
              //size='large'
              type='submit'
              onClick={this.back}
              //fullWidth
              >Back</Button>
          </div>
        )
      }
    }
    

export default Confirm