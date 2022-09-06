import React, { Component } from 'react'
import {TextField, Appbar, Button, Paper, Typography} from '@mui/material';
import './SellerAddressDetails.css'
export class SellerAddressDetails extends Component {

  continue=e=>{
    e.preventDefault();
    this.props.nextStep();

}

back=e=>{
  e.preventDefault();
  this.props.prevStep();

}

render() {
  const {values, handleChange} = this.props;
  return (
    <Paper>
      <form className='form'>
          <h1 className='heading'>Address Details</h1>
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='Seller Address'
              fullWidth
              onChange={handleChange('sellerAddress')}
              defaulValue={values.sellerAddress}
          />
          <br/>
          <br/>
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='City'
              fullWidth
              onChange={handleChange('city')}
              defaulValue={values.city}
          />
          <br/>
          <br/>
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='Phone Number'
              fullWidth
              onChange={handleChange('phone')}
              defaulValue={values.phone}
          />
          <br/>
          <br/>
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='State'
              fullWidth
              onChange={handleChange('state')}
              defaulValue={values.phone}
          />
          <br/>
          <br/>
          
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='Pin Code'
              fullWidth
              onChange={handleChange('pincode')}
              defaulValue={values.pincode}
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
              >Next</Button>
          
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
      </form>
    </Paper>
  )
}
}

export default SellerAddressDetails