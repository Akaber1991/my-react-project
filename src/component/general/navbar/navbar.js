import React from 'react';
import ReactDOM from 'react-dom';

class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
      <ul class="nav nav-pills">
       <li class="nav-item">
          <a class="nav-link active" href=""><b></b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><b></b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b></b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b></b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b></b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b></b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><b></b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><b></b></a>
        </li>
      </ul>
    );
  }
}

export default navbar;
import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      (this.props.item.level == 1)?
      (<li class="{this.props.item.li_class}">
        <a href="{this.props.item.url}">
          {this.props.item.name}
        </a>
      </li>):
      (<li class="{this.props.item.li_class}">
        <a href="{this.props.item.url}">
          gfdhgkjdhf
        </a>
      </li>)
    );
  }
}

export default ListItem
import React from 'react';
import ReactDOM from 'react-dom';
import ListItem
import myJSON

class ListItems extends React.Component {
  render() {
    const listItems = myJSON.map((jsonPart) =>
    <ListItem item="{jsonPart}" />
);
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default ListItems
