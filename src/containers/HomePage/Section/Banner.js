import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../../assets/images/slide1.webp'
import slide4 from '../../../assets/images/slide4.webp'
import slide5 from '../../../assets/images/slide5.webp'
import slide7 from '../../../assets/images/slide7.webp'
import slide10 from '../../../assets/images/slide10.webp'
import './Banner.scss'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div className='slide-container'>
                <Slider ref={slider => (this.slider = slider)}{...settings}>
                    <div className='slide-items'>
                        <img alt='' src={slide1} />
                    </div>
                    <div className='slide-items'>
                        <img alt='' src={slide4} />
                    </div>
                    <div className='slide-items'>
                        <img alt='' src={slide5} />
                    </div>
                    <div className='slide-items'>
                        <img alt='' src={slide7} />
                    </div>
                    <div className='slide-items'>
                        <img alt='' src={slide10} />
                    </div>
                </Slider>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
