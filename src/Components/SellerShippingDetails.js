import React, { Component } from 'react'
import {TextField, Appbar, Button, Paper, Typography} from '@mui/material';
import './SellerShippingDetails.css'
export class SellerShippingDetails extends Component {

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
    <div className='bg-img'>
    <Paper>
      <form className='form'>
          <h1>Shipping Details</h1>
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='Maximum Delivery Distance'
              fullWidth
              onChange={handleChange('maxDeliveryDistance')}
              defaultValue={values.maxDeliveryDistance}
          />
          <br/>
          <br/>
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='Delivery Fees'
              fullWidth
              onChange={handleChange('deliveryFees')}
              defaultValue={values.deliveryFees}
          />
          
          <br/>
          <br/>
          <select
          label ="Shipping Method"
          className='option'
          onChange={handleChange('shippingMethod')}>
            <option>Shiiping by Strall</option>
            <option>Self Shipping</option>
          </select>
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
      </form>
    </Paper>
    </div>
  )
}
}

export default SellerShippingDetails