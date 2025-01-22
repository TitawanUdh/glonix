import React from "react";
import { Card, Image, ProgressBar } from "react-bootstrap";

function MyCourse({ d, i }) {
  return (
    <div>
      <div className="col-12">
        <div className="col-6">
          <span className="d-flex gap-2">
            <Image src={d.icon} />
            <h2 key={i} className="text-topic">
              {d.title}
            </h2>
          </span>
        </div>
      </div>
      <div className="mt-3 mb-4 col-12">
        <div className="d-flex justify-content-center gap-2 overflow-scroll-md">
          {d.details.map((d1, i1) => (
            <div
              className="col-xl-3"
              style={{ flex: "0 0 auto", maxWidth: "530px" }}
              key={i1}
            >
              <Card className="card-course">
                <Card.Img className="course-img" variant="top" src={d1.img} />
                <Card.Body>
                  <Card.Title className="card-title">{d1.subTitle}</Card.Title>
                  <span className="bottom-section-course">
                    <Card.Text className="card-text mt-5">
                      {d1.percent_text}{" "}
                      <span className="fw-bold">{d1.percent}%</span>
                    </Card.Text>
                    <ProgressBar now={d1.percent} label={`${d1.percent}%`} />
                  </span>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCourse;
