import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CategoryCardComponent = ({ category, index }) => {
  const images = [
    '/images/Tablets.webp',
    '/images/Monitors.webp',
    '/images/Games.webp',
    '/images/Printers.webp',
    '/images/Software.webp',
    '/images/Cameras.webp',
    '/images/Books.webp',
    '/images/Videos.webp',
  ]
  return (
    <Card>
      <Card.Img variant="top" src={images[index]} crossOrigin="anonymous" />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  )
}

export default CategoryCardComponent
