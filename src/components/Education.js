import React from "react";

const Education = () => (
  <div className="row education" id="education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <p className="info" style={{ fontWeight: "bold" }}>
            Undergraduate in Computer Science and Technology
            <span>&bull;</span>
            <em className="date">September 2014 - June 2019</em>
          </p>
          <span style={{ fontWeight: "bold" }}>
            Xi’an Jiaotong—Liverpool University (XJTLU)
          </span>{" "}
          Suzhou, China
          <ol>
            <li>
              Departments of Electrical and Electronic Engineering and Computer
              Science BEng Computer Science and Technology GPA:3.78/4.00
            </li>
            <li>
              Top 1 student in the department Academic Excellence Reward
              (2016-2017) National Scholarship (Year 2)
            </li>
            <li>
              Accepted paper of 3st ACM/IEEE International Conference on
              Internet-of-Things Design and Implementation (IoTDI), 2018, as the
              first/contact author.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
