import React, { Component } from 'react';
import { connect } from 'react-redux';
import flagVN from '../../assets/images/vietnam-flag-icon.png'
import flagEN from '../../assets/images/usa-flag-icon.png'
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import { LANGUAGES } from '../../utils';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { changeLanguageApp } from '../../store/actions';

class Header extends Component {

    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        const { processLogout, language } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='header-end'>
                    <div className='language-switch'>
                        <span type="button"
                            onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}
                        >
                            <img src={flagVN} alt=''
                                className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}
                            />
                        </span>
                        <span type="button"
                            onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}
                        >
                            <img src={flagEN} alt=''
                                className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}
                            />
                        </span>
                    </div>
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout}>
                        <FontAwesomeIcon icon="right-from-bracket" className='icon' />
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
