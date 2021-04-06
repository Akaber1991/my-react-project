import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
// import Content from './content/content.js';
import Footer from '../../parts/footer/footer.js';

class Home extends React.Component{
  render(){
    return(
      <div>
      <Header />
      <Footer />
      </div>
  )}
}
export default Home;


// function App() {
//     return (
//   <div className="Home">
//     <Head/>
//   </div>
// );
// }
//
// export default App
