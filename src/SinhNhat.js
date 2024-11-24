import React from "react";
import "./SinhNhat.css";

function SinhNhat() {
  const avatarStyle = {
    width: "260px",
    height: "260px",
    boxShadow: "0 0 30px #eee",
    borderRadius: "50%",
    border: "5px solid rgb(255, 17, 0)",
  };

  const containerStyle = {
    background:
      "url(https://hanoispiritofplace.com/wp-content/uploads/2017/07/hinh-anh-sinh-nhat-dep-nhat-62.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
  };

  return (
    <div style={containerStyle} className="container">
      <img
        src="../image/MyAvatar.jpg"
        alt=""
        style={avatarStyle}
        className="avatar"
      />
      <h1 className="birthday-text">Happy Birthday</h1>
      <h1 className="birthday-text">Em bé Uyên</h1>
    </div>
  );
}

export default SinhNhat;
