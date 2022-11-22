import React from 'react'
import { Carousel } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const ProductCarouselComponent = () => {
  return (
    <div className="bg-dark">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel/laptop.jpeg"
            alt="First slide"
            height={200}
            style={{ objectFit: 'contain' }}
          />
          <Carousel.Caption>
            <LinkContainer to="/product-details" style={{ cursor: 'pointer' }}>
              <h3>First slide label</h3>
            </LinkContainer>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/carousel/smartphone.jpeg"
            alt="Second slide"
            height={200}
            style={{ objectFit: 'contain' }}
          />

          <Carousel.Caption>
            <LinkContainer to="/product-details" style={{ cursor: 'pointer' }}>
              <h3>Second slide label</h3>
            </LinkContainer>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/carousel/smarttv.jpeg"
            alt="Third slide"
            height={200}
            style={{ objectFit: 'contain' }}
          />

          <Carousel.Caption>
            <LinkContainer to="/product-details" style={{ cursor: 'pointer' }}>
              <h3>Third slide label</h3>
            </LinkContainer>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ProductCarouselComponent
