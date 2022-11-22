import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className="text-white bg-dark text-center py-3">
            Copyright &copy; Best Online Shop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComponent
