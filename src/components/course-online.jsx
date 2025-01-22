import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";

function CourseCourse({ d, i }) {
  return (
    <Row className=" w-100">
      <Col xl={12}>
        <Row>
          <Col xl={6} md={12} sm={12}>
            <span className="d-flex gap-2">
              <Image src={d.icon} />
              <h2 key={i} className="text-topic">
                {d.title}
              </h2>
            </span>
          </Col>
        </Row>
      </Col>
      <div className="mt-3 mb-4 col-12 p-0">
        <div className="d-flex justify-content-center gap-2 overflow-scroll-container">
          {d.details.map((d1, i1) => (
            <div
              className="col-xl-3 col-md-5 col-sm-5"
              key={i1}
              style={{ flex: "0 0 auto" }}
            >
              <Card className={`card-online-${i1 + 1} p-xl-3 p-md-1 p-sm-1`}>
                <Card.Body className="position-relative">
                  <Button
                    variant="btn btn-outline-light"
                    className={`type-online-${i1 + 1} mt-2 mb-3`}
                  >
                    {d1.type}
                  </Button>
                  <Card.Title className={`text-online-${i1 + 1}`}>
                    {d1.subTitle}
                  </Card.Title>
                  <Card.Text className={`mt-5 text-online-${i1 + 1}`}>
                    {d1.subTitle}{" "}
                  </Card.Text>

                  <div className="d-flex gap-2 bottom-section">
                    <Image className="img-online" src={d1.imgPerson}></Image>
                    <div className={`text-online-${i1 + 1} small `}>
                      <div>{d1.name}</div>
                      <div>{d1.position}</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Row>
  );
}

export default CourseCourse;
