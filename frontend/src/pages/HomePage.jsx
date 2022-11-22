import React from 'react'
import ProductCarouselComponent from '../components/ProductCarouselComponent'
import CategoryCardComponent from '../components/CategoryCardComponent'
import { Row, Container } from 'react-bootstrap'

const HomePage = () => {
  const categories = [
    'Tablets',
    'Monitors',
    'Games',
    'Printers',
    'Software',
    'Cameras',
    'Books',
    'Videos',
  ]
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-2">
          {categories?.map((category, index) => (
            <CategoryCardComponent
              category={category}
              index={index}
              key={'category-' + category}
            />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default HomePage
