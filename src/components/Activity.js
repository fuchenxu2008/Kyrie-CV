import React from "react";

const Activity = () => (
  <div className="row work" id="activities">
    <div className="three columns header-col">
      <h1>
        <span style={{ lineHeight: "50px" }}>Extracurricular Activities</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Freescale Cup 2016 & 2017 </h3>
          <p className="info">
            <span style={{ fontWeight: "bold" }}>
              Team Leader & Technical Supporter
            </span>
            <span>&bull;</span>
            <em className="date">Jan. 2016 – Aug. 2017</em>
          </p>

          <ol>
            <li>
              Launched and organized the first student team at XJTLU to join the
              competition and won the national second prize.
            </li>
            <li>
              Collaborated with companies to advance technology skills and
              provided technical support for the competition teams in MCU
              development and camera algorithm.
            </li>
          </ol>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>XJTLU Innovation Lab</h3>
          <p className="info">
            <span style={{ fontWeight: "bold" }}>Founder</span>
            <span>&bull;</span>
            <em className="date">July 2015 – Present</em>
          </p>

          <ol>
            <li>
              Formalized mission statement and strategic plan to bring clarity
              and focus on the organization and developed the organization to 50
              members.
            </li>
            <li>
              Introduced social resources for the technical training for the
              members to inspire students’ innovation and to deep learning
              subjects such as mechanical and electrical engineering.
            </li>
            <li>
              Promoted and branded XJTLU’s departments of electrical engineering
              and computer science for school’s higher recognition.
            </li>
          </ol>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Student Committee at XJTLU</h3>
          <p className="info">
            <span style={{ fontWeight: "bold" }}>Student Representative</span>
            <span>&bull;</span>
            <em className="date">Sep. 2016 – Mar. 2017</em>
          </p>

          <ol>
            <li>
              Attended department’s weekly meetings to represent students to
              give feedback on courses’ structure and quality.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default Activity;
