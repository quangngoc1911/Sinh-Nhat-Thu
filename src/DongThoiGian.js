import React, { useEffect, useState } from "react";
import TypingEffect from "./TypingEffect";
import "./button.css";
import { Box, Button, Stack } from "@mui/material";

function DongThoiGian() {
  const style = {
    width: "200px",
    height: "200px",
    boxShadow: "0 0 30px #eee",
    marginTop: "2rem",
    left: "calc(50% - 100px)",
    borderRadius: "120px",
    border: "5px solid rgb(255, 17, 0)",
    marginRight: "0.5rem",
  };
  const [timeSince, setTimeSince] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [startTyping, setStartTyping] = useState(false);

  const handleImageClick = () => {
    setIsButtonVisible(false);
    setStartTyping(true);
  };

  useEffect(() => {
    const startDate = "2024-10-01T00:00:00"; // Thời gian bắt đầu quen nhau

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const startDateObj = new Date(startDate);
      const timeDiff = currentDate.getTime() - startDateObj.getTime();

      // Tính số giờ, phút, giây từ khoảng cách thời gian tính được
      const days = Math.floor(timeDiff / (1000 * 3600 * 24));
      const hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
      const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeSince({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  // console.log("hello");

  return (
    <div
      style={{
        background: "url(../image/9SHW2XH.jpg)",
        backgroundSize: "cover", // Đảm bảo ảnh nền bao phủ toàn bộ phần tử
        height: "100vh", // Chiều cao của phần tử bằng chiều cao của viewport
        width: "100vw", // Chiều rộng của phần tử bằng chiều rộng của viewport
        margin: 0, // Bỏ margin nếu cần
        padding: 0, // Bỏ padding nếu cần
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {isButtonVisible && (
          <Stack direction="row">
            <img
              src="../image/CILKGax.png" // Thay bằng đường dẫn tới ảnh của bạn
              alt="Click Me"
              style={{ cursor: "pointer", width: "100px", height: "100px" }} // Điều chỉnh kích thước nếu cần
              onClick={handleImageClick}
            />
            <Button onClick={handleImageClick} variant="text">
              Click me
            </Button>
          </Stack>
        )}
        {startTyping && (
          <>
            {/* <audio id="player" autoPlay loop>
              <source src="../music/music.mp3" type="audio/mp3" />
            </audio> */}
            <Stack direction="row" spacing={2}>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TypingEffect
                  text={`Chúc mừng sinh nhật em bé 🥳.<br />  Mong rằng tất cả ước mơ sẽ trở thành hiện thực và<br />em bé sẽ luôn gặp được nhiều may mắn, hạnh phúc 🥰`}
                  start={startTyping}
                  speed={100}
                />
                <div
                  style={{
                    paddingLeft: "20px",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Thời gian bên cạnh em bé:{" "}
                  </div>
                  {timeSince.days} Ngày {timeSince.hours} Giờ{" "}
                  {timeSince.minutes} Phút {timeSince.seconds} Giây
                </div>{" "}
              </Stack>
              <img src="../image/MyAvatar.jpg" alt="" style={style} />
            </Stack>
          </>
        )}
      </div>
    </div>
  );
}

export default DongThoiGian;
