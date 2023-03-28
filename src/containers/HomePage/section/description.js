import React, { Component } from 'react';
import { connect } from 'react-redux';
import './description.scss'
import { FormattedMessage } from 'react-intl';
import png from "./photo/tatto.jpeg"
class des extends Component {

    render() {
       
       

        return (
            <div>
                <div className='HomePage-des'>
                    <div className='des1'>
                        <div className='des1-content-left'><img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} /></div>
                        <div className='des1-content-right'>
                            <div className='des1-right-text1'><span ><FormattedMessage id="des.des1-right-text1"/></span></div>
                            <div><h1 className='des1-right-text2'><FormattedMessage id="des.des1-right-text2"/></h1></div>
                            <span className='des1-right-text3'><FormattedMessage id="des.des1-right-text3"/></span>
                            <div className='button-des'>
                                <button className='booking-button'><FormattedMessage id="des.booking-button"/></button>
                                <button className='contact-button'><FormattedMessage id="des.contact-button"/></button>
                            </div>
                        </div>
                    </div>
                    <div className='des2'>
                        <div className='des2-content-left'>
                            <div className='des2-left-text1'><span ><FormattedMessage id="des.des2-left-text1"/></span></div>
                            <div><h1 className='des2-left-text2'><FormattedMessage id="des.des2-left-text2"/></h1></div>
                            <span className='des2-left-text3'><FormattedMessage id="des.des2-left-text3"/></span>
                            <div className='button-des'>
                                <button className='booking-button'><FormattedMessage id="des.booking-button"/></button>
                                <button className='contact-button'><FormattedMessage id="des.contact-button"/></button>
                            </div>
                        </div>
                        <div className='des2-content-right'><img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} /></div>

                    </div>
                    <div className='des3'>
                        <div className='des3-content-left'><img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} /></div>
                            <div className='des3-content-right'>
                                <div className='des3-right-text1'><span ><FormattedMessage id="des.des3-right-text1"/></span></div>
                                <div><h1 className='des3-right-text2'><FormattedMessage id="des.des3-right-text2"/></h1></div>
                                <span className='des3-right-text3'><FormattedMessage id="des.des3-right-text3"/></span>
                                <div className='button-des'>
                                    <button className='booking-button'><FormattedMessage id="des.booking-button"/></button>
                                    <button className='contact-button'><FormattedMessage id="des.contact-button"/></button>
                                </div>
                            </div>
                        </div>
                    <div className='des4'>
                        <div className='des4-content-left'>
                            <div className='des4-left-text1'><span ><FormattedMessage id="des.des4-left-text1"/></span></div>
                            <div><h1 className='des4-left-text2'><FormattedMessage id="des.des4-left-text2"/></h1></div>
                            <span className='des4-left-text3'><FormattedMessage id="des.des4-left-text3"/></span>
                            <div className='button-des'>
                                <button className='facebook-button'>facebook</button>
                                <button className='ins-button'>instagram</button>
                            </div>
                        </div>
                        <div className='des4-content-right'><img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} /></div>
                    </div>



                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(des);
