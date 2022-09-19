import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import { connect } from 'react-redux';

class SearchBarModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleSearch()
    }

    render() {
        return (

            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
            >
                <ModalHeader toggle={() => this.toggle()}></ModalHeader>
                <ModalBody>
                    <div className='form-floating'>
                        <label>
                            <FontAwesomeIcon icon='search' />
                        </label>
                        <input />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Create user</Button>{' '}
                    <Button color="secondary">Cancel</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarModal);
