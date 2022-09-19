import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emiiter';
import './ModalUser.scss'

class ModalUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: ''
        }

        this.listenToEmiiter()
    }

    listenToEmiiter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                address: ''
            })
        })
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleModalUser()
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
        console.log('check data:', this.state)
    }

    checkValidInput = () => {
        let isValid = true
        let arrInput = ['firstName', 'lastName', 'email', 'password', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Missing parameter: ' + arrInput[i])
                break;
            }
        }
        return isValid
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidInput()
        if (isValid === true) {
            this.props.createUser(this.state, 'abc')
        }
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => this.toggle()}
                    className={'modal-user'}
                    size='lg'
                >
                    <ModalHeader toggle={() => this.toggle()}>Create New User</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-container'>
                            <div className='modal-user-item'>
                                <div className='input-user'>
                                    <label>First name</label>
                                    <input
                                        type='text'
                                        onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                                        value={this.state.firstName}
                                    />
                                </div>
                                <div className='input-user'>
                                    <label>Last name</label>
                                    <input
                                        type='text'
                                        onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                                        value={this.state.lastName}
                                    />
                                </div>
                            </div>
                            <div className='modal-user-item'>
                                <div className='input-user'>
                                    <label>Email</label>
                                    <input
                                        type='email'
                                        onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                        value={this.state.email}
                                    />
                                </div>
                                <div className='input-user'>
                                    <label>Password</label>
                                    <input
                                        type='password'
                                        onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                                        value={this.state.password}
                                    />
                                </div>
                            </div>
                            <div className='modal-user-item'>
                                <div className='input-user'>
                                    <label>Address</label>
                                    <input
                                        type='text'
                                        onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                                        value={this.state.address}
                                    />
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleAddNewUser()}>Create user</Button>{' '}
                        <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
