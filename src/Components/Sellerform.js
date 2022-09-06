import React, { Component } from 'react'
import SellerPersonalDetails from './SellerPersonalDetails'
import SellerAddressDetails from './SellerAddressDetails'
import SellerAccountDetails from './SellerAccountDetails'
import SellerShippingDetails from './SellerShippingDetails'
import Confirm from './Confirm'

export class Sellerform extends Component {

state={
  step:1,
  sellerName:'',
  storeName:'',
  phone:'',
  email:'',
  gstno:'',
  password:'',
  confirmPassword:'',
  shippingMethod:'',
  maxDeliveryDistance:'',
  deliveryFees:'',
  address:'',
  city:'',
  state:'',
  pincode:'',
  nameAsPerBank:'',
  bankName:'',
  accountNo:'',
  ifsc:'',
}

//Go to next page//
nextStep=(e)=>{
  const {step} = this.state;
  this.setState({
    step:step+1
  })
}

//Go to previous page//
prevStep=()=>{
  const {step} = this.state;
  this.setState({
    step:step-1
  })
}

//handle field changes//
handleChange = input => e => {
  this.setState({[input]:e.target.value});
}
  render() {

    const {step}=this.state;
    const {sellerName, storeName, phone, email, gstno, password, confirmPassword, shippingMethod, maxDeliveryDistance, deliveryFees,address, city, state, pincode, nameAsPerBank, bankName, accountNo, ifsc}=this.state; 
    const values = {sellerName, storeName, phone, email, gstno, password, confirmPassword, shippingMethod, maxDeliveryDistance, deliveryFees,address, city, state, pincode, nameAsPerBank, bankName, accountNo, ifsc}
      switch(step){
        case 1:
          return(
            
            <SellerPersonalDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          )
          case 2:
            return (
              <SellerAddressDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            )
          
          case 3:
            return (
              <SellerAccountDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            )

          case 4:
            return (
              <SellerShippingDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            )

          case 5:
            return (
              <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
            )
      }
  }
}

export default Sellerform