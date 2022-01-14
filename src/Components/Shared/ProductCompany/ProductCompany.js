import React from "react";
import Slider from "react-slick";
import brand1 from '../../../images/brand1.png'
import brand2 from '../../../images/brand2.png'
import brand3 from '../../../images/brand3.png'
import brand4 from '../../../images/brand4.png'
import brand5 from '../../../images/brand5.png'
import brand6 from '../../../images/brand6.png'

const ProductCompany = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
      };
    return (
        <div className="bg-light py-5">
        <Slider {...settings}>
            <div> <img className="mx-auto my-2" src={brand1} alt="" /></div>
            <div> <img className="mx-auto my-2" src={brand2} alt="" /></div>
            <div> <img className="mx-auto my-2" src={brand3} alt="" /></div>
            <div> <img className="mx-auto my-2" src={brand4} alt="" /></div>
            <div> <img className="mx-auto my-2" src={brand5} alt="" /></div>
            <div> <img className="mx-auto my-2" src={brand6} alt="" /></div>
        </Slider>
      </div>
    );
};

export default ProductCompany;