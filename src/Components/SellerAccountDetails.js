import React, { Component } from 'react'
import {TextField, Appbar, Button, Paper, Typography} from '@mui/material';
import './SellerAccountDetails.css'
export class SellerAccountDetails extends Component {
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
    <Paper >
      <form className='form'>
          <h1 className='heading'>Account Details</h1>
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='Name As Per Bank'
              fullWidth
              onChange={handleChange('nameasPerBank')}
              defaulValue={values.nameasPerBank}
          />
          <br/>
          <br/>
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='Bank Name'
              fullWidth
              onChange={handleChange('bankName')}
              defaulValue={values.bankName}
          />
          <br/>
          <br/>
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='Account Number'
              fullWidth
              onChange={handleChange('accountNumber')}
              defaulValue={values.accountNumber}
          />
          <br/>
          <br/>
          <TextField 
              name=''
              required='true'
              variant='standard'
              label='IFSC Code'
              fullWidth
              onChange={handleChange('ifsc')}
              defaulValue={values.ifsc}
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
  )
}
}

export default SellerAccountDetails