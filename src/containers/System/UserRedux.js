import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <>
                <div className="text-center" >User redux</div>
                <div>
                    <h5>Thêm người dùng mới</h5>
                </div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
