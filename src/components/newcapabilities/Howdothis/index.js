/* eslint-disable */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
// import img1 from '../../../assets/images/DC3A3854-12750.jpg'
import img2 from '../../../assets/images/pasted-image-12762.jpg'
import img3 from '../../../assets/images/IMG_0079-12780.jpg'
// import { Link } from 'gatsby'
import './styled.css'
class Howdothis extends React.Component {
  render() {
    return (
      <Container className="howdo_this altgrid spt-10">
        <Row className="sp-5">
          <Col>
            <h2>How we do this</h2>
          </Col>
        </Row>
        <Row className="sp-10 altrow">
          <Col lg="5">
            <h3 className="h2">People First</h3>
            <p>
              Empowered prople and well-functioning teams are the foundation for
              great product development. While processes and methodologies like
              desgin thinking and Agile are essential, following a tool set
              alone will not deliver meaningful digital experiences. We pay
              particular attention to people and team dynamics as the oft
              overlooked dimension in Agile and software development.
            </p>
          </Col>
          <Col lg="6" className="offset-sm-1">
            <img src={img2} className="img-fluid" alt="img1" />
          </Col>
        </Row>
        <Row className="sp-10 altrow">
          <Col lg="6">
            <img src={img2} className="img-fluid" alt="img1" />
          </Col>
          <Col lg="5" className="offset-sm-1">
            <h3 className="h2">One Team</h3>
            <p>
              We seamlessly fuse with our clients across disciplines, roles, and
              backgrounds. We empower every team member of this combined team to
              be both critical thinker and a pragmatic doer-unlocking the true
              potential of individuals and teams. Everyone is change agent; we
              believe every part of the organisation needs to contribute to
              Digital Transformation.
            </p>
          </Col>
        </Row>
        <Row className="sp-10 altrow">
          <Col lg="5">
            <h3 className="h2">Digtial Capability</h3>
            <p>
              Every company is at a different stage in their digital journey. We
              work with both technology leaders as well as established brands
              that are trying to redefine their value with digital means. We are
              as comfortable driving new growth for our clients as we are
              showcasing new transparent ways of working. Our clients come to us
              to help them assess the digital readiness of their organisation,
              to drive engagement of their talent and to collaborate ,on new
              business models and ventures. Together,we create unique ways of
              working that will inspire yours organisation.
            </p>
          </Col>
          <Col lg="6" className="offset-sm-1 order-lg-6">
            <img src={img3} className="img-fluid" alt="img1" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Howdothis
