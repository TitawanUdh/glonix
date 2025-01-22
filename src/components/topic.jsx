import React from 'react';
import { Image } from 'react-bootstrap';
import { BsArrowRightSquareFill } from 'react-icons/bs';

function Topic({ d, i }) {
  return (
    <>
      <div>
        <div className="d-flex gap-2 ">
          <Image src={d.icon} />
          <h2 key={i} className="text-topic">
            {d.title}
          </h2>
        </div>

        <div className="mt-3 mb-4 d-xl-flex gap-2 m-0  justify-content-center">
          {d.details.map((d1, i1) => (
            <div className="box-topic p-4 mb-md-2 mb-sm-2 col-xl-3 col-md-12 col-sm-12 " key={i1}>
              <div className="d-flex gap-2 mb-3">
                <Image src={d1.icon} />
                <p className="text-topic-1">{d1.title}</p>
              </div>
              <div className="sub-text-topic">{d1.subTitle}</div>
              <div className="d-flex justify-content-end topic-icon mt-3 ">
                <BsArrowRightSquareFill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Topic;
