import React, { useContext, useEffect, useState } from 'react';
import Heart from '../assets/Heart';
import './Post.css';
import postImg from '../assets/R15V3.jpg';
import { FirebaseContext } from '../store/FirebaseContext';
import { PostContext } from '../store/postContext';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const { postDetails, setPostDetails } = useContext(PostContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshots = await firebase.firestore().collection('products').get();
      const allPost = snapshots.docs.map((product) => ({
        ...product.data(),
        id: product.id
      }));
      setProducts(allPost);
      console.log("docs", allPost);
    };

    fetchProducts();
  }, [firebase]);

  const handleCardClick = (product) => {
    setPostDetails(product);
    navigate("view");
  };

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products && products.map((product) => (
            <div
              className="card"
              key={product.id}
              onClick={() => handleCardClick(product)}
            >
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src={product.url} alt={product.productName} />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name">{product.productName}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={postImg} alt="YAMAHA R15V3" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name">YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
