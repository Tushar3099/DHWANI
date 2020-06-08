import React from 'react';

const LoginPage = () =>{
    return(
        <div className = 'loginbox'>
                <h1 className = 'formtop'>Login</h1>
                <div>
                <h2 className = 'formfield'>Username</h2>
                <input className = 'forminput' type = 'text' placeholder = 'username' name = 'username'/>
                </div>
                <div>
                <h2 className = 'formfield'>Password</h2>
                <input className = 'forminput' type = 'password' name = 'pass' placeholder = '********'/>
                </div>
                <button className = 'clickme3 bt2'>New User</button>
                <button className = 'clickme3 bt3'>Login</button>
        </div>
    );
}

export default LoginPage;