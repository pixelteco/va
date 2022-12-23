import React, { Component } from "react";
import Slider from "react-slick";
import "./Rarity.css";
import RarityCard from "./RarityCard";
import data from "./Data";

export default class RaritySection extends Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      rows: 2,
      slidesToShow: 4,
      slidesToScroll: 2,
      
      arrows: true,
      infinite: true,
      draggable: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container-fluid slider-container">
        {/* <div className="d-flex justify-content-center" Style="color:#ADEFD1;">
          <p className="fs-1 " Style="color:#ADEFD1;">
            Rarity
          </p>
        </div> */}
        <Slider {...settings}>
          {data.map((data) => {
            return (
              <div>
                <RarityCard
                  image={data.image}
                  rarity={data.rarity}
                  name={data.name}
                  info={data.info}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
