import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";
import profilePic from "../assets/images/avatar.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns" style={{ textAlign: 'center' }}>
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          My name is Zhao zhihe, which represents the expectation that me
          becoming a notable person in my family. On the way of undertaking the
          arduous task, I have been working hard and gradually found my interest
          in the research or career area, which will be depicted in detail
          below. Concerning to daily life, I am a Saxophone amateur who has a
          keen on jazz and a crazy fan of the NBA team, Cavalier, who possesses
          the most consequential superstar player on the ground, LeBron James.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Zhihe Zhao</span>
              <br />
              <span>Suzhou, China</span>
              <br />
              <span>+86 188-9699-2152</span>
              <br />
              <span>zhihe.zhao14@student.xjtlu.edu.cn </span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
