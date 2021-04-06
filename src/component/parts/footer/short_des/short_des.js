import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import './short_des.css';

class ShortDesc extends React.Component{
  render(){
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>רייף מסעדה טאבון ובית קפה</Card.Title>
          <Card.Text>
            <p><i class="fa fa-map-marker"></i> אבא חושי,עספיא</p>
            <p id="place" class="mx-auto w-50">להזמנת מקום:</p>
            <p><i class="fa fa-phone"></i> 04-887-4322</p>
            <p><i class="fa fa-envelope"></i> tabon.reef@gmail.com</p>
            <p><i class="fa fa-clock"></i> שעות פעילות</p>
            <p>10:00-22:00</p>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default ShortDesc;
