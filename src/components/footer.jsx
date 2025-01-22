import React from "react";
import { Card, Image } from "react-bootstrap";
import iconLine from "../images/icons/Rectangle 11.png";
function Footer() {
  const data = [
    {
      title: "คอร์สของเรา",
      detail: [
        {
          id: 1,
          title: "Data",
        },
        {
          id: 2,
          title: "Science ",
        },
        {
          id: 3,
          title: "Tech",
        },
        {
          id: 4,
          title: "Business ",
        },
      ],
    },
    {
      title: "เกี่ยวกับเรา",
      detail: [
        {
          id: 1,
          title: "สอนกับเรา",
        },
        {
          id: 2,
          title: "ติดต่อสอบถามเพิ่มเติม ",
        },
        {
          id: 3,
          title: "แจ้งปัญหาเกี่ยวกับระบบ",
        },
        {
          id: 4,
          title: "ช่องทางการร้องเรียน ",
        },
      ],
    },
    {
      title: "ความปลอดภัย",
      detail: [
        {
          id: 1,
          title: "Privacy Policy",
        },
        {
          id: 2,
          title: "Terms and Conditions ",
        },
        {
          id: 3,
          title: "Data Protection Policy Six",
        },
        {
          id: 4,
          title: "Cookie Policy ",
        },
      ],
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing .",
      detail: [
        {
          id: 1,
          title: "199 ม.6 ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230",
        },
      ],
    },
  ];

  return (
    <Card className="footer-bg text-white p-3">
      <Card.Text className="fw-bold logo-text text-sm-center">LOGO</Card.Text>
      <Image src={iconLine} className="fw-bold logo-text" />

      <div className="col-12">
        <div className="row text-sm-center ">
          {data.map((d, i) => (
            <div className="col-xl-3 col-sm-12 mt-3">
              <p className="fw-bold">{d.title}</p>
              {d.detail.map((detail, index) => (
                <p className="fw-light">{detail.title}</p>
              ))}
            </div>
          ))}{" "}
        </div>
        
      </div><p className="fw-bold text-sm-center">ติดต่อเรา</p>{" "}
        <Image src={iconLine} className="fw-bold logo-text" />
        <div className="d-flex justify-content-between col-xl-3 col-sm-12 mt-3">
          <div>Y.I.M Corporation @ 2023. All rights reserved.</div>
          <div>0-3835-4580-4 , 0-3835-2611-6</div>
        </div>
    </Card>
  );
}

export default Footer;
