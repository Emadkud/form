import React, { Component } from "react";
class App extends Component {
  constructor(){
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }

  handleEmailChange = (e) => {
    const value = e.target.value
    // console.log (value)
    const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    const isValide = regEx.test(value)


   this.setState({
    email : value,
    emailIsValid: isValide
   })

  }

   handlePasswordChange = (e) => {
    const value = e.target.value
     const isValid = value.length > 5
     
     this.setState({
      password : value,
      passwordIsValid: isValid,

    })

   }

   handleRememberMeChange = (e) => {
   this.setState({ rememberMe : e.target.checked })

   } 

   handleSubmit = (e) => {
    e.preventDefault()
    const allIsValid = this.state.passwordIsValid &&this.state.emailIsValid
            this.setState({isSubmitted : allIsValid})
    

   }
 




  render() {
 
    return (
      <>
      <h1 className="text-center mt-5">login</h1>
      {this.state.isSubmitted ? (
        <div>
          <p>{this.state.email}</p>
        </div>
      ) : (
        <div className="container d-flex justify-content-center mt-5">
     
      <form className="col-6"  onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"> Email address</label>
            <input type="email" className={`form-control ${this.state.emailIsValid ? 'is-valid' : 'is-invalid' }`} id="email"  onChange={this.handleEmailChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label"> Password</label>
            <input type="password" className={`form-control ${this.state.passwordIsValid ? 'is-valid'  : 'is-invalid'}`} id="Password"  onChange ={this.handlePasswordChange} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember-me"  onChange={this.handleRememberMeChange}  />
            <label className="form-check-label" htmlFor="exampleCheck1"> Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary" > Submit</button>
      </form>
    
      </div>
      )
    }
    
      </>
    );
  }
}
export default App;
