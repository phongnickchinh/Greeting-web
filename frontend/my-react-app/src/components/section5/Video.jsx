import { useRef, useState } from "react";

const Video = () => {
  const videoRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setHasPermission(true);
    } catch (error) {
      console.error("Lỗi khi truy cập camera:", error);
      alert("Vui lòng cấp quyền camera trong cài đặt!");
    }
  };

  return (
    <div>
      <h2>Camera trên điện thoại</h2>
      {!hasPermission && <button onClick={startCamera}>Bật Camera</button>}
      <video ref={videoRef} autoPlay playsInline width="100%"></video>
    </div>
  );
};

export default Video;
