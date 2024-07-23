import React, { useContext, useEffect, useState } from 'react'
import Heart from '../assets/Heart'
import './Post.css'
import postImg from '../assets/R15V3.jpg'
import { FirebaseContext } from '../store/FirebaseContext'

const Post = () => {

  const {firebase}=useContext(FirebaseContext)
  const [products,setProducts]=useState([])

  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshots)=>{
      const allPost=snapshots.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id
        }
      })
      console.log("docs",allPost);
    })
  })


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={postImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={postImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
