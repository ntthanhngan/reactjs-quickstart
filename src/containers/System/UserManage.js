import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, createUserService, deleteUserService, editUserService } from '../../services/userService';
import './UserManage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emiiter'
import ModalEditUser from './ModalEditUser';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            editUser: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact()
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    toggleModalUser = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    toggleModalEditUser = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }

    createUser = async (data) => {
        try {
            let response = await createUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            }
            else {
                await this.getAllUsersFromReact()
                this.setState({
                    isOpenModalUser: false
                })
            }

            emitter.emit('EVENT_CLEAR_MODAL_DATA')
        } catch (e) {
            console.log(e)
        }
    }

    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUserService(user.id)
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact()
            } else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleEditUser = async (user) => {
        this.setState({
            isOpenModalEditUser: true,
            editUser: user
        })
    }

    handleUpdateUser = async (user) => {
        try {
            let res = await editUserService(user)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUsersFromReact()
            } else {
                alert(res.errCode)
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        let arrUsers = this.state.arrUsers
        return (
            <div className='user-container'>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleModalUser={this.toggleModalUser}
                    createUser={this.createUser}
                />
                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleModalEditUser={this.toggleModalEditUser}
                        currentUser={this.state.editUser}
                        updateUser={this.handleUpdateUser}
                    />
                }
                <div className="text-center title">Manage users with react</div>
                <div className='add-user mx-2'>
                    <button className='btn btn-primary'
                        onClick={() => this.handleAddUser()}
                    >
                        <span>
                            <FontAwesomeIcon icon='plus' className='me-2' />
                        </span>
                        Add new user
                    </button>
                </div>
                <div className='user-table mt-3 mx-2'>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='edit-btn' onClick={() => this.handleEditUser(item)}>
                                                    <FontAwesomeIcon icon="pen" />
                                                </button>
                                                <button className='delete-btn' onClick={() => this.handleDeleteUser(item)}>
                                                    <FontAwesomeIcon icon="trash" />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div >
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
