import React, { useState, useEffect } from "react";
import { Button, message } from "antd";
import { DownOutlined, CloseOutlined } from "@ant-design/icons"; // ใช้ CloseOutlined จาก Ant Design
import imgPersonal from "../images/images/person.png";
import { Image } from "react-bootstrap";
import iconNavMenu from "../images/icons/nav-bar.svg";
import iconLine from "../images/icons/line.svg";

function NavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNav, setIsNav] = useState(false);

  const dataNav = [
    { id: 1, title: "รายวิชา", link: "/subject" },
    { id: 2, title: "ถ่ายทอดสด", link: "/live" },
    { id: 3, title: "กระทู้คำถาม", link: "/question" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (id) => {
    const item = dataNav.find((d) => d.id === id);
    if (item) {
      message.info(`Navigating to: ${item.title}`);
      window.location.href = item.link;
    }
  };

  const toggleNavMenu = () => {
    setIsNav((prev) => !prev);
  };

  const closeNavMenu = () => {
    setIsNav(false); // ปิดเมนูเมื่อคลิกปุ่มปิด
  };

  return (
    <div className="nav-bar" style={navbarStyle}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div style={{ padding: "10px", color: "#00665E", fontSize: "34px" }}>
            LOGO
          </div>
          {!isSmallScreen &&
            dataNav.map((d) => (
              <div className="m-2" key={d.id}>
                <a className="nav-link" href={d.link}>
                  {d.title}
                </a>
              </div>
            ))}
        </div>

        {isSmallScreen ? (
          <Image
            src={iconNavMenu}
            alt="Menu"
            style={{
              paddingRight: "10px",
              width: "30px",
              cursor: "pointer",
            }}
            onClick={toggleNavMenu}
          />
        ) : (
          <div className="d-flex gap-2">
            <Button variant="btn btn-light" className="button">
              ออกจากระบบ
            </Button>
            <Button className="button-personal">
              <Image className="img-button" src={imgPersonal} />
              Siriwat Rachanon
              <DownOutlined />
            </Button>
          </div>
        )}
      </div>

      {/* Fullscreen Nav Menu */}
      {isNav && (
        <div className="overlay-menu">
          <div className="overlay-content">
            {/* ปุ่มปิดเมนู */}
            <Button
              className="close-btn"
              onClick={closeNavMenu}
              style={{
                position: "absolute", // ใช้ absolute เพื่อให้ปุ่มปิดอยู่ในตำแหน่งที่ถูกต้อง
                top: "20px",
                right: "20px",
                border: "none",
                fontSize: "30px",
                cursor: "pointer",
                zIndex: 1001, // เพื่อให้ปุ่มมีลำดับความสำคัญสูงสุดเมื่ออยู่เหนือส่วนอื่น
              }}
            >
              <CloseOutlined />
            </Button>

            <Image src={iconLine} />
            {dataNav.map((item) => (
              <div
                key={item.id}
                className="overlay-item"
                onClick={() => handleMenuClick(item.id)}
                style={{
                  padding: "10px",
                }}
              >
                <div>{item.title}</div>
                <Image src={iconLine} style={{ marginLeft: "10px" }} />
              </div>
            ))}

            <div
              className="button-small p-2 d-flex flex-column"
              style={{ margin: "0", padding: "0", height: "100%" }}
            >
              <div style={{ marginTop: "auto" }}>
                <Button
                  className="button-personal-2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Image
                    className="img-button-2"
                    src={imgPersonal}
                    style={{ marginRight: "10px" }}
                  />
                  <span>Siriwat Rachanon</span>
                  <DownOutlined style={{ marginLeft: "10px" }} />
                </Button>
              </div>
              <div style={{ marginTop: "10px" }}>
                <Button
                  className="overlay-item logout"
                  onClick={() => message.info("Logged out")}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "25px 123px 25px 123px",
                  }}
                >
                  ออกจากระบบ
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const navbarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

export default NavBar;
