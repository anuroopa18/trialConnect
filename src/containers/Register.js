import React,{Component} from 'react';

class Register extends Component{
    constructor(props)
    {
        super(props);
        this.state ={
            user:{
                firstName:'',
                lastName:'',
                username:'',
                password:''
            },
           role:''
        }
      this.updateState = this.updateState.bind(this);
      this.updateStateRole = this.updateStateRole.bind(this);
    }

    updateState(event){
        const{name,value} = event.target;
        const{user} = this.state;
        this.setState({
            user:{
                ...user,
                [name]:value
            }
        });
    }

    updateStateRole(event){
        this.setState({
        role: event.target.value
    });
    }


    render(){
        const{user} = this.state;
        return(
            <div className="col-md-6 col-md-offset-3">
            <h1>Register</h1>
            <form >
                     <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.updateState}  />

                    </div>
                    <div >
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.updateState} />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.updateState}/>
                    </div>
                    <div >
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.updateState}/>
                    </div>
                    <p></p>
                    <label >Role</label>
        <div className="container">
   
        <div className="radio">
          <label>
            <input type="radio" value="Doctor" checked={this.state.role === "Doctor"} onChange={this.updateStateRole} />
           Doctor
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Patient" checked={this.state.role === "Patient"} onChange={this.updateStateRole} />
           Patient
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Collaborator" checked={this.state.role === "Collaborator"} onChange={this.updateStateRole}/>
            Collaborator
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Sponsor" checked={this.state.role === "Sponsor"} onChange={this.updateStateRole} />
            Sponsor
          </label>
        </div>
      
                </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                       
                </div>

            </form>
            </div>
        )
    }
}
export default Register
