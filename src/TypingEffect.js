import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, start, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  console.log("displayedText", displayedText);

  useEffect(() => {
    if (!start) return;

    let index = 0;

    let displayedTexts = "";
    const interval = setInterval(() => {
      if (index <= text.length - 1) {
        displayedTexts = displayedTexts + text[index];
        setDisplayedText(displayedTexts);
        index++;
        console.log("index", index);
        console.log("text[index]", text[index]);
        // console.log("displayedText", displayedText);
        console.log("displayedTexts:", displayedTexts);
      } else {
        // Đã hiển thị hết đoạn văn bản
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <div
      style={{
        paddingLeft: "20px",
        marginTop: "30px",
      }}
    >
      {displayedText}
    </div>
  );
};

export default TypingEffect;
