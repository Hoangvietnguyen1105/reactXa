import React, { Component } from "react";
import Slider from "react-slick";
import png from "./photo/tatto.jpeg"
import { FormattedMessage } from 'react-intl';

import './rating.scss'
export default class MultipleItems extends Component {
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
    SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style,  display: "block",
            display: "block",
            marginRight: "35px",
            background: "#ccc",
            width: "40px",
            display:"none",
            height: "35px",
            borderRadius: "5px",
            textAlign: "center",
            alignItems:"center",
            lineHeight: "40px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",}}
            onClick={onClick}
          />
        );
      }
       SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",
            background: "#ccc",
            left:'-50px',
            width: "40px",
            height: "35px",
            display:"none",
            borderRadius: "5px",
            textAlign: "center",
            alignItems:"center",
            lineHeight: "40px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",}}
            onClick={onClick}
           
          />
        );
      }
     
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      nextArrow: <this.SampleNextArrow />,
      prevArrow: <this.SamplePrevArrow />,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500
    };
    return (
        <>
        
      <div className="slider">
        <h2 className="lib"> <FormattedMessage id="des.rating-title"/> </h2>
        <div className="background-rating">
            <Slider {...settings}>
                <div className="rating">
                    <div><h2> <FormattedMessage id="des.rating-name"/></h2></div>
                    <div><h4> <FormattedMessage id="des.rating-subContent"/></h4></div>
                <div> <FormattedMessage id="des.rating-mainContent"/>
                </div>
                </div>
                <div className="rating">
                    <div><h2> <FormattedMessage id="des.rating-name"/></h2></div>
                    <div><h4> <FormattedMessage id="des.rating-subContent"/></h4></div>
                <div> <FormattedMessage id="des.rating-mainContent"/>
                </div>
                </div><div className="rating">
                    <div><h2> <FormattedMessage id="des.rating-name"/></h2></div>
                    <div><h4> <FormattedMessage id="des.rating-subContent"/></h4></div>
                <div> <FormattedMessage id="des.rating-mainContent"/>
                </div>
                </div><div className="rating">
                    <div><h2> <FormattedMessage id="des.rating-name"/></h2></div>
                    <div><h4> <FormattedMessage id="des.rating-subContent"/></h4></div>
                <div> <FormattedMessage id="des.rating-mainContent"/>
                </div>
                </div><div className="rating">
                    <div><h2> <FormattedMessage id="des.rating-name"/></h2></div>
                    <div><h4> <FormattedMessage id="des.rating-subContent"/></h4></div>
                <div> <FormattedMessage id="des.rating-mainContent"/>
                </div>
                </div><div className="rating">
                    <div><h2> <FormattedMessage id="des.rating-name"/></h2></div>
                    <div><h4> <FormattedMessage id="des.rating-subContent"/></h4></div>
                <div> <FormattedMessage id="des.rating-mainContent"/>
                </div>
                </div><div className="rating">
                    <div><h2> <FormattedMessage id="des.rating-name"/></h2></div>
                    <div><h4> <FormattedMessage id="des.rating-subContent"/></h4></div>
                <div> <FormattedMessage id="des.rating-mainContent"/>
                </div>
                </div><div className="rating">
                    <div><h2> <FormattedMessage id="des.rating-name"/></h2></div>
                    <div><h4> <FormattedMessage id="des.rating-subContent"/></h4></div>
                <div> <FormattedMessage id="des.rating-mainContent"/>
                </div>
                </div><div className="rating">
                    <div><h2> <FormattedMessage id="des.rating-name"/></h2></div>
                    <div><h4> <FormattedMessage id="des.rating-subContent"/></h4></div>
                <div> <FormattedMessage id="des.rating-mainContent"/>
                </div>
                </div>
            </Slider>
        </div>
      </div>
     
      </>
    );
  }
}