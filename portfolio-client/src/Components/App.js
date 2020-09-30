import React from 'react';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Main from './Layout/Mine'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
