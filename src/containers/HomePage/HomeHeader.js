import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from '../../assets/images/logo.jpg'
import SearchBarModal from './SearchBarModal';

class HomeHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpenSearchModal: false
        }
    }

    handleSearch = () => {
        this.setState({
            isOpenSearchModal: true
        })
        console.log('check modal state: ', this.state.isOpenSearchModal)
    }

    toggleSearch = () => {
        this.setState({
            isOpenSearchModal: !this.state.isOpenSearchModal
        })
    }

    render() {
        return (
            <div className='header-container'>
                <div className='header-top'>
                    <div className='phoneNo-shop'>
                        <FontAwesomeIcon icon='phone' className='phone-icon' />
                        <span>09080706543 - 19001080 (CSKH)</span>
                    </div>
                    <div className='free-shipping'>Miễn phí vận chuyển cho đơn hàng đầu tiên</div>
                    <div className='social-media'>
                        <div className='social-media-icon'>
                            <FontAwesomeIcon icon='fa-brands fa-facebook' />
                            <FontAwesomeIcon icon='fa-brands fa-twitter' />
                        </div>
                        <div className='language-switch'>
                            <span>Việt Nam</span>
                        </div>
                    </div>
                </div>
                <div className='main-header'>
                    <div className='logo-shop'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='menu-header'>
                        <div className='menu-items'>
                            <button className='items'>Trang chủ</button>
                        </div>
                        <div className='menu-items'>
                            <button className='items'>Sữa cho bé</button>
                        </div>
                        <div className='menu-items'>
                            <button className='items'>Bài viết</button>
                        </div>
                        <div className='menu-items'>
                            <button className='items'>Tã &amp; Bỉm</button>
                        </div>
                        <div className='menu-items'>
                            <button className='items'>Thực phẩm dinh dưỡng</button>
                        </div>
                        <div className='menu-items'>
                            <button className='items'>Đồ dùng cho mẹ &amp; bé</button>
                        </div>
                    </div>
                    <div className='cart-shopping'>
                        <div className='search-bar'>
                            <button onClick={() => this.handleSearch()}>
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                        <SearchBarModal
                            isOpen={this.state.isOpenSearchModal}
                            toggleSearch={this.toggleSearch}
                        />

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
                            <span>Danh mục</span>
                        </div>
                        <div className='sb-items'>Thương hiệu</div>
                        <div className='sb-items'>Sản phẩm bán chạy</div>
                        <div className='sb-items'>Tìm kiếm sản phẩm</div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
