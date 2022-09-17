import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../services/userService';
import './UserManage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class UserManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrUsers: []
        }
    }



    async componentDidMount() {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }


    render() {
        let arrUsers = this.state.arrUsers
        return (
            <div className='user-container'>
                <div className="text-center title">Manage users with react</div>
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
                                        <tr key={item.id}>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className='edit-btn'>
                                                    <FontAwesomeIcon icon="pen" />
                                                </button>
                                                <button className='delete-btn'>
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
