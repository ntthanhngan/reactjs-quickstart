import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import './Login.scss'
import { handleLoginApi } from '../../services/userService'

import * as actions from "../../store/actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: true,
            checkBox: false,
            errMessage: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })

        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }

            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log('Login succeeds')
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
        }
    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <form className='d-flex justify-content-center align-items-center flex-column'>
                <h2>Login</h2>
                <div className="form-outline mb-3 col-7 form-floating">
                    <input type="text" id="username" className="form-control"
                        value={this.state.username}
                        onChange={(event) => { this.handleOnChangeUsername(event) }}
                    />
                    <label className="form-label" htmlFor="username">Username</label>
                </div>

                <div className="form-outline mb-3 col-7 form-floating">
                    <input type={this.state.isShowPassword ? 'password' : 'text'}
                        id="password" className="form-control"
                        value={this.state.password}
                        onChange={(event) => { this.handleOnChangePassword(event) }}
                    />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>
                <div className='col-12'>
                    <span className='error-message'>{this.state.errMessage}</span>
                </div>
                <div className="col-7">
                    <div className="form-check">
                        <input className="form-check-input"
                            type='checkbox'
                            onChange={() => this.handleShowHidePassword()}
                            value="" id="form2Example31" />
                        <label className="form-check-label" htmlFor="form2Example31"> Show/Hide password </label>
                    </div>
                </div>
                <div className='row mb-3 mt-3 col-7 d-flex justify-content-between align-items-center'>
                    <div className="col-4 forgot-pwd">
                        <a href="#!">Forgot password?</a>
                    </div>
                    <button type="button" className="btn btn-primary btn-block mb-4 w-35 col-4 btn-signin"
                        onClick={() => this.handleLogin()}
                    >
                        Sign in
                    </button>
                </div>


                <div className="text-center">
                    <h4>or sign in with:</h4>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>

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
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
        // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        // adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
