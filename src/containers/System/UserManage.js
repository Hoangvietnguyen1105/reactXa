import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import {getAllUsers,deleteUsers,createUser,updateUsers} from '../../services/userService'
import ModalUser from './modalUser';
import modelUpdateUser from './modelUpdateUser';
import {emitter} from '../../utils/emitter'
import ModelUpdateUser from './modelUpdateUser';
class UserManage extends Component {

    constructor(props) { //hàm để setStage
        super(props);
        this.state = {
            data:[],
            isOpenModalUser:false,
            isOpenModalUpdate:false,
            user:''
        }
        
    }
    
    componentDidMount() {
        this.getData()
        
    }
    getData = async()=>{
        let data = await getAllUsers('all')
        await this.setState({
            data : data.users,
        },()=>{
            console.log(this.state.data)
        })
       console.log(data.users)
    }
    handleDelete = async(id)=>{
        let message = await deleteUsers(id)
        if(message.message.error === 0){
            this.getData()
        }
    }
    handleAddUser =()=>{
        this.setState({
            isOpenModalUser:true
        })
        
    }
    toggleUserModal = ()=>{
        this.setState({
            isOpenModalUser:!this.state.isOpenModalUser
        })
    }
    CreateNewUser = async(data)=>{
        let message = await createUser(data)
        console.log(message)
        alert(message.message.message )
        if(message.message.error === 0){
            await this.getData()
        }
    }
    handleClickUpdate = async(user1)=>{
        
        
        this.setState({
            isOpenModalUpdate:!this.state.isOpenModalUpdate,
            user : user1
        })
        
        
        
    }
    handleToggleUpdate = ()=>{
        this.setState({
            isOpenModalUpdate:!this.state.isOpenModalUpdate
        })        
    }
    hanldeUpdateUser = async(data)=>{
        let message = await updateUsers(data)
        console.log('s',message)
        await this.getData()
    }
    render() {
        let arr = this.state.data
        return (
            <div className="user-container">
                <ModalUser
                    isOpenModalUser={this.state.isOpenModalUser}
                    toggleUserModal={this.toggleUserModal}
                    CreateNewUser ={this.CreateNewUser}
                    
                />
                {
                    this.state.isOpenModalUpdate &&
                     <ModelUpdateUser 
                    isOpenModalUpdate = {this.state.isOpenModalUpdate}
                    handleClickUpdate ={this.handleClickUpdate}
                    handleToggleUpdate={this.handleToggleUpdate}
                    user ={this.state.user}
                    hanldeUpdateUser ={this.hanldeUpdateUser}
                />
                }
                
                <div className='title text-center'>Manage User with hoang viet</div>
                <div className='mx-1'>
                    <button onClick={this.toggleUserModal}
                     className='btn btn-primary px-3'>add new user</button>
                </div>
                <div className='user-table mt-3 mx-3'>
                <table>
                    <tr>
                        <th>email</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>address</th>
                        <th>action</th>
                    </tr>
                    {arr.map((item,index)=>{
                        return <>
                        <tr>
                        <th>{item.email}</th>
                        <th>{item.firstName}</th>
                        <th>{item.lastName}</th>
                        <th>{item.address}</th>
                        <th><button onClick={()=>this.handleClickUpdate(item)}>sửa</button>
                            <button onClick={()=>this.handleDelete(item.id)}>xoá</button></th>
                    </tr>
                        </>
                    })}
                </table>

                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
