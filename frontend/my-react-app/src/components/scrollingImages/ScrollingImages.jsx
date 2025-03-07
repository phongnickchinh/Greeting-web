import React from "react";
import "./ScrollingImages.css"; // Import file CSS

const images = [
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/duy.jpg?alt=media&token=62652c5b-ffb6-4da5-afb8-eb5320a8ef6b",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/duyntay.jpg?alt=media&token=2b5e1ce2-7e8c-410a-861f-667e7afe578e",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/z4197188815634_f784702b77799df2ad0da71649383c7c.jpg?alt=media&token=4a1742a6-cc02-421e-b4cf-bcfc2414886e",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/z4222450788091_2904abd9d980b9d4fcc270e67cb42cc5.jpg?alt=media&token=f4a357df-acc8-4e34-b401-a6b1926decc8",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/z4384976179728_753f90386951220278c6261fcdfc0920.jpg?alt=media&token=1b384593-aade-4f6b-a2f0-a8c5264456d9",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/z4384976185033_2dd56a8dcb31294f5898e0a004280107.jpg?alt=media&token=1aad44c4-3002-46be-a892-3c45994699f9",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/z4714657993353_647e08b97e0ae281d835b89b7446d237.jpg?alt=media&token=fb84ee07-eafb-4254-9e97-cfb9f30b4515"
]; // Danh sách ảnh

const ScrollingImages = () => {
    return (
        <div className="scrolling-container">
            <div className="scrolling-track">
            {/* Nhân đôi ảnh để tạo hiệu ứng lặp vô tận */}
            {[...images, ...images].map((src, index) => (
                <img key={index} src={src} alt={`scrolling-img-${index}`} className="scrolling-img" />
            ))}
            </div>
        </div>
    );
};

export default ScrollingImages;
