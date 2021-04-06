import React from 'react';
import ReactDOM from 'react-dom';
import PicCarousel from './picCarousel';
import CarouseItem from './CarouseItem';
import "./Carousel.css"

class MyCarosel extends React.Component{
  constructor(props){
    super(props);
  }
render(){
  const carouseCompoents=Carouselitems.map(oneitem=>
<Carouselitem
  ClassName={oneitem.imgName}
  src={oneitem.imgsrc}
  alt={oneitem.imgalt}
  caption={oneitem.captionH}
  caption={oneitem.captionP}
  />
  )
  return(
    <Carousel id="mycarousel">
    {carouseCompoents}
    </Carousel>

  );
 }
}

export default MyCarosel
