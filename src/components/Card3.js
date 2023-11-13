import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card3() {
  return (
    <div>
    <Card style={{ width: '18rem',margin:"10px" }}>
      <Card.Img variant="top" src="https://www.zankyou.fr/images/mag-card-c/12a/3739/878/623/-/fr/wp-content/uploads/2018/12/charles-seguy.jpg" />
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

export default Card3
