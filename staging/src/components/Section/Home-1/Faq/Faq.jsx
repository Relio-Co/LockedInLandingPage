"use client";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="section zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 order-lg-2">
            <div className="zubuz-default-content">
              <h2>Suitable app for all levels of users</h2>
              <p>
                LockedIn is for everyone, from beginners to experts. It helps
                manage and track habits, making personal growth easier.
              </p>
              <p>
                Whether you're starting new habits or improving existing ones,
                LockedIn offers the support and insights you need to succeed.
              </p>
              <div className="zubuz-extara-mt">
                <Link className="zubuz-default-btn" href="contact-us">
                  <span>Start Your Free Trial</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="zubuz-accordion-wrap">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Sign up for free</Accordion.Header>
                  <Accordion.Body>
                    Start your journey with a 34-day trial. It’s easy and requires no credit card or commitment.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Build a habit plan</Accordion.Header>
                  <Accordion.Body>
                    Add your habits, set goals, and track your progress with the support of the LockedIn community.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Enjoy less stress</Accordion.Header>
                  <Accordion.Body>
                    Feel confident and motivated in your personal growth journey with insights and support from LockedIn.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
