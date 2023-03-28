import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModelUser extends Component {

    
    constructor(props){
        super(props)
        this.state = {
            email:'',
            firstName:'',
            lastName: '',
            password:'',
            address:'',
            phoneNumber:'',
            gender:'1',
            roleId:'1'
            
        }
        
    }
    componentDidMount() {
    }
    componentDidUpdate() {
        
      }
    
    
  
    toggle = ()=>{
        this.props.toggleUserModal()
        this.setState({
            email:'',
            firstName:'',
            lastName: '',
            password:'',
            address:'',
            phoneNumber:'',
            gender:'1',
            roleId:'1'
        })
    }
    handleChage = (e,name)=>{
        let copyState = {...this.state}
        copyState[name] = e.target.value
        this.setState({
            ...copyState
        },()=>{
            
        })
    }
    handleMissing = ()=>{
        let isValid = true
        let arr= ['email','firstName','lastName','password','address','phoneNumber','gender','roleId']
        for(let i = 0; i < arr.length; i++){
            if (!this.state[arr[i]]){
                alert('chua nhap truong ' + arr[i])
                isValid = false
                break;
            }
        
        }
        return isValid
    }
    handleAddnewUser = () => {
        let check =  this.handleMissing()
       if(check){
        this.props.CreateNewUser(this.state)
        this.toggle()
        }
        
        
    }
    
    
    render() {
        
        
        return (
            <Modal size="lg"
                 centered
                 isOpen={this.props.isOpenModalUser} toggle={()=>{this.toggle()}} className={'abc'}>
                <ModalHeader toggle={()=>{this.toggle()}}>Modal title</ModalHeader>
                 <ModalBody>
                    <div className='container'>
                        <div className='row'>
                            <label>Email</label>
                            <input onChange={(e)=> {this.handleChage(e,'email')}} type='text' ></input>
                        </div>
                        <div className='row'>
                            <label>password</label>
                            <input onChange={(e)=> {this.handleChage(e,'password')}} type='password' ></input>
                        </div>
                        <div className='row'>
                            <label>firstName</label>
                            <input onChange={(e)=> {this.handleChage(e,'firstName')}} type='text' ></input>
                        </div>
                        <div className='row'>
                            <label>lastName</label>
                            <input onChange={(e)=> {this.handleChage(e,'lastName')}} type='text' ></input>
                        </div>
                        <div className='row'>
                            <label>address</label>
                            <input onChange={(e)=> {this.handleChage(e,'address')}} type='text' ></input>
                        </div>
                        <div className='row'>
                            <label>phoneNumber</label>
                            <input onChange={(e)=> {this.handleChage(e,"phoneNumber")}} type='text' ></input>
                        </div>
                        <div class="row">
                            <label for="inputState">gender</label>
                            <select onChange={(e)=> {this.handleChage(e,'gender')}} name="gender" class="form-control">
                            <option value="1">male</option>
                            <option value="0">female</option>
                            </select>
                        </div>
                        <div class="row">
                            <label for="inputState">role</label>
                            <select onChange={(e)=> {this.handleChage(e,'roleId')}} name="roleId" class="form-control">
                            <option value="1">admin</option>
                            <option value="0">doctor</option>
                            <option value="2">partien</option>
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={()=>{this.handleAddnewUser()}}>save</Button>{' '}
                    <Button color="secondary" className='px-3' onClick={()=>{this.toggle()}}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelUser);

