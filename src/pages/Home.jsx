import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Post from '../components/Post'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="homeParentDiv" style={{ width: '100%' }}>
      <Header/>
      <Banner/>
      <Post/>
      <Footer/>
    </div>
  )
}

export default Home
