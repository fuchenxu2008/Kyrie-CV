import React from "react";

const Work = () => (
  <div className="row work" id="internship">
    <div className="three columns header-col">
      <h1>
        <span>Internship</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Suzhou Youdu Smart Technology Co. LTD</h3>
          <p className="info">
            <span style={{ fontWeight: "bold" }}>
              Co-founder & Embedded system developer
            </span>
            <span>&bull;</span>
            <em className="date">Oct. 2015 – Mar. 2017</em>
          </p>

          <ol>
            <li>
              Fund-raised 5 million RMB to establish entrepreneur team for smart
              home.
            </li>
            <li>
              Analyzed the market and pricing strategy and attended more than
              ten smart home companies exhibitions in different specific areas and visiting relevant
              enterprises such as BoLian Tech, Ltd. and wrote
              the proposal for product design.
            </li>
            <li>
              Researched and developed embedded hardware based on STM K60
              series, S3C2440,RT5350, and esp serise.
            </li>
            <li>Experienced on WIFI, ZigBee development.</li>
          </ol>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Shanghai Rt-Thread electronic technology co. LTD </h3>
          <p className="info">
            <span style={{ fontWeight: "bold" }}>
              Embedded system developer
            </span>
            <span>&bull;</span>
            <em className="date">Feb. 2017 – Dec. 2017</em>
          </p>

          <ol>
            <li>
              Developed chip series combined with STM32F4, NXP after
              familiarizing with RT-thread open-source operating system software
              components.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
