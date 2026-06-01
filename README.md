#  Real-Time Object Detection using TensorFlow.js & React

 **Live URL:**  
https://real-time-object-detection-six.vercel.app/

---

##  Overview

A real-time object detection web application built with **React**, **TensorFlow.js**, **COCO-SSD**, and **React Webcam**.

The application uses your device's webcam to detect objects in real time, draw bounding boxes around them, and trigger alerts for specific scenarios such as **multiple people detection** and **mobile phone detection**.

---

##  Features

✅ Real-time object detection using COCO-SSD  
✅ Live webcam feed integration  
✅ Bounding box visualization with labels  
✅ Detection of multiple persons  
✅ Mobile phone detection alerts  
✅ Browser-based inference (No Backend Required)  
✅ Fast and lightweight React application  

---

##  Tech Stack

- React.js
- TensorFlow.js
- COCO-SSD Model
- React Webcam
- HTML5 Canvas
- CSS3

---

## How It Works

1. User grants webcam access.
2. COCO-SSD model is loaded into the browser.
3. Frames are captured from the webcam every 100ms.
4. The model analyzes each frame and returns detected objects.
5. Bounding boxes and labels are drawn on a canvas overlay.
6. Alerts are triggered when:
   - 👥 More than one person is detected.
   - 📱 A mobile phone is detected.

---

##  Project Structure

```bash
src/
├── App.jsx
├── App.css
├── main.jsx
