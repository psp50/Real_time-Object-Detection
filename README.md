Real-Time Object Detection using TensorFlow.js & React

Live URL - https://real-time-object-detection-six.vercel.app/

A real-time object detection web application built with React, TensorFlow.js, COCO-SSD, and React Webcam. The application uses your device's webcam to detect objects in real time, draw bounding boxes around them, and trigger alerts for specific scenarios such as multiple people or mobile phone usage.

->Features
Real-time object detection using COCO-SSD
Live webcam feed integration
Bounding box visualization with labels
Detection of multiple persons
Mobile phone detection alerts
Browser-based inference (no backend required)
Fast and lightweight React application

->Tech Stack
React.js
TensorFlow.js
COCO-SSD Model
React Webcam
HTML5 Canvas
CSS3

->How It Works
User grants webcam access.
COCO-SSD model is loaded into the browser.
Frames are captured from the webcam every 100ms.
The model analyzes each frame and returns detected objects.
Bounding boxes and labels are drawn on a canvas overlay.
Alerts are triggered when:
More than one person is detected.
A mobile phone is detected.
📂 Project Structure
src/
├── App.jsx
├── App.css
├── main.jsx


->Dependencies
{
  "@tensorflow/tfjs": "^latest",
  "@tensorflow-models/coco-ssd": "^latest",
  "react-webcam": "^latest"
}

The COCO-SSD model can detect 80+ object categories including:

Person
Cell Phone
Laptop
Chair
Bottle
Keyboard
Mouse
Book
Backpack
Car
Bicycle

and many more.
