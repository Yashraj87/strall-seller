import React, { Component } from 'react';
import {TextField, Appbar, Button, Paper, Typography} from '@mui/material';
import { color } from '@mui/system';
import { blue, red } from '@mui/material/colors';
import './SellerPersonalDetails.css'

export class SellerPersonalDetails extends Component {

    continue=e=>{
        e.preventDefault();
        this.props.nextStep();

    }

  render() {
    const {values, handleChange} = this.props;
    //preventDefault=false;
    return (
        
      <div variant='elevation' className='form_layout'>
        
        <Typography variant='h4'>Personal Details</Typography>

        <form className='form' required >
            <TextField 
                //style={{width:"5%",margin:"2%"}}
                required='true'
                variant='standard'
                name=''
                label='Seller Name'
                fullWidth
                onChange={handleChange('sellerName')}
                defaultValue={values.sellerName}
            />
            <br/>
            <br/>
            <TextField 
                //style={{width:"5%",margin:"2%"}}
                required='true'
                name=''
                variant='standard'
                label='Store Name'  
                fullWidth              
                onChange={handleChange('storeName')}
                defaultValue={values.storeName}
            />
            <br/>
            <br/>
            <TextField 
                name=''
                variant='standard'
                required='true'
                label='Phone Number'
                type='number'
                fullWidth
                onChange={handleChange('phone')}
                defaultValue={values.phone}
            />
            <br/>
            <br/>
            <TextField 
                name=''
                variant='standard'
                label='Email'
               type="email"
                required='true'
                fullWidth
                onChange={handleChange('email')}
                defaultValue={values.email}
            />
            <br/>
            <br/>
            <TextField 
                name=''
                variant='standard'
                label='GST Number'
                required='true'
                type="number"
                fullWidth
                onChange={handleChange('gstno')}
                defaultValue={values.gstno}
            />
            <br/>
            <br/>
            <TextField 
                name=''
                variant='standard'
                label='Password'
                required='true'
                type="password"
                fullWidth
                onChange={handleChange('password')}
                defaultValue={values.password}
            />
            <br/>
            <br/>
            <TextField 
                name=''
                variant='standard'
                label='Confirm Password'
                required='true'
                type="password"
                fullWidth
                onChange={handleChange('confirmPassword')}
                defaultValue={values.confirmPassword}
            />
            <br/>
            <br/>
            <Button
                className='button'
                label='Next'
                variant='contained'
                color='primary'
                //size='large'
                type='submit'
                onClick={this.continue}
                //fullWidth
                size='large'
            >Next</Button>
        </form>
      </div>
    )
  }
}



export default SellerPersonalDetails