import React, { Component } from 'react';
import axios from 'axios';


class CustomerSignUpComponent extends Component {
  constructor() {
    super();
    this.state = {
      id: this.customerTicketId,
      customerUserName: "",
      customerEmailId: "",
      customerPassword: "",
      mobileNumber: "",
      gender: "",
      emailError: "",
      userNameError: "",
      passwordError: "",
      mobileNumberError: "",

      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.validateField = this.validateField.bind(this);

    this.validateEmail = this.validateEmail.bind(this);

    this.validateMobileNumber = this.validateMobileNumber.bind(this);
  }

  handleChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });


  }
  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();


    console.log(this.state)
    console.log(this.state)
    axios.post('http://localhost:6060/api/signup/customers', this.state)
      .then(response => {
        console.log(response)
        alert("Sign In Successfully")
        this.setState({
          reset: true
        });
      })
      .catch(error => {
        console.log(error)
        alert("Please Enter UserName/Password")
      })


  }

  validateField(name) {
    let isValid = false;

    if (name === "customerEmailId"){
      isValid = this.validateEmail();
    } 
    else if (name === "customerPassword") {
      isValid = this.validateCustomerPassword();
    }
    else if (name === "customerUserName") {
      isValid = this.validateCustomerUserName();
    }
    else if(name === "mobileNumber"){
      isValid = this.validateMobileNumber();
    }
    return isValid;
  }


  validateEmail = () => {
    let emailError = "";
    const value = this.state.customerEmailId;
    // if (!this.state.customerEmailId.includes('@')) {
    //   emailError = 'Invalid Email Id';
    // }

    if (!value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      emailError = 'Invalid Email Id';
    }

    this.setState({ emailError });

    return emailError === "";
  }

  validateCustomerUserName() {
    let userNameError = "";
    const value = this.state.customerUserName;
    if (value.trim() === "") userNameError = "User Name is required";

    this.setState({
      userNameError
    });
    return userNameError === "";
  }

  validateCustomerPassword(){
    let passwordError = "";
    const value = this.state.customerPassword;
    
    if(!value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)){
      passwordError = "Password must be minimum 8 characters, must contain uppercase, lowercase alphabets and number";
    }

    this.setState({ passwordError });

    return passwordError === "";
  }

  validateMobileNumber(){
    let mobileNumberError = "";
    const value = this.state.mobileNumber;

    if(value.trim === ""){
      mobileNumberError = "Mobile number is required"
    }
    else if(value.length !== 10){
      mobileNumberError = "Mobile number must be 10 digits"
    }

    this.setState({ mobileNumberError });

    return mobileNumberError === "";
  }



  render() {

    return (


      <div className="page w-100 h-100 mt-5" style={{


        backgroundColor: "#dfcfcb",
        backgroundSize: "100% 100%",
        backgroundPosition: "top center"

      }}>
        <div className="row">
          <div className="col-sm-8 text-center admin" >
          </div>

          <div className="col-sm-4 signin text-center ">

            <h4 className="text-center mt-2">Just few steps away</h4>
            <h2 className="text-center mt-2">Register Here!</h2>

            <form onSubmit={this.handleSubmit} >

              <div className="form-inline">
                <label > Email ID &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                <input
                  style={{ borderRadius: "10px" }}

                  type="email"
                  placeholder="emailid"
                  name="customerEmailId"
                  value={this.state.customerEmailId}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"


                  className="form-control mt-3"

                  required
                />
                <div style={{ fontSize: 15, color: "red", paddingLeft: 122 }}>{this.state.emailError}</div>
              </div>

              <div className="form-inline">
                <label > Password &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                <input
                  style={{ borderRadius: "10px" }}

                  type="password"
                  placeholder="Password"
                  name="customerPassword"
                  value={this.state.customerPassword}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"


                  className="form-control mt-3"

                  required
                />
                <div style={{ fontSize: 15, color: "red", paddingLeft: 97 }}>{this.state.passwordError}</div>
              </div>





              <div className="form-inline">
                <label > User Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label><input
                  style={{ borderRadius: "10px" }}


                  type="text"
                  placeholder="User Name"
                  name="customerUserName"
                  value={this.state.customerUserName}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"


                  className="form-control mt-3"

                  required
                />
                <div style={{ fontSize: 15, color: "red", paddingLeft: 122 }}>{this.state.userNameError}</div>
              </div>


              <div className="form-inline">
                <label > Gender &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                <input
                  style={{ borderRadius: "10px" }}

                  type="text"
                  placeholder="gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"


                  className="form-control mt-3"

                  required
                />
              </div>

              <div className="form-inline">
                <label > Mobile Number&nbsp; </label>
                <input
                  style={{ borderRadius: "10px" }}

                  type="number"
                  placeholder="mobile number"
                  name="mobileNumber"
                  value={this.state.mobileNumber}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"


                  className="form-control mt-3"

                  required
                />
                <div style={{ fontSize: 15, color: "red", paddingLeft: 122 }}>{this.state.mobileNumberError}</div>
              </div>


              {/* <div className="text-danger">{this.state.errors.confirmpassword}</div> */}
              <br></br>
              <button type="submit" className="btn btn-dark mr-6">Sign Up</button>
              {/* <button className="btn btn-dark mr-5" onClick={this.submitHandler}>Submit</button> */}
              <br></br>

              {/* <a href="/customerBug" className="text-left text-dark mr-5">Customer List</a> */}
            </form>
          </div>
        </div>
      </div>



    );
  }
}

export default CustomerSignUpComponent;