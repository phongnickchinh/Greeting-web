import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const SAVED_HASH = "bb9ebe362eb4dab784f16c6bf73a22f8ef8089a62c330d1d7045d47e0c02cf51"; // lười làm backend nên hash mật khẩu luôn ở đây, ai giỏi thì crack mà vào

const hashPassword = async (password) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

const AuthScreen = ({ onAuthSuccess }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputHash = await hashPassword(input);
    if (inputHash === SAVED_HASH) {
      onAuthSuccess();
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", background: "#f8f9fa" }}>
      <h2>bạn cần nhập mật khẩu đề vào</h2>
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
