import React from "react";
import "./ScrollingImages.css"; // Import file CSS

const images = [
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6387014498527_682f5831c9a716375a182f2eef355425.jpg?alt=media&token=b89834f9-47a6-43e0-b9fa-0af8cf8c7c9b",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6387014510164_dff01fc323ec064c5ddab6b09e04a3ba.jpg?alt=media&token=1013ddd9-b0d5-4dcf-bf89-1bfd4bb20b5f",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6387014528764_72e992dcfa9b5249b0a238b003b00999.jpg?alt=media&token=0497bb22-62ac-4806-9f5c-fdccf0dc0b5d",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6387015758403_7f3487ac87d70aa97bf4da5041ec0217.jpg?alt=media&token=7cd8f293-0842-42a1-9350-12bb1bab38fa",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6387015769993_2d3f2b1c0c2e6b2d1f5b3d2f3b1c0c2e.jpg?alt=media&token=5f7b7b7b-9d0c-4d4d-8a7b-3b7b7b7b7b7b",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz4384976179728_753f90386951220278c6261fcdfc0920.jpg?alt=media&token=ea719c2f-8dbc-41d3-a7e1-f7b87d06e8f0",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz4714627788561_3bf7883e75605d0e251eb6ed7c11319d.jpg?alt=media&token=ea8103a2-1a92-45c2-a291-522b0ad054f9",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz4714657993353_647e08b97e0ae281d835b89b7446d237.jpg?alt=media&token=cebdef1f-2451-43e6-a3b7-7b1cbf8e9e36",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz5567581476107_3a3791dbf61a53fe37431c21beef4359.jpg?alt=media&token=5308c3d5-b936-4c49-806d-9f26d1421ef2",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6388032180290_7143d6f41bd2f29534d87d1dd50ac37f.jpg?alt=media&token=f14a1d0b-b997-45c3-8662-c805c4d7ef91",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6388032212726_65c92ffbacfb24ae1e64156228e100fa.jpg?alt=media&token=aff3452d-8ad3-467b-8052-a204fdec181c",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6388032218725_c922ccb0502f23a0fdbac759928ad91c.jpg?alt=media&token=7c72d50c-461e-46b1-bd50-c7f5c7294ae8",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6388032213519_779dac21a0aefe3e1bd45ef6a742c8f5.jpg?alt=media&token=445b3aaf-ea64-4bf8-80b4-b8b17cba81fc",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6388032207629_b22b9baefed1ca0e69f17812d99dc557.jpg?alt=media&token=e740fcaa-a432-4a56-b411-e85e0b2f7c1e",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6388032185791_2bac8437b28f0739d10fd7937f5c549d.jpg?alt=media&token=5f6cfe11-e301-4bdb-ac59-b001be28218c",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6388032190783_ddd5d96fbaecd8006395623c5e904f7a.jpg?alt=media&token=60450b74-6ce8-422a-9b62-70bb6d7c5e4e",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6388032196588_c0026d5df4158685a4d8929fbf3c367b.jpg?alt=media&token=d77f0d28-445c-46b0-9317-65970ea1677f",
    "https://firebasestorage.googleapis.com/v0/b/greeting-card-web.firebasestorage.app/o/images%2Fz6388032193479_e6771d4da925185ecc4c3fdcca7d3a9c.jpg?alt=media&token=0f04de11-fbd6-46e6-b9ae-0c951467f979",


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
