import { useRef, useEffect, useState } from 'react';
import './App.css'
import Webcam from "react-webcam";
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const  App = () => {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const[loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //   startPrediction();
  // },[]);

let interval;
  const startPrediction = async () => {
    const model = await cocoSsd.load();
    setLoading(false);

    setInterval(() => {
      detect(model);
    }, 100);
  }

  const detect = async (model) => {

    if(webcamRef && webcamRef.current && webcamRef.current.video){

    const video = webcamRef.current.video;
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;
    const predictions = await model.detect(video);
    
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(
  0,
  0,
  canvasRef.current.width,
  canvasRef.current.height
);
    drawRect(predictions, ctx);

    }
  };

  const drawRect = (predictions, ctx) => {
    predictions.forEach(prediction => {
      const [x, y, width, height] = prediction.bbox;
      const text = prediction.class;

      ctx.strokeStyle = 'green';
      ctx.font = '18px Arial';
      
      ctx.fillStyle = 'green';
      ctx.fillText(text, x, y);
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.stroke();

      // console.log(prediction);
    });
  }


  return (
      <div className='parentContainer'>
        <h1 className='appTitle'>Real-Time Object Detection</h1>
        {loading? <span>Loading Model...</span>: ""}
        <div className='videoWrapper'>
        <Webcam ref={webcamRef} onUserMedia={startPrediction} />
        <canvas ref={canvasRef}/>
        </div>
      </div>
  )
}

export default App;
