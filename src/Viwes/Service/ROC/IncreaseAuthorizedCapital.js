import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import { IncreaseAuthorizedCapitalCardText } from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResHeader from "../../../components/ResponsiveMemu/Header";

const IncreaseAuthorizedCapital = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (IncreaseAuthorizedCapitalCardText) {
      setCardText1(IncreaseAuthorizedCapitalCardText[0]?.Authorised_Capital);
      setCardText2(IncreaseAuthorizedCapitalCardText[1]?.Paid_up_Capital);
      setCardText3(IncreaseAuthorizedCapitalCardText[2]?.Authorised_Capital);
      setCardText4(IncreaseAuthorizedCapitalCardText[3]?.Increase_Capital);
      setCardText5(IncreaseAuthorizedCapitalCardText[4]?.Board_Approval);
    }
  }, [IncreaseAuthorizedCapitalCardText]);
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Increase Authorized Capital</h1>
              Increasing the authorized capital of a company requires a board
              resolution and filing forms with the Registrar of Companies.
              Authorized capital determines the number of shares a company can
              issue. It can be increased with shareholder approval by paying
              additional fees. Purminder Kaur & Associates facilitates this
              process.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>
      <CommonCard
        cardtilte="Reasons to Increase "
        cardspan="In Authorized Capital"
        card1="Authorised Capital"
        card1text={cardtext1}
        crad2="Paid up Capital"
        cardtext2={cardtext2}
        card3="Authorised Capital"
        cardtext3={cardtext3}
        card4="Increase Capital"
        cardtext4={cardtext4}
        card5="Board Approval"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec help-with-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> Authorized Capital</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Advisory</p>
                <p className="text">
                  A Business Expert will review the present and proposed changes
                  in authorised capital and the Articles of Association to
                  understand the background of the company prior to beginning
                  the process. The review would take 1 – 2 working days.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Board Resolutions</p>
                <p className="text">
                  Once you obtain an understanding of the procedures involved in
                  increasing the authorised capital, our Experts will draft the
                  necessary Board Resolutions for the procedure.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Filing</p>
                <p className="text">
                  Once the Board Resolutions are passed, our Experts will
                  prepare and file the necessary documents with the Ministry of
                  Corporate Affairs.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default IncreaseAuthorizedCapital;
