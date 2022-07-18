import React from 'react'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            rememberMe: false,
            emailIsValid: false,
            passwordIsValid: false,
            isSubmitted: false
        }
    }
    handelEmailChange = (e) => {
        this.setState ({
          
            email:e.target.value},
      () => {} 
    
     
   
      
    )};
     render(){
        return(
        
           
            <form onSubmit={this.handleSubmit} >
            <div classeName="mb-3">
              <label htmlfor="exampleInputEmail1" classeName="form-label">Email address</label>
              <input type="email" classeName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" classeName="form-text" onChange={this.handleChange}></div>
            </div>
            <div classeName="mb-3">
              <label htmlfor="exampleInputPassword1" classeName="form-label">Password</label>
              <input type="password" classeName="form-control" id="exampleInputPassword1" onChange={this.handleChange}/>
            </div>
            <div classeName="mb-3 form-check">
              <input type="checkbox" classeName="form-check-input" id="exampleCheck1" onChange={this.handleChange}/>
              <label classeName="form-check-label" htmlfor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" classeName="btn btn-primary">Submit</button>
          </form>
          
        )
     }

}

export default App