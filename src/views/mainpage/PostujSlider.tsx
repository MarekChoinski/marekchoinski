import React from "react"
import PostujLight from "../../assets/images/postuj_light.jpg";
import PostujBlue from "../../assets/images/postuj_blue.jpg";
import PostujDark from "../../assets/images/postuj_dark.jpg";

const PostujSlider: React.FC = () => {
    return (
        <div className="slider">
                <img src={PostujLight} alt="slide_1" className="slider__slide slider__slide--slide1"/>
                <img src={PostujBlue} alt="slide_2" className="slider__slide slider__slide--slide2"/>
                <img src={PostujDark} alt="slide_3" className="slider__slide slider__slide--slide3"/>
        </div>

    );
}

export default PostujSlider;