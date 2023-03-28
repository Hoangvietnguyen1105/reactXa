import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss'
import { FormattedMessage } from 'react-intl';
class HomeFooter extends Component {

    render() {
       
       

        return (
            <>
                <div className='HomeFooter'>
                <div className='footer-logo'>Logo</div>
                <div className='footer-text'><FormattedMessage id="des.footer-text"/></div>
                <div className='footer-logo'>
                    <i class="fa-brands fa-facebook footer-logo-1"></i>
                    <i class="fa-brands fa-instagram footer-logo-2"></i>
                </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
