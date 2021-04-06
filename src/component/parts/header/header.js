import React from 'react';
import Navbar from "./navbar/navbar";
import BigLogoImage from "../../general/bigLogoImage/bigLogoImage";
import './header.css';


class Header extends React.Component{
  render(){
    return(
      <div>
      <Navbar />
      <BigLogoImage />
      </div>
  )}
}
export default Header;
