/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import handbookimg from '../../../assets/images/Screens2020.png'

class Handbook extends React.Component {
  render() {
    return (
      <Container className="handbook">
        <Row className="spb-8">
          <div className="col-12 offset-sm-3 col-sm-6">
            <h3>
              How we run our company <br /> and work on projects
            </h3>
            <p>
              Our Handbook is a glimpse into how we make successful web and
              mobile products, and also how we run our company. It&apos;s filled
              with things we'e learned from our own experience and the study of
              others experiences. It's a living document that everyone at Urbian
              contrubutes to continually.
            </p>
            <a
              className="styled__Link-lfEBUk iUBhrC servcclink dosD"
              href="/handbook"
            >
              Browse our handbook
              <svg
                className="styled__Arrow-fdeFVt fRPwvC"
                width="14"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#030303" fill="none" fillRule="evenodd">
                  <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                  <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                </g>
              </svg>
            </a>
          </div>
        </Row>
        <Row>
          <div class="col-12">
            <img src={handbookimg} className="img-fluid" alt="Img" />
          </div>
        </Row>
      </Container>
    )
  }
}

export default Handbook