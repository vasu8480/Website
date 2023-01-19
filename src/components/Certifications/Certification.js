import React from "react";
import "./cert.css";
import image from "./back2.png";
import ace from "./ace.png";
import aws from "./AWS.png";
import azure from "./azure.png";
import mta from "./mta.png";
import oracle from "./Oracle_Cloud_Infrastructure.png";
import juniper from "./juniper.png";

const Certification = () => {
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <h1>CERTIFICATIONS</h1>
      <div className="container">
        <div className="half-container">
          <p>
            AWS certified Solutions Architect Associate, Juniper Networks
            Certified Associate, Junos, Microsoft security fundamentals,
            Microsoft certified: Azure Fundamentals, Aviatrix Certified Engineer
            multi cloud, Copado Certified Fundamentals I & II
          </p>
        </div>
        <div className="half-container">
          <button className="center-button">Verify Certifications</button>
        </div>
      </div>

      <div className="container1">
        <div className="section">
          <img src={aws} alt="image1" className="section-image" />
          <p className="section-desc">
            Oracle Cloud Infrastructure Foundations 2021Associate
          </p>
        </div>
        <div className="section1">
          <img src={ace} alt="image2" className="section-image" />
          <p className="section-desc">AEC</p>
        </div>
      </div>
      <div className="container1">
        <div className="section">
          <img src={azure} alt="image1" className="section-image" />
          <p className="section-desc">
            Oracle Cloud Infrastructure Foundations 2021Associate
          </p>
        </div>
        <div className="section1">
          <img src={juniper} alt="image2" className="section-image" />
          <p className="section-desc">Juniper</p>
        </div>
      </div>

      <div className="container1">
        <div className="section">
          <img src={mta} alt="image1" className="section-image" />
          <p className="section-desc">
            MTA
          </p>
        </div>
        <div className="section1">
          <img src={oracle} alt="image2" className="section-image" />
          <p className="section-desc">Aviatrix</p>
        </div>

      </div>

      <div className="container2">
        <div className="box">
          <div className="inner-box">
            <form>
              <label>Email:</label>
              <input />
              <br></br>
              <label>Name:</label>
              <input type="text" />
              <br></br>
              <label>Message:</label>
              <textarea />
              <br></br>
              <button type="submit" className="butt">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <footer>By Nurukurthi Vasu</footer>
      </div>
    </div>
  );
};

export default Certification;
