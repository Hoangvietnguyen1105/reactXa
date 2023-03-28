import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModelUpdateUser extends Component {

    
    constructor(props){
        super(props)
        this.state = {
            id:'',
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
        this.setData()
        this.dis()
    }
    componentDidUpdate() {
        
    }
    dis = ()=>{
        console.log('test from did',this.props.user)
    }
    setData = () => {
        let user = this.props.user;
        this.setState({
          id:user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          password: user.password,
          address: user.address,
          phoneNumber: user.phoneNumber,
          gender: user.gender,
          roleId: user.roleId
        }, () => {
          console.log('test bang callback', this.state);
        });
      }
      toggle = ()=>{
        this.props.handleToggleUpdate()
        
      }
    
  
      handleChage =(e,key)=>{
        let copy = {...this.state}
        copy[key]=e.target.value
        this.setState({
            ...copy
        })
        console.log(this.state)
      }
      handleUpdateUser = ()=>{
         this.props.hanldeUpdateUser(this.state)
         
         this.toggle()
      }
    
    render() {
        
        console.log('--------------',this.state)
        
        return (
            <Modal size="lg"
                 centered
                 isOpen={this.props.isOpenModalUpdate} toggle={()=>{this.toggle()}} className={'abc'}>
                <ModalHeader toggle={()=>{this.toggle()}}>Modal title</ModalHeader>
                 <ModalBody>
                    <div className='container'>
                        <div className='row'>
                            <label>Email</label>
                            <input onChange={(e)=> {this.handleChage(e,'email')}} type='text' value={this.state.email}></input>
                        </div>
                        <div className='row'>
                            <label>firstName</label>
                            <input onChange={(e)=> {this.handleChage(e,'firstName')}} type='text'value={this.state.firstName} ></input>
                        </div>
                        <div className='row'>
                            <label>lastName</label>
                            <input onChange={(e)=> {this.handleChage(e,'lastName')}} type='text' value={this.state.lastName} ></input>
                        </div>
                        <div className='row'>
                            <label>address</label>
                            <input onChange={(e)=> {this.handleChage(e,'address')}} type='text' value={this.state.address}></input>
                        </div>
                        <div className='row'>
                            <label>phoneNumber</label>
                            <input onChange={(e)=> {this.handleChage(e,"phoneNumber")}} type='text' value={this.state.phoneNumber}></input>
                        </div>
                        <div class="row">
                            <label for="inputState">gender</label>
                            <select onChange={(e)=> {this.handleChage(e,'gender')}} name="gender" class="form-control" value={this.state.gender}>
                            <option value="1">male</option>
                            <option value="0">female</option>
                            </select>
                        </div>
                        <div class="row">
                            <label for="inputState">role</label>
                            <select onChange={(e)=> {this.handleChage(e,'roleId')}} name="roleId" class="form-control" value={this.state.roleId}>
                            <option value="1">admin</option>
                            <option value="0">doctor</option>
                            <option value="2">partien</option>
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={()=>{this.handleUpdateUser()}}>save</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModelUpdateUser);

