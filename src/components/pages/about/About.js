import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text" style={{ textAlign: 'justify' }}>
            As a lifelong IT enthusiast, I pursued my passion by completing a Norwegian Professional Degree in Back-End Development and a higher degree in Network and Information Security. Currently, I am studying for an online Master's in Computer and Systems Science at Stockholm University.
            <br />
            I am disciplined and committed to continuous learning, aiming to benefit both my organization and my personal growth. My experience in high-demand environments has proven my reliability and dedication. With a strong foundation in IT and a purposeful approach, I am ready to excel in my career and provide excellent service to clients as a committed professional.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Oslo, Norway
              </p>
              <p>
                Email:<a href="mailto:ml_barcelos@hotmail.com">ml_barcelos@hotmail.com</a>              </p>
              <p>
                <strong>Phone:</strong> +47 94082616 
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - Portuguese
              </p>
              <p>
                <strong>Second Language</strong> - Norwegian
              </p>
              <p>
                <strong>Third Language</strong> - English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
