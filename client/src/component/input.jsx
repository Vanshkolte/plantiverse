import React, { useState } from "react";
import axios from "axios";
import { LuUploadCloud } from "react-icons/lu";
import Potato from "/assets/plants/potatoo.png";
import groundnut from "/assets/plants/groundnut.png";
import tomata from "/assets/plants/tomata.png";
import pepper from "/assets/plants/pepper.png";
import blackgram from "/assets/plants/blackgram.png";

function Input() {
  const [image, setImage] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState("");
  const [per, setPer] = useState(0);
  const [url, setUrl] = useState("");

  const onFileChange = (event) => {
    const uploadedImage = event.target.files[0];
    setSelectedFile(uploadedImage);
    if (!uploadedImage) return;
    setImage(URL.createObjectURL(uploadedImage));
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios.post(`http://localhost:8000/predict/${url}`, formData).then((response) => {
      const obj = response.data;
      setData(obj.class);
      setPer(obj.confidence);
    });
  };

  const clearData = () => {
    setSelectedFile(null);
    setImage(false);
    setData("");
    setPer(0);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8">Give it a try</h1>
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-xl font-semibold mb-4">Select a plant</h2>
        <div className="flex gap-4">
          <button onClick={() => setUrl('potato')} className=" bg-gray-400 rounded-full p-2 active:bg-gray-200" title="potato">
            <img className="w-16 h-16" src={Potato} alt="" />
          </button>
          <button onClick={() => setUrl('tomato')} className="bg-gray-400 rounded-full p-2 active:bg-gray-200" title="tomato">
            <img className="w-16 h-16" src={tomata} alt="" />
          </button>
          <button onClick={() => setUrl('pepper')} className="bg-gray-400 rounded-full p-2 active:bg-gray-200" title="pepper">
            <img className="w-16 h-16" src={pepper} alt="" />
          </button>
          <button onClick={() => setUrl('groundnut')} className="bg-gray-400 rounded-full p-2 active:bg-gray-200" title="groundnut">
            <img className="w-16 h-16" src={groundnut} alt="" />
          </button>
          <button onClick={() => setUrl('blackgram')} className="bg-gray-400 rounded-full p-2 active:bg-gray-200" title="blackgram">
            <img className="w-16 h-16" src={blackgram} alt="" />
          </button>
        </div>
      </div>
      <input type="button" value="" />
      <div className="flex justify-center items-center gap-8">
        <div className="box1 mr-4">
          {!image && (
            <div className="text-center">
              <p>Upload a photo of your <strong>{url}</strong> plant</p>
              <div className="input-box">
                <LuUploadCloud />
                <span className="ml-2" id="up-text">Click Here for Upload image</span>
                <input
                  className="input"
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                />
              </div>
            </div>
          )}
          {image && <img className="mt-4" id="upload-img" src={image} alt="Uploaded plant" />}
          <div className="flex text-white mt-4 gap-8">
            <button className="btn bg-black" onClick={onFileUpload}>Identify</button>
            <button className="btn bg-black" onClick={clearData}>Clear Data</button>
          </div>
        </div>
        <div className="box2">
          <div className="text2">
            <h2 className="text-xl font-semibold">Result</h2>
            <p><strong>Disease:</strong> {data}</p>
            <p><strong>Confidence:</strong> {(per * 100).toFixed(2)}%</p>
          </div>
          {data && (
            <div className="treat mt-4">
              <h2 className="text-xl font-semibold">Treatment</h2>
              <ul>
                {/* Add treatment list items based on the disease */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Input;
