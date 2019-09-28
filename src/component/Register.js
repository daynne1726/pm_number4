import React, { Component } from 'react';
import  Businesscard from './businessCard';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FName: '',
            LName: '',
            Address: '',
            Email: '',
            PhoneNum: '',
            register: false,


        }
    }
    registerHandler = (e) => {
        const { FName, LName, PhoneNum, Address, Email } = this.state;
        if (FName !== '' && LName !== "" && Address !== '' && Email !== '' && PhoneNum !== '') {
            this.setState({ register: true });

        }
        else {
            alert('Fill up the field completely! ');
        }
    }

    render() {
        if (!this.state.register) {

            return (
                <center>
                    <div class="jumbotron">
                        <div id="top">
                            <div class="form-group">
                                <h1>Registration Form</h1><br/>
                                First Name: <input type="text" class="form-control" placeholder="Enter Firstname.." onChange={e => this.setState({ FName: e.target.value })}></input>
                                Last Name: <input type="text" class="form-control" placeholder="Enter lastname.." onChange={e => this.setState({ LName: e.target.value })}   ></input>
                                Address : <input type="text" class="form-control" placeholder="Enter Address.." onChange={e => this.setState({ Address: e.target.value })}   ></input>
                                Email : <input type="email" class="form-control" placeholder="Enter email.." onChange={e => this.setState({ Email: e.target.value })}   ></input>
                                Phone Number: <input type="number" class="form-control" placeholder="Enter phone number.." onChange={e => this.setState({ PhoneNum: e.target.value })}></input><br/>
                                <button type="button" class="btn btn-primary" onClick={e => this.registerHandler(e)}>
                                    Register
                </button>
                            </div>
                        </div>
                    </div>
                </center>
            )
        }
        else {
            return (
                < Businesscard FName={this.state.FName} LName={this.state.LName} Address={this.state.Address} Email={this.state.Email} PhoneNum={this.state.PhoneNum} />
            )
        }
    }
}
export default Register;