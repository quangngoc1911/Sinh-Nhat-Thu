import React from "react";
import "./css/style.css";

function HinhAnh() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="box">
        <ul class="minbox">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ol class="maxbox">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
      <audio id="player" autoPlay loop>
        <source src="../music/music.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}

export default HinhAnh;
