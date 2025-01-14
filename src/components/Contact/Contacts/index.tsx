/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

class Contacts extends React.Component {
  render() {
    return (
      <Container className="contactDetails spb-8">
        <Row>
          <Col className="col-12 sp-2">
            <h2>Contact details</h2>
          </Col>
          <Col lg="3" md="4">
            <h5>New business</h5>
            <ul class="nolist"> 
              <li>
                <a href="tel:+27214610185">+27(0)21 461 0185</a>
              </li>
              <li>
                <a
                  href="mailto:newprojects@urbian.co.za"
                  className="text-underline"
                >
                  newprojects@urbian.co.za
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="4">
            <h5>Press enquiries</h5>
            <p>
              For media please email{' '}
              <a href="mailto:press@urbian.co.za" className="text-underline">
                press@urbian.co.za
              </a>
            </p>
          </Col>
          <Col lg="3" md="4">
            <h5>General enquiries</h5>
            <ul class="nolist">
              <li>
                <a href="tel:+27214610185">+27(0)21 461 0185</a>
              </li>
              <li>
                <a
                  href="mailto:contact@urbian.co.za"
                  className="text-underline"
                >
                  contact@urbian.co.za
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="4" className="mt-5">
            <h5>Address</h5>
            <address>
              30 Barnet Street <br /> Gardens, Cape Town
            </address>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Contacts
