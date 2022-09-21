import React, { Component } from 'react';
import './UserRedux.scss'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';

class UserRedux extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        let language = this.props.language
        return (
            <div className='redux-container'>

                <div className='form-card'>
                    <div className='form-include'>
                        <div className='text-center'>
                            <h4>USER REDUX</h4>
                        </div>
                        <form className="row g-3 form-content">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">
                                    <FormattedMessage id="userRedux.password" />
                                </label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="inputAddress" className="form-label">
                                    <FormattedMessage id="userRedux.firstName" />
                                </label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="inputAddress2" className="form-label">
                                    <FormattedMessage id="userRedux.lastName" />
                                </label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputCity" className="form-label">
                                    <FormattedMessage id="userRedux.address" />
                                </label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-8">
                                <label htmlFor="inputState" className="form-label">
                                    <FormattedMessage id="userRedux.phoneNo" />
                                </label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">
                                    <FormattedMessage id="userRedux.gender" />
                                </label>
                                <select id="inputState" className="form-select">
                                    <option value="0">
                                        {language === LANGUAGES.VI ? 'Nam' : 'Male'}
                                    </option>
                                    <option value="1">
                                        {language === LANGUAGES.VI ? 'Nữ' : 'Female'}
                                    </option>
                                </select>
                            </div>
                            <div className="col-12 last-child">
                                <button type="submit" className="btn btn-primary">
                                    <FormattedMessage id="userRedux.save" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
