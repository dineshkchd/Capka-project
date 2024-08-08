import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import { ChangeCompanyNameCardText } from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResHeader from "../../../components/ResponsiveMemu/Header";

const ChangeCompanyName = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (ChangeCompanyNameCardText) {
      setCardText1(ChangeCompanyNameCardText[0]?.Separate_Legal_Entity);
      setCardText2(ChangeCompanyNameCardText[1]?.Uninterrupted_Existence);
      setCardText3(ChangeCompanyNameCardText[2]?.Easy_Transferability);
      setCardText4(ChangeCompanyNameCardText[3]?.Borrowing_Capacity);
      setCardText5(ChangeCompanyNameCardText[4]?.Owning_Property);
    }
  }, [ChangeCompanyNameCardText]);
  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Change Company Name</h1>
              The name of a company or LLP can be changed with approval from the
              Board of Directors and shareholders. Promoters can initiate this
              change for reasons like business model alteration or rebranding.
              Despite the name change, the legal entity remains unaffected,
              retaining all assets and liabilities. The process involves board
              resolutions, MCA name approval, special resolutions, and updating
              MOA and AOA. Purminder Kaur & Associates offers services for
              company and LLP name changes, with an average processing time of
              90 working days. Reach out to them for a free consultation.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>

      <CommonCard
        cardtilte="Reasons to Company"
        cardspan="Name Change"
        card1="Separate Legal Entity"
        card1text={cardtext1}
        crad2="Uninterrupted Existence"
        cardtext2={cardtext2}
        card3="Easy Transferability"
        cardtext3={cardtext3}
        card4="Borrowing Capacity"
        cardtext4={cardtext4}
        card5="Owning Property"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec help-with-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span>company name change</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Advisory</p>
                <p className="text">
                  A Business Expert will review the present and proposed name of
                  company and the Articles of Association to understand the
                  background of the company prior to beginning the process. The
                  review would take 1 – 3 working days
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Board Resolutions</p>
                <p className="text">
                  Once you obtain an understanding of the procedures involved in
                  changing company name, our Experts will draft the necessary
                  Board Resolutions for the procedure.
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

export default ChangeCompanyName;
