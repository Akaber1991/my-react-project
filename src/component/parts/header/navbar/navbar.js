import React from 'react';
import {MenuItems} from './menuitems';
import './navbar.css';

class Navbar extends React.Component {
  state={ clicked: false }

  handleClick = () =>{
  this.setState({ clicked: !this.state.clicked})
  }

  render(){
    return(
      <nav className="NavbarItems sticky=top col-12">
            <div className="menu-icon" onClick={this.handleClick}>
              <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-ioxhost'}></i>
            </div>
            <ul className='nav nav-pills justify-content-center fixed-top pt-4'onClick={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              {MenuItems.map((item, index) =>{
                return (
                  <li className='nav-item' key={index}>
                    <a className={item.cName} href={item.url} >
                      <div dangerouslySetInnerHTML={{__html:item.title}}></div>
                    </a>
                  </li>
                )
              })}
           </ul>
      </nav>
          )
        }
}
export default Navbar
