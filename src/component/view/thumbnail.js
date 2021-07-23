import React from "react";
import { thumbnail } from "../../data/thumbnail";

export default function Thumbnail({ title }) {
  return (
    <div className="container-fluid mt-5 thumbnail-container">
      <h3 className="title mb-0 mb-3">{title}</h3>

      <div className="row">
        {thumbnail.map((data, index) => {
          return (
            <div
              className={`col-lg-3 col-sm-6 mt-3  ${
                thumbnail.length -1 !== index ? "pr-0" : ""
              } parent${index}`}
              key={index}
            >
              <div className="card p-3 h-100">
                <div className="w-100 ">
                  <div className={`float-left h-100 yCenter`}>{data.icon}</div>
                  <div
                    style={{ fontSize: "12px", fontWeight: "bold" }}
                    className="float-right h-100 yCenter percent"
                  >
                    {data.percent}
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="w-100 mt-1">
                  <div className="value mt-2">{data.value}</div>
                  <div className="name mt-1">{data.name}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
