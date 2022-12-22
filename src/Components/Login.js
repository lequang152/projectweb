import React, { Component } from 'react';
import './Login.css';
import { FaFacebookSquare, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import Navigation from './Navigation';
import Bigcorp from './Bigcorp';
import Products from './Products';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            password: '',
            isShowPassword: false,
            errorMsg: '',
            success: false
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        
    }

    handleLogin = async (event) => {
        console.log(this.state.username, this.state.password);
        this.setState({
            success: true
        })
    }

    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleRegister = () => {
        console.log(this.state.username)
    }

    render() {
        return (
            <>
            {this.state.success ? (
                <Bigcorp/>
            ) : (
                <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>

                        <div className='col-12 form-group login-input'>
                            <label>Username</label>
                            <input type='text' className='form-control' 
                            placeholder='Enter your username'
                            value={this.state.username}
                            onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>

                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='password'>
                                <input className='form-control' 
                                type={this.state.isShowPassword ? 'text' : 'password'}
                                placeholder='Enter your password'
                                onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={() => {this.handleShowPassword()}}>
                                    {this.state.isShowPassword? <FaEye className='eyes'/> : <FaEyeSlash className='eyes'/>}
                                </span>
                                
                            </div>
                            
                        </div>

                        <div className='col-12'>
                            <button className='btn-login' onClick={() => {this.handleLogin()}}>
                                Login
                            </button>
                        </div>

                        <div className='col-12'>
                            <span className='forgot-pass'>Forgot your password?</span>
                        </div>
                        
                        <div className='col-12 text-social'>
                            <span className='text-other'>Or Login with:</span>
                        </div>

                        <div className='col-12 social-login'>
                            <FaFacebookSquare className='facebook'/>
                            <FaGoogle className='google'/>
                        </div>

                        <div className='col-12 button-reg'>
                            <button className='btn-register' onClick={() => {this.handleRegister()}}>
                                Register
                            </button>
                        </div>
                        

                    </div>
                </div>
            </div>   
            )}
            </>
        )
    }
}

export default Login