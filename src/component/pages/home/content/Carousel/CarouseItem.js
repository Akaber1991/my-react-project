import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouseItem extends React.Component{
  render(){
    return (
      // <div id="demo" class="carousel slide" data-ride="carousel">
      //   <ul class="carousel-indicators">
      //     <li data-target="#demo" data-slide-to="0" class="active"></li>
      //     <li data-target="#demo" data-slide-to="1"></li>
      //     <li data-target="#demo" data-slide-to="2"></li>
      //   </ul>
        <Carousel.Item interval={1000}>
        <img
        className={this.props.className}
        src={this.props.src}
        alt={this.props.alt}/>
        <Carousel.Caption>
        <h1>{this.props.captionH}</h1>
        <p>{this.props.captionP}</p>
        </Carousel.Caption>
        </Carousel.Item>

  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
    )
  }
}
export default CarouseItem
