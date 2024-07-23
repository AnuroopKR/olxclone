import React, { useContext, useState } from 'react';
import Header from './Header';
import './Create.css';
import { FirebaseContext, AuthContext } from '../store/FirebaseContext';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const uid = user.uid;
    const storage = getStorage();
    const filePath = 'images/' + name;
    const fileRef = ref(storage, filePath);

    try {
      if (image) {
        await uploadBytes(fileRef, image);
        const downloadedURL = await getDownloadURL(fileRef);
        await addDoc(collection(firebase.firestore(), 'products'), {
          productName: name,
          category: category,
          price: price,
          uid: uid,
          url: downloadedURL,
        });
        navigate('/');
      } else {
        console.error("No image selected");
      }
    } catch (error) {
      console.error("Error uploading image or adding document: ", error);
    }
  };

  return (
    <>
      <Header />
      <div>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="fname"
              name="Name"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="fname"
              name="category"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="fname"
              name="Price"
            />
            <br />
            <br />
            <img
              alt="Posts"
              width="200px"
              height="200px"
              src={image ? URL.createObjectURL(image) : ""}
            />
            <br />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <br />
            <button type="button" className="uploadBtn" onClick={handleSubmit}>
              Upload and Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
