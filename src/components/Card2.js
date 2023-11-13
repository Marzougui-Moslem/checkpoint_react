import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card2() {
  return (
    <div>
    <Card style={{ width: '18rem',margin:"10px" }}>
      <Card.Img variant="top" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt687e11322c32db14/648ac30195bc353a268db563/Barcelona_2023-24_home_kit.png?auto=webp&format=pjpg&width=3840&quality=60" />
      <Card.Body>
        <Card.Title>Teeshirt</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Card2
