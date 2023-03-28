import React, { Component } from "react";
import Slider from "react-slick";
import png from "./photo/tatto.jpeg"
import { FormattedMessage } from 'react-intl';
export default class MultipleItems extends Component {
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
      dots: false,
      infinite: true,
      speed: 500,
      nextArrow: <this.SampleNextArrow />,
      prevArrow: <this.SamplePrevArrow />,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
        <>
        
      <div className="slick">
        <h2 className="lib"> <FormattedMessage id="homeheader-slide.album"/> </h2>
        <Slider {...settings}>
          <div>
          <img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} />
          </div>
          <div>
          <img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} />
          </div>
          <div>
          <img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} />
          </div>
          <div>
          <img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} />
          </div>
          <div>
          <img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} />
          </div>
          <div>
          <img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} />
          </div>
          <div>
          <img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} />
          </div>
          <div>
          <img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} />
          </div>
          <div>
          <img src={png} style={{ maxWidth: '376px',maxHeight:'460px' }} />
          </div>
        </Slider>
      </div>
      </>
    );
  }
}