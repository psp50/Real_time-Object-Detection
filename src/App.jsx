import { useRef, useEffect, useState } from 'react';
import './App.css'
import Webcam from "react-webcam";
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const  App = () => {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  // const [detectionmap, setDetectionmap] = useState({});
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
const personCount = predictions.filter(
  prediction => prediction.class === "person"
).length;

if (personCount > 1) {
  alert("Multiple Persons Detected");
}

const phoneDetected = predictions.some(
  prediction => prediction.class === "cell phone"
);

if (phoneDetected) {
  alert("Cell Phone Detected");
}
    }
  };

  const drawRect = (predictions, ctx) => {
    predictions.forEach(prediction => {
      const [x, y, width, height] = prediction.bbox;
      const text = prediction.class;
      // handledetection(text);

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


  // const handledetection = (predictions) => {
  //   let obj = {...(detectionmap) || {}};
  //   if(detectionmap?.[predictions]){
  //     obj[predictions]++;
  //   } else {
  //     obj[predictions] = 1;
  //   }
  //   setDetectionmap(obj);
  //   let count = obj?.['person']
  //   if(obj?.['person'] > 1){
  //     alert("Multiple Persons Detected");
  //   }

  //   if(predictions === 'cell phone'){
  //     alert("Cell Phone Detected");
  //   }
  // }


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
