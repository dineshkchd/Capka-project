import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhyUsCard = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={12} md={2} lg={2} className="">
            <div className="why-us">
              <div className="why-card">
                <div className="face face1">
                  <div className="content">
                    <h3>Keep your business healthy by Regular monitoring</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Comprehensive financial assessment, forecasting, &
                      partnership ensure long-term business success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={2} lg={2}>
            <div className="why-us">
              <div className="why-card">
                <div className="face face1">
                  <div className="content">
                    <h3>Get all your deductions and reduce tax liability</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      We help business owners identify tax deductions year-round
                      and advise strategic decisions for maximum benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={2} lg={2}>
            <div className="why-us">
              <div className="why-card">
                <div className="face face1">
                  <div className="content">
                    <h3>
                      Save your time so you can focus on your core business
                    </h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Entrepreneurs often overlook hiring an accountant due to
                      budget constraints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={2} lg={2}>
            <div className="why-us">
              <div className="why-card">
                <div className="face face1">
                  <div className="content">
                    <h3>Make real-time decisions and business intelligence</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Business owners often seek to gauge the impact of
                      investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={2} lg={2}>
            <div className="why-us">
              <div className="why-card">
                <div className="face face1">
                  <div className="content">
                    <h3>Plan for the future and help your business to grow</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Get strategic advice on future planning. Analyze past
                      data, identify optimal inventory purchase times, and
                      budget for growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <div className="container why-us">
       
        <div className="why-card">
          <div className="face face1">
            <div className="content">
              <h3>Keep your business healthy by Regular monitoring</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Comprehensive financial assessment, forecasting, & partnership
                ensure long-term business success.
              </p>
            </div>
          </div>
        </div>

        <div className="why-card">
          <div className="face face1">
            <div className="content">
              <h3>Get all your deductions and reduce tax liability</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                During tax season, business owners seek deductions. We help
                identify them year-round, advising strategic decisions for
                maximum benefits.
              </p>
            </div>
          </div>
        </div>
        <div className="why-card">
          <div className="face face1">
            <div className="content">
              <h3>Save your time so you can focus on your core business</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Entrepreneurs often overlook hiring an accountant due to budget
                constraints. Yet, professional assistance ensures focus on
                business goals.
              </p>
            </div>
          </div>
        </div>
        <div className="why-card">
          <div className="face face1">
            <div className="content">
              <h3>Make real-time decisions and business intelligence</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Business owners often seek to gauge the impact of investments.
                With us as advisors, navigate hurdles in real-time. Collaborate
                using latest data for informed decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="why-card">
          <div className="face face1">
            <div className="content">
              <h3>Plan for the future and help your business to grow</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Get strategic advice on future planning. Analyze past data,
                identify optimal inventory purchase times, and budget for
                growth.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default WhyUsCard;
