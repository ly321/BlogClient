import * as React from 'react';
import "./login.scss";
import {shell} from 'electron';
 class Login extends React.Component{
    goGithub(e:any){
        e.preventDefault();
        shell.openExternal('https://github.com/join');
    }
    render(){
        return(
            <div className="login">
                <div className="loginBox">
                <p>
                    <img src="./src/assets/img/back-r-o.png" alt=""/>
                    <span>Log in</span>
                </p>
                <div className="inputs">
                    <p>
                        <span>GitHub</span>
                        <span>GitHub Enterprise</span>    
                    </p>
                    <input className="click" type="text" placeholder="Username or email"/>
                    <input className="click" type="text" placeholder="Password"/>
                    <p>The best way to build and ship software. <a className="click" href="#" onClick={this.goGithub}>Go to github.com</a> to sign up for an account</p>
                </div>
                <div className="btns">
                    <p>
                        <span><img src="./src/assets/img/complete-r-o.png" alt=""/></span>
                        <span>Log in</span>
                    </p>
                    <p> 
                        <span><img src="./src/assets/img/error-r-o.png" alt=""/></span>
                        <span>Cancel</span>
                    </p>
                </div> 
                </div>
            </div>
        )
    }  
}
export default Login;