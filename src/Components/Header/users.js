import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Users extends Component{
    render() {
        return(
         <Link to='/GetUser'><h3>Get User</h3></Link>
        );
    }
}
export default Users;
