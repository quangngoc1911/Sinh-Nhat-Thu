import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, start, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!start) return;

    let index = 0;
    let displayedPlainText = ""; // Chỉ chứa ký tự văn bản (không chứa HTML)
    const interval = setInterval(() => {
      if (index <= text.length - 1) {
        // Kiểm tra ký tự hiện tại có phải là thẻ HTML không
        if (text[index] === "<") {
          // Tìm toàn bộ thẻ HTML (như <br />)
          const endTagIndex = text.indexOf(">", index);
          const htmlTag = text.slice(index, endTagIndex + 1);
          displayedPlainText += htmlTag; // Thêm thẻ HTML vào chuỗi
          index = endTagIndex + 1; // Bỏ qua phần HTML
        } else {
          // Thêm ký tự văn bản bình thường
          displayedPlainText += text[index];
          index++;
        }

        // Cập nhật văn bản hiển thị
        setDisplayedText(displayedPlainText);
      } else {
        clearInterval(interval); // Hoàn tất hiển thị
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, start, speed]);

  return (
    <div
      style={{
        paddingLeft: "20px",
        marginTop: "30px",
        wordWrap: "break-word",
        overflowWrap: "break-word",
        whiteSpace: "pre-line", // Giữ các ký tự xuống dòng
      }}
      dangerouslySetInnerHTML={{ __html: displayedText }} // Hiển thị với thẻ HTML
    />
  );
};

export default TypingEffect;
