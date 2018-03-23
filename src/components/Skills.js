import React from "react";

const Skills = () => (
  <div className="row skill" id="skills">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Software Proficiency</h3>
          <p>
            C/C++/Java/Python Programming; Multi-thread programming; Development
            of RTOS such as RT-thread, Free-ROTS; Deep Learning platform such as
            TENSORFLOW, KERAS; Neural network such as CNN/RNN/GAN; Web-service
            development such as TCP/UDP etc; MVC design model; Testing methods
            of software and hardware; Nvidia TX2 tensorRT inference.
          </p>
        </div>
        <div className="twelve columns">
          <h3>Hardware Proficiency</h3>
          <p>
            MCU development of STM32/K60 ranging from 51/ARDUINO to
            CORTEX-M3/Cortex-M4; WIFI chip development such as ESP8266;
            programming of hardware protocol such as SPI/IIC/CAN; development of
            ARM9（S3C2440）; platform migration; cross-compiling/assembling;
            MAKEFILE; Altium Designer;
          </p>
        </div>
        <div className="twelve columns">
          <h3>Language</h3>
          <p>
            Native speaker of Mandarin (Chinese), fluent in English, GRE:320
          </p>
        </div>
        <div className="twelve columns">
          <h3>Voluntary work</h3>
          <p>
            Work as a Math teacher in Nepal for two months (2016.1 - 2016.3)
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
