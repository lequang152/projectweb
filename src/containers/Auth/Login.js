import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FaFacebookSquare, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            password: '',
            isShowPassword: false,
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

    handleLogin = () => {
        alert('Success!')
    }

    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {

        return (
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
                        
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other'>Or Login with:</span>
                        </div>

                        <div className='col-12 social-login'>
                            <FaFacebookSquare className='facebook'/>
                            <FaGoogle className='google'/>
                        </div>

                    </div>
                </div>
            </div>    
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);