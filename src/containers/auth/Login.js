import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { handleLogin } from '../../services/userService';
import * as actions from '../../store/actions';

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { userLoginSuccess } from '../../store/actions';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'hoangviet',
            password:'123',
            isShowPass: false,
            err:'',
        }
        
    }
    
handleOnChangeUsername = (e)=>{
    this.setState({
        username:e.target.value
    })
}
handleOnChangePassword =(e)=>{
    this.setState({
        password:e.target.value
    })
}
handleClick = async()=>{
    this.setState({
        err:'',
    })
    try {
        let data =  await handleLogin(this.state.username,this.state.password)
        console.log(data)
        if(data.error !== 0){
            this.setState({
                err:data.message,
            })

        }
        if(data.error === 0 ){
            this.props.userLoginSuccess(data.user)
            console.log(data.user)
        }
    } catch (error) {
        if(error){
            if(error.response){
                this.setState({
                    err:error.response.message,
                })
                console.log(error.response)
            }
        }
        
    }
    
}
handleShowPass = ()=>{
    this.setState({
        isShowPass:!this.state.isShowPass
    })
}
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-login'>Login</div>
                        <div className='col-12 form-group login-input '>
                            <label>Username</label>
                            <input value={this.state.username} onChange={(e)=> this.handleOnChangeUsername(e)}
                            type='text' 
                            className='form-control' 
                            placeholder='Enter your username'/>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <input value={this.state.password} onChange={(e)=> this.handleOnChangePassword(e)}
                            type={this.state.isShowPass ? 'text' : 'password'} 
                            className='form-control' 
                            placeholder='Enter your password'/>
                            <span onClick={this.handleShowPass}><i className={this.state.isShowPass?"fa-regular fa-eye-slash eye":"fa-regular fa-eye eye"}></i></span> 
                        </div>
                        <div className='col-12' style={{color:'red'}}>
                            {this.state.err}
                        </div>
                        <div className='col-12'><button onClick={this.handleClick} className='btn-login'>Login</button></div>
                        
                        <div className='col-12'>
                            <span>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className='text-center'>Or login with</span>
                        </div>
                        <div className='col-12 social-login'>
                        <i className="fa-brands fa-google google"></i>
                        <i className="fa-brands fa-facebook facebook"></i>
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
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo)=>dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
