import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from '../../assets/images/logo.jpg'
import { FormattedMessage } from 'react-intl';
import flagVN from '../../assets/images/vietnam-flag-icon.png'
import flagEN from '../../assets/images/usa-flag-icon.png'
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        let language = this.props.language
        console.log('check props', this.props)
        return (
            <div className='header-container'>
                <div className='header-top'>
                    <div className='phoneNo-shop'>
                        <FontAwesomeIcon icon='phone' className='phone-icon' />
                        <span>09080706543 - 19001080 (CSKH)</span>
                    </div>
                    <div className='free-shipping'>
                        <FormattedMessage id="homeheadertop.topads" />
                    </div>
                    <div className='social-media'>
                        <div className='social-media-icon'>
                            <FontAwesomeIcon icon='fa-brands fa-facebook' />
                            <FontAwesomeIcon icon='fa-brands fa-twitter' />
                        </div>
                        <div className="language-switch">
                            <span type="button"

                                onClick={() => this.changeLanguage(LANGUAGES.VI)}
                            >
                                <img src={flagVN} alt='' className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'} />
                            </span>
                            <span type="button"

                                onClick={() => this.changeLanguage(LANGUAGES.EN)}
                            >
                                <img src={flagEN} alt='' className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='main-header'>
                    <div className='logo-shop'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='menu-header'>
                        <div className='menu-items'>
                            <button className='items'>
                                <FormattedMessage id="homeheader.home" />
                            </button>
                        </div>
                        <div className='menu-items'>
                            <button className='items'>
                                <FormattedMessage id="homeheader.babymilk" />
                            </button>
                        </div>
                        <div className='menu-items'>
                            <button className='items'>
                                <FormattedMessage id="homeheader.diaper" />
                            </button>
                        </div>
                        <div className='menu-items'>
                            <button className='items'>
                                <FormattedMessage id="homeheader.nutritionalfood" />
                            </button>
                        </div>
                        <div className='menu-items'>
                            <button className='items'>
                                <FormattedMessage id="homeheader.accessories" />
                            </button>
                        </div>
                        <div className='menu-items'>
                            <button className='items'>
                                <FormattedMessage id="homeheader.blog" />
                            </button>
                        </div>
                    </div>
                    <div className='cart-shopping'>
                        <div className='search-bar'>
                            <button onClick={() => this.handleSearch()}>
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>

                        <div className='favourite'>
                            <button>
                                <FontAwesomeIcon icon='heart' />
                            </button>
                        </div>
                        <div className='cart'>
                            <button>
                                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                            </button>
                        </div>
                        <div className='user'>
                            <button>
                                <FontAwesomeIcon icon="user" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='header-bottom'>
                    <div className='side-bar'>
                        <div className='title-side sb-items'>
                            <FontAwesomeIcon icon='bars' className='bars-icon' />
                            <span><FormattedMessage id="homesidebar.menu" /></span>
                        </div>
                        <div className='sb-items'>
                            <FormattedMessage id="homesidebar.buybybrands" />
                        </div>
                        <div className='sb-items'>
                            <FormattedMessage id="homesidebar.bestseller" />
                        </div>
                        <div className='sb-items'>
                            <FormattedMessage id="homesidebar.search" />
                        </div>
                    </div>
                    <div className='banner'>

                    </div>
                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
