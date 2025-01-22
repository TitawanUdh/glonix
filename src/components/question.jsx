import React, { useState } from "react";
import { Input } from "antd";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { FaBold, FaItalic, FaList, FaStrikethrough } from "react-icons/fa";
import { ImParagraphLeft, ImParagraphRight, ImUnderline } from "react-icons/im";

function Questions({ d, i }) {
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isList, setIsList] = useState(false);
  const [textIndent, setTextIndent] = useState(0);
  const [content, setContent] = useState("");

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const toggleStrikethrough = () => {
    setIsStrikethrough(!isStrikethrough);
  };

  const toggleList = () => {
    setIsList(!isList);
  };

  const increaseIndent = () => {
    setTextIndent(textIndent + 10);
  };

  const decreaseIndent = () => {
    setTextIndent(textIndent > 0 ? textIndent - 10 : 0);
  };

  return (
    <Row>
      <div className="col-12 col-md-6 d-flex gap-2 align-items-center">
        <Image src={d.icon} alt="icon" />
        <h2 key={i} className="text-topic">
          {d.title}
        </h2>
      </div>

      <Row>
        <Col xl={12} md={12} sm={12}>
          <div className="mt-3 d-flex justify-content-center">
            <Card className="card-question">
              <div>
                <p className="fw-bold mt-2">หัวข้อกระทู้</p>
              </div>
              <div>
                <Input placeholder="หัวข้อกระทู้" />
              </div>
              <div>
                <p className="fw-bold mt-4">เนื้อหา</p>
                <div className="editor-container">
                  <div className="editor-toolbar d-flex flex-wrap align-items-center gap-3">
                    <select
                      id="font-family"
                      value={fontFamily}
                      onChange={handleFontFamilyChange}
                    >
                      <option value="Arial">Arial</option>
                      <option value="Tahoma">Tahoma</option>
                      <option value="Verdana">Verdana</option>
                      <option value="Courier New">Courier New</option>
                    </select>
                    <select
                      id="font-size"
                      value={fontSize}
                      onChange={handleFontSizeChange}
                    >
                      <option value="16px">16px</option>
                      <option value="18px">18px</option>
                      <option value="20px">20px</option>
                      <option value="24px">24px</option>
                    </select>

                    <div onClick={toggleBold}>
                      {isBold ? (
                        <FaBold />
                      ) : (
                        <FaBold className="text-secondary" />
                      )}
                    </div>
                    <div onClick={toggleItalic}>
                      {isItalic ? (
                        <FaItalic />
                      ) : (
                        <FaItalic className="text-secondary" />
                      )}
                    </div>
                    <div onClick={toggleUnderline}>
                      {isUnderline ? (
                        <ImUnderline />
                      ) : (
                        <ImUnderline className="text-secondary" />
                      )}
                    </div>
                    <div onClick={toggleStrikethrough}>
                      {isStrikethrough ? (
                        <FaStrikethrough />
                      ) : (
                        <FaStrikethrough className="text-secondary" />
                      )}
                    </div>
                    <div onClick={toggleList}>
                      {isList ? (
                        <FaList />
                      ) : (
                        <FaList className="text-secondary" />
                      )}
                    </div>
                    <div onClick={increaseIndent}>
                      <ImParagraphRight />
                    </div>
                    <div onClick={decreaseIndent}>
                      <ImParagraphLeft />
                    </div>
                  </div>

                  {/* Wrapping the textarea and button in a flex container */}
                  <div className="d-flex flex-column mt-3">
                    <textarea
                      id="editor"
                      placeholder="พิมพ์ข้อความที่นี่..."
                      style={{
                        fontFamily: fontFamily,
                        fontSize: fontSize,
                        fontWeight: isBold ? "bold" : "normal",
                        fontStyle: isItalic ? "italic" : "normal",
                        textDecoration: `${isUnderline ? "underline" : ""} ${
                          isStrikethrough ? "line-through" : ""
                        }`,
                        listStyleType: isList ? "disc" : "none",
                        paddingLeft: `${textIndent}px`,
                      }}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <Button
                      className="send-button mt-3"
                      onClick={() => alert("ส่งข้อความ: " + content)}
                    >
                      ส่งข้อความ
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </Row>
  );
}

export default Questions;
