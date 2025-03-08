import { useRef, useState, useEffect } from "react";

const CameraComponent = ({ onCaptureDone }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [captureCount, setCaptureCount] = useState(0);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      const userStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      videoRef.current.srcObject = userStream;
      setStream(userStream);
    } catch (error) {
      console.error("Không thể truy cập camera:", error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  const capturePhoto = () => {
    if (captureCount >= 2) return; // Chỉ cho phép chụp 2 ảnh

    const video = videoRef.current;
    if (!video) return;

    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    // Crop ảnh theo tỷ lệ 1:1 (lấy phần trung tâm)
    const size = Math.min(videoWidth, videoHeight);
    const startX = (videoWidth - size) / 2;
    const startY = (videoHeight - size) / 2;

    // Tạo canvas tạm để crop ảnh 1:1
    const tempCanvas = document.createElement("canvas");
    const ctx = tempCanvas.getContext("2d");
    tempCanvas.width = size;
    tempCanvas.height = size;
    ctx.drawImage(video, startX, startY, size, size, 0, 0, size, size);

    // Resize ảnh theo yêu cầu
    const finalSize = captureCount === 0 ? 768 : 642; // Ảnh 1: 768x768, Ảnh 2: 642x642
    const finalCanvas = document.createElement("canvas");
    const finalCtx = finalCanvas.getContext("2d");
    finalCanvas.width = finalSize;
    finalCanvas.height = finalSize;
    finalCtx.drawImage(tempCanvas, 0, 0, size, size, 0, 0, finalSize, finalSize);

    const imageData = finalCanvas.toDataURL("image/png");
    
    setCapturedImages((prev) => {
      const updatedImages = [...prev, imageData];
      if (updatedImages.length === 2) {
        onCaptureDone(updatedImages);
        stopCamera(); // Dừng camera sau khi chụp xong 2 ảnh
      }
      return updatedImages;
    });

    setCaptureCount((prev) => prev + 1);
  };

  return (
    <div className="camera-fullscreen">
      <video ref={videoRef} autoPlay playsInline className="video-feed"></video>

      <button className="capture-button" onClick={capturePhoto}>
        Chụp {captureCount + 1}/2
      </button>
    </div>
  );
};

export default CameraComponent;
