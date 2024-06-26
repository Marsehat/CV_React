import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                <strong>2023 -</strong>
                <strong> 2024</strong>
              </p>
            </div>
            
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>IT SUPPORT</strong>
                </h6>
                <ul className='custom-list browser-default'style={{ textAlign: 'justify' }}>
                  <li>Troubleshooting and Resolving Technical Issues</li>
                  <li>User Support and Assistance</li>
                  <li>Data Security Management</li>
                  <li>Software Installation and Configuration</li>
                  <li>System and Network Administration</li>
                </ul>
              </blockquote>
            </div>
          </div>
          
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                <strong>2018 -</strong>
                <strong> 2021</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>LANDSCAPE PROJECT MANAGER</strong>
                </h6>
                <ul className='custom-list browser-default'style={{ textAlign: 'justify' }}>
                  <li>Lead a team of 5 people</li>
                  <li>AutoCAD Site analysis and planning</li>
                  <li>AutoCAD BIM Coordination</li>
                  <li>Managed every aspect of complex Landscape Projects</li>
                </ul>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                <strong>2014 -</strong>
                <strong> 2017</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>SECURITY OFFICER</strong>
                </h6>
                <ul className='custom-list browser-default'style={{ textAlign: 'justify' }}>
                  <li>Developed decision-making and multi-tasking, an accurate sense of observation and strong communication skills.</li>
                  <li>Gained extensive knowledge in Security survillance systems</li>
                  <li>Identity and Access Management (IAM): Setting up and maintaining IAM systems to control user access to network resources, applications, and data.</li>
                  <li>Role-Based Access Control (RBAC): Defining and enforcing RBAC policies to ensure users have appropriate access levels based on their roles.</li>
                </ul>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}