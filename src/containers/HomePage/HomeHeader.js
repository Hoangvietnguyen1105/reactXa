import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import {LanguageUtils} from '../../utils/index'
import { FormattedMessage } from 'react-intl';

import {changeLanguage} from '../../store/actions/appActions'
class HomeHeader extends Component {

    changeLanguage = (data)=>{
        this.props.changeLanguage(data)
    }

    render() {
       let languageColor = this.props.language
       console.log(languageColor)

        return (
            
            <>

                <div className='homeheader-container '>
                    <div className='homeheader-content '>
                        <div className='left-content '>
                            <i class="fa-solid fa-bars"></i>
                            <div className='header-logo'>Logo</div>
                        </div>
                        <div className='center-content '>
                            <div className='child-content'>
                                <div className='main-title'><b><FormattedMessage id="home-header.category"/></b></div>
                                <div className='sub-title'><FormattedMessage id="home-header.category-des"/></div>
                            </div>
                            <div className='child-content'>
                                <div className='main-title'><b><FormattedMessage id="home-header.facility"/></b></div>
                                <div className='sub-title'><FormattedMessage id="home-header.facility-des"/></div>
                            </div>
                            <div className='child-content'>
                                <div className='main-title'><b><FormattedMessage id="home-header.artist"/></b></div>  
                                <div className='sub-title'><FormattedMessage id="home-header.artist-des"/></div>  
                            </div>
                            <div className='child-content'>
                                <div className='main-title'><FormattedMessage id="home-header.combo"/></div>
                                <div className='sub-title'><FormattedMessage id="home-header.combo-des"/></div>
                            </div>
                        </div>
                        <div className='right-content '>
                            <div className='support color-black'><i class="fa-solid fa-circle-question"></i><FormattedMessage id="home-header.support"/></div>
                            <div className={languageColor === 'vi' ? 'language color-yellow' : 'language color-black'}><span onClick={()=>this.changeLanguage('vi')}>VI</span></div>
                            <div className={languageColor === 'en' ? 'language color-yellow' : 'language color-black'}><span onClick={()=>this.changeLanguage('en')}>EN</span ></div>
                        </div>
                    </div>
                </div>
                <div className='homeheader-banner'>
                    <div className='banner-title-1 color-black'>
                       <div className='banner-title-content-1'><FormattedMessage id="homeheader-banner.banner-title-content1"/></div>
                        <div><FormattedMessage id="homeheader-banner.sologan"/></div> 
                    </div>
                    <div className='banner-search '>
                        <i class="fa-solid fa-magnifying-glass color-black"></i>
                        <input placeholder='nhập email nhận tư vấn'></input>
                       
                    </div>
                    <div className='banner-option'></div>
                </div>
                
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language:state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguage:(language)=> {dispatch(changeLanguage(language))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
