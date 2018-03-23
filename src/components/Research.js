import React from "react";

const Research = () => (
  <div className="row work" id="research">
    <div className="three columns header-col">
      <h1>
        <span style={{ lineHeight: "50px" }}>Research & Projects</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>
            Wind-Tunnel Data Monitoring and Control System in Simulated Outdoor
            Environment via WSN Methods
          </h3>
          <p className="info">
            <span style={{ fontWeight: "bold" }}>Team Leader</span>
            <span>&bull;</span>
            <em className="date">May 2017– Present</em>
          </p>

          <ol>
            <li>
              Wind-Tunnel simulated outdoor AAQ situation involving the
              machinery, electronic, wireless sensor networks, and the cloud
              back-end development.
            </li>
            <li>
              Led 5 team members and established the whole imbedded industrial
              control system from MCU, Wi-Fi to cloud and front-end display
              using chip platforms such as STM32F103, ESP8266, PCB design
              software such as ALTIUM DESIGNER, and cloud back-end technical
              framework such as NODE-JS+MQTT+MYSQL.
            </li>
            <li>
              Z.Zhihe, W. Jiaheng, F.Chenxu, L. Dawei, L. Bailiang, “Demo
              abstract: Smart City: a real-time environmental monitoring system
              on green roof” of the 3st ACM/IEEE International Conference on
              Internet-of-Things Design and Implementation (IoTDI), 2018.
            </li>
          </ol>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>HACKxFDU Hackathon Competition</h3>
          <p className="info">
            <span style={{ fontWeight: "bold" }}>
              Work-flow and Technical Structure Designer, Python Programmer
            </span>
            <span>&bull;</span>
            <em className="date">Nov. 2017</em>
          </p>

          <ol>
            <li>
              Ranked Top 8 among 70 groups in the HACKxFDU Hackathon
              Competition.
            </li>
            <li>
              Recommended music based on the match between facial detection and
              backstage crawls (lyrics) trained tags; detected video streaming
              (image) emotion based on CNN deep learning network, categorized
              music (lyrics) emotion based on IBM Watson Tony Analyzer, crawled
              NetEase music/lyric by Python, and established Web-service by
              employing Spring structure.
            </li>
          </ol>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Embedded Software Development in Smart Home Monitoring System</h3>
          <p className="info">
            <span style={{ fontWeight: "bold" }}>
              Programmer in control panel chip development
            </span>
            <span>&bull;</span>
            <em className="date">Apr. 2016 – Feb. 2017</em>
          </p>

          <ol>
            <li>
              Developed gateway monitoring system cored on RT5350 and
              communication module to connect exterior equipment in security,
              smart locker, and curtain etc.
            </li>
            <li>
              Established control panel chip jointing ZigBee chip and cloud/app
              communication protocol.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default Research;
