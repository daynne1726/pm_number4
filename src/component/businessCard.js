import React, { Component } from 'react';

class Businesscard extends Component {
    render() {
        return (
            <center>
                <div class="jumbotron">
                        <div class="form-group">
                            <h1>Businesscard!</h1>
                            <hr/>
                            <h4>Name:</h4> <span>{this.props.FName} {this.props.LName}</span>
                            <hr/>
                            <h4>Address:</h4> <span>{this.props.Address}</span>
                            <hr/>
                            <h4>Email:</h4> <span>{this.props.Email}</span>
                            <hr/>
                            <h4>Phone Number:</h4> <span>{this.props.PhoneNum}</span>
                    </div>
                </div>
            </center>

        )
    }
}
export default Businesscard;