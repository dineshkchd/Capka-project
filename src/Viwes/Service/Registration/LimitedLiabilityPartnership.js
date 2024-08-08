import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import { LimitedLiabilityPartnershipCardText } from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResHeader from "../../../components/ResponsiveMemu/Header";

const LimitedLiabilityPartnership = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");
  const [cardtext6, setCardText6] = useState("");
  const [cardtext7, setCardText7] = useState("");

  useEffect(() => {
    if (LimitedLiabilityPartnershipCardText) {
      setCardText1(
        LimitedLiabilityPartnershipCardText[0]?.Separate_Legal_Entity
      );
      setCardText2(
        LimitedLiabilityPartnershipCardText[1]?.Uninterrupted_Existence
      );
      setCardText3(
        LimitedLiabilityPartnershipCardText[2]?.Easy_Transferability
      );
      setCardText4(LimitedLiabilityPartnershipCardText[3]?.Audit_NOT_Required);
      setCardText5(LimitedLiabilityPartnershipCardText[4]?.Owning_Property);
      setCardText6(
        LimitedLiabilityPartnershipCardText[5]?.Identity_and_Address_Proof
      );
      setCardText7(
        LimitedLiabilityPartnershipCardText[6]?.Registered_Office_Proof
      );
    }
  }, [LimitedLiabilityPartnershipCardText]);

  return (
    <>
      <ResHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <p className="otherhero-text">
              <h1 className="text-center">Limited Liability Partnership</h1>
              Limited Liability Partnerships (LLPs) offer limited liability
              protection, ideal for small businesses. Introduced in 2010, LLPs
              have gained popularity with over 1 lakh registrations by September
              2014. Unlike traditional partnerships, LLPs provide individual
              liability protection and management rights to partners. They're
              easy to incorporate and manage, suitable for professionals and
              small family-owned businesses. Purminder Kaur & Associates
              specializes in LLP registration services, with an average
              processing time of 15-20 working days. Schedule a free
              consultation for LLP registration and business setup.
            </p>
          </Col>
          <Col xs={12} md={7}>
            <QuickEnquiryFrom />
          </Col>
        </Row>
      </Container>
      <CommonCard
        cardtilte="Reasons to Register a Limited"
        cardspan="Liability Partnership"
        card1="Separate Legal Entity"
        card1text={cardtext1}
        crad2="Uninterrupted Existence"
        cardtext2={cardtext2}
        card3="Easy Transferability"
        cardtext3={cardtext3}
        card4="Audit NOT Required"
        cardtext4={cardtext4}
        card5="Owning Property"
        cardtext5={cardtext5}
        card6="Identity and Address Proof"
        cardtext6={cardtext6}
        card7="Registered Office Proof"
        cardtext7={cardtext7}
      />
      <section className="hm-about-sec help-with-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec ">
              <h2>
                How we help with <span> LLP registration</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Digital Signature & DIN</p>
                <p className="text">
                  Digital Signature Certificate(DSC) and Designated Partner
                  Identification Number(DPIN) is obtained for the proposed
                  Partners of the LLP. DPIN and DSC can be obtained for the
                  proposed Partners within 5 to 7 days.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Name Approval</p>
                <p className="text">
                  A minimum of one and a maximum of six names choices must be
                  submitted to the MCA. Subject to availability, naming
                  guidelines and MCA processing time, name approval can be
                  obtained in 5 to 7 working days.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">LLP Registration</p>
                <p className="text">
                  Incorporation documents can be submitted to the MCA along with
                  an application for incorporation. MCA will usually approve the
                  application for incorporation of LLP in 10 to 12 days, subject
                  to their processing time.
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

export default LimitedLiabilityPartnership;
