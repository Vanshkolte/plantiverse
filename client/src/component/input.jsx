import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./input.css";
import { LuUploadCloud } from "react-icons/lu";
import Potato from "/assets/plants/potatoo.png";
import groundnut from "/assets/plants/groundnut.jpeg";
import tomata from "/assets/plants/tomata.jpeg";
import pepper from "/assets/plants/pepper.jpg";
import blackgram from "/assets/plants/blackgram.png";
function Input() {
  const [image, setImage] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState([]);
  const [per, setPer] = useState([]);
  const [err, setErr] = useState(null);
  const [url, setUrl] = useState('');

  const onFileChange = (event) => {
    const uploadedImage = event.target.files[0];
    setSelectedFile(uploadedImage);
    if (!uploadedImage) return;
    setImage(URL.createObjectURL(uploadedImage));
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post(`http://localhost:8000/predict/${url}`, formData)
      .then((response) => {
        console.log(response);
        const obj = response.data;
        // setData(JSON.stringify(obj));
        setData(obj.class);
        setPer(obj.confidence);
      });
  };

  const clearData = () => {
    setSelectedFile(null);
    setImage(false);
    setData(null);
    setPer(null);
  };

  return (
    <>
      <h1 id="head">Give it a try </h1>
      <div className="buttons">
        <h1 id="sel">Select a plant</h1>
        <div className="btns">
          <button onClick={() => setUrl('potato') }> <img className="w-24" src={Potato} alt="" /></button>
          <button onClick={() => setUrl('tomato') }><img className="w-24" src={tomata} alt="" /></button>
          <button onClick={() => setUrl('pepper') }><img className="w-24" src={pepper} alt="" /></button>
          <button onClick={() => setUrl('groundnut') }><img className="w-24" src={groundnut} alt="" /></button>
          <button onClick={() => setUrl('blackgram') }><img className="w-24" src={blackgram} alt="" /></button>
        </div>
      </div>
      <input type="button" value="" />
      <div className="homepage">
        <div
          className="box1"
        >
          {!image && (
            <div>
              <p style={{textAlign:"center"}}>Upload a photo of your <strong>{url} plant </strong></p>
              <div className="input-box">
                <span>
                  <LuUploadCloud />
                </span>
                <span id="up-text">Click Here for Upload image</span>
                <input
                  className="input"
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                />
              </div>{" "}
            </div>
          )}
          {image && <img id="upload-img" src={image} alt="Uploaded plant" />}
          <div className="btn-box">
            <button id="btni" onClick={onFileUpload}>
              Identify
            </button>
            <button id="btni" onClick={clearData}>
              Clear Data
            </button>
          </div>
        </div>
        <div
          className="box2"
        >
          <div className="text2">
            <h1 id="h1">Result</h1>
            <span id="d">
              {" "}
              <strong>Disease :</strong> {data}
            </span>{" "}
            <br />
            <span id="c">
              <strong>Confidence :</strong> {(per * 100).toFixed(2)}%
            </span>
          </div>
          {data == "Anthracnose" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Fungicide Application</li>
              </ul>
            </div>
          )}
          {data == "Leaf Crinckle" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Control Aphid Vectors</li>
                <li>Plant Virus-free Seed</li>
              </ul>
            </div>
          )}
          {data == "Powdery Mildew" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Fungicide Application</li>
                <li>Air Circulation</li>
              </ul>
            </div>
          )}
          {data == "Yellow Mosaic" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Control Whitefly Vectors</li>
                <li>Plant Virus-Free Seed</li>
              </ul>
            </div>
          )}
          {data == "Early Blight" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Proper Fertilization</li>
                <li>Irrigation</li>
                <li>Management of other pests</li>
              </ul>
            </div>
          )}
          {data == "Late Blight" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Apply Fungicides</li>
                <li>Management of other pests</li>
              </ul>
            </div>
          )}
          {data == "Mosaic Virus" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Control Whitefly Vectors</li>
                <li>Plant Virus-Free Seed</li>
              </ul>
            </div>
          )}
          {data == "YellowLeaf Curl Virus" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
                <li>Control Whitefly Vectors</li>
                <li>Plant Virus-Free Seed</li>
              </ul>
            </div>
          )}
          {data == "Bell Bacterial Spot" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Copper Sprays</li>
              </ul>
            </div>
          )}
          {data == "Early Leaf Spot" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Apply Fungicides or Neem Oil</li>
              </ul>
            </div>
          )}
          {data == "Early Rust" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts</li>
              </ul>
            </div>
          )}
          {data == "Late Leaf Spot" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Crop rotation with non-host crops preferably cereals</li>
              </ul>
            </div>
          )}
          {data == "Nutrition Deficiency" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Application of 250kg/Ha Gypsum</li>
              </ul>
            </div>
          )}
          {data == "Rust" && (
            <div className="treat">
              <h1>Treatment</h1>
              <ul>
                <li>Remove Affected Parts
                  
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Input;