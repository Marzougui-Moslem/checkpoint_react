import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1() {
  return (
    <div>
     <Card style={{ width: '18rem', margin:"10px" }}>
      <Card.Img variant="top" src="https://media.gqmagazine.fr/photos/646e2db48e8457689a904144/3:2/w_2247,h_1498,c_limit/parfum_h2.png" />
      <Card.Body>
        <Card.Title>Parfume</Card.Title>
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

export default Card1
