import React from 'react'
import Header from './HeaderSignIn'
import Footer from './FooterSignIn'
import MainPage from './MainPage'
function App(){
  return(
    <div className="container-fluid">
      <Header />
      <MainPage id="MainPage"/>
      <Footer />
    </div>
  )
}
export default App;
