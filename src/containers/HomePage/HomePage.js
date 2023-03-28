import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import PhotoLib from './section/photo-lib';
import Testte from './section/testte';
import Des from './section/description'
import Rating from './section/rating'
class Home extends Component {

    render() {
       
       

        return (
            <div>
                <HomeHeader/>
                <PhotoLib/>
                <Des/>
                <Rating/>
                <HomeFooter/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
