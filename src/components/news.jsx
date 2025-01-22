import React from "react";
import { Button, Card, Image } from "react-bootstrap";

function News({ d }) {
  return (
    <div className="row p-2">
      <div className="col-12">
        <div className="row mb-3 align-items-center">
          <div className="col-xl-6 d-flex gap-2 align-items-center">
            <Image
              src={d.icon}
              alt="icon"
              style={{ width: "50px", height: "50px" }}
            />
            <h2 className="text-topic">{d.title}</h2>
          </div>
          <div className="col-xl-6 d-flex justify-content-center justify-content-xl-end">
            <Button variant="outline-primary" className="all-button">
              ดูทั้งหมด
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6">
            {d.details_1?.map((detail, index) => (
              <Card
                className="card-news mb-3 d-flex flex-column flex-md-row"
                key={index}
              >
                <div className="card-image-container flex-shrink-0">
                  <Image
                    className="img-news"
                    src={detail.img}
                    alt="news"
                    fluid
                  />
                </div>

                <div className="d-flex flex-column justify-content-start p-3">
                  <Button variant="light" className="button-news mb-2">
                    {detail.type}
                  </Button>
                  <p className="fw-bold">{detail.subTitle}</p>
                  <p className="small text-secondary">{detail.details}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="col-12 col-lg-6">
            {d.details_2?.map((detail, index) => (
              <Card
                className="card-news-2 mb-3 d-flex flex-column flex-md-row"
                key={index}
              >
                <div className="card-image-container flex-shrink-0">
                  <Image
                    className="img-news-2"
                    src={detail.img}
                    alt="news"
                    fluid
                  />
                </div>

                <div className="d-flex flex-column justify-content-start p-3">
                  <Button variant="light" className="button-news mb-2">
                    {detail.type}
                  </Button>
                  <p className="fw-bold">{detail.subTitle}</p>
                  <p className="small text-secondary">{detail.details}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
