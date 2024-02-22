import React from 'react'
import {useSwiper} from "swiper/react"
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from '../../utils/common';
import { register } from 'swiper/element/bundle';

register();


const Residencies = () => {
  return (
    <section className="r-wrapper">
   <div className="paddings innerwidth r-container">
      <div className="r-head flexColstart">
      <span className="orangeText">BestChoices </span>
      <span className="primaryText">Popular Residencies</span>

      </div>
      <swiper-container slides-per-view="1">
      {/* <SliderButtons/> */}
        {data.map((card, i)=>(
            <swiper-slide key={i}>
            <div className="flexColStart r-card" style={{paddingBottom: 20}}>
              <img src={card.image} alt="home" />


              <span className="secondaryText r-price">
              <span style={{color: "orange"}}>$</span><span>{card.price}</span>
              </span>
              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
            </swiper-slide>
        ))
      }
      </swiper-container>
   </div>
    </section>
  )
}

export default Residencies


const SliderButtons = ()=>{
  const swiper = useSwiper();
  return (
    <div className="flexCenter  r-button">
      <button onClick={()=>swiper.slidePrev()}>&lt</button>
      <button  onClick={()=>swiper.slideNext()}>&gt</button>
    </div>
    
  );
};