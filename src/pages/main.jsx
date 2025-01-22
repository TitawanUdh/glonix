import React from "react";
import imgLine from "../images/images/line.png";
import { Image } from "react-bootstrap";
import Search from "antd/es/input/Search";
import MyTopic from "./my-topic";

function MainPage() {
  return (
    <div className="col-12 p-5 w-100 bg-main">
      <div className="p-xl-5 p-sm-1">
        <div className="d-flex gap-2 flex-column flex-md-row">
          <div className="col-xl-4 col-md-5 col-12 order-sm-1 pt-5">
            <div className="w-100">
              <p className="text-green">Lorem Ipsum is simply dummy.</p>
              <span className="text-main">
                learn anytime, anywhere with{" "}
                <span className="text-green-main">Lorem</span>
              </span>
              <div className="d-flex justify-content-center p-2">
                <Image className="img-line" src={imgLine} />
              </div>
              <div>
                <Search
                  className="search"
                  placeholder="ค้นหาหลักสูตร"
                  enterButton="ค้นหา"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-7 col-12 order-sm-2 pt-5">
            <div className="col-12">
              <div className="d-flex gap-2">
                <div className="col-8 box-1 p-4 text-white">
                  <p className="text-box-1">
                    Generative AI and ChatGPT: Design Thinking Edition
                  </p>
                  <p className="text-box-2">
                    ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI
                  </p>
                </div>
                <div className="col-2 box-2 d-flex justify-content-center align-items-start pt-4">
                  <p className="text-box-3">
                    Generative ChatGPT: UX Design Edition
                  </p>
                </div>

                <div className="col-2 box-3 d-flex justify-content-center align-items-start pt-4">
                  <p className="text-box-3">UX Accelerator Bundle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MyTopic />
      </div>
    </div>
  );
}

export default MainPage;
