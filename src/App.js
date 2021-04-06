import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./component/pages/home/home";
// import AboutUs from "./component/pages/home/home";
// import Menu from "./component/pages/home/home";
// import BusinessMeals from "./component/pages/home/home";
// import Gallery from "./component/pages/home/home";
// import Articles from "./component/pages/home/home";
// import Opinion from "./component/pages/home/home";
// import ContactUs from "./component/pages/home/home";

class App extends React.Component{
  render(){
    return(
      <div>
      <Home />
      </div>
      // <main>
      //  <switch>
      //    <Route path="/דף הבית" component={Home} exact />
      //    <Route path="/הסיפור" component={AboutUs} />
      //    <Route path="/תפריט" component={Menu} />
      //    <Route path="/עסקיות" component={BusinessMeals} />
      //    <Route path="/גלריה" component={Gallery} />
      //    <Route path="/כתבו עלינו" component={Articles} />
      //    <Route path="/חוות דעת" component={Opinion} />
      //    <Route path="/צור קשר" component={ContactUs} />
      //  </switch>
      // </main>
  )}
}
export default App;
