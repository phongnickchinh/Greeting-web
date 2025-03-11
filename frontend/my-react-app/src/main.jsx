import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import sha256 from 'js-sha256';

import wrongSound from "./assets/audio/wrong.mp3";
import trueSound from "./assets/audio/true.mp3";

const SAVED_HASH = "bb9ebe362eb4dab784f16c6bf73a22f8ef8089a62c330d1d7045d47e0c02cf51"; // lười làm backend nên hash mật khẩu luôn ở đây, ai giỏi thì crack mà vào

const hashPassword = (password) => {
  return sha256(password);
};


const AuthScreen = ({ onAuthSuccess }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputHash = await hashPassword(input);
    if (inputHash === SAVED_HASH) {
      const popSound = new Audio(trueSound);
      popSound.play();
      // delay 1s để phát âm thanh xong rồi mới chuyển trang
      setTimeout(() => onAuthSuccess(), 1000);
    } else {
      setError(true);
      setInput("");
      // phát nhạc
      const wrongAudio = new Audio(wrongSound);
      wrongAudio.play();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", background: "#f8f9fa" }}>
      <h2>bạn cần nhập mật khẩu để vào</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập mật khẩu..."
          style={{ padding: "10px", fontSize: "16px", marginBottom: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>Xác nhận</button>
      </form>
      {error && <p style={{ color: "red" }}>Wrong password! Sorry this page is not for you.</p>}
    </div>
  );
};

const Root = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return authenticated ? <App /> : <AuthScreen onAuthSuccess={() => setAuthenticated(true)} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
