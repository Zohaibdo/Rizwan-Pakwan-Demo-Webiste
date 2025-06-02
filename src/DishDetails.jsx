import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

export default function DishDetails({ dishes }) {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) {
    return (
      <Container className="my-5 text-center">
        <h2>Dish not found</h2>
        <Button as={Link} to="/" variant="primary" className="mt-3">
          Back to Menu
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button as={Link} to="/" variant="outline-primary" className="mb-4">
        &larr; Back to Menu
      </Button>
      <Card className="shadow-sm">
        <Card.Img
          variant="top"
          src={dish.image}
          alt={dish.name}
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="fw-bold display-5">{dish.name}</Card.Title>
          <Card.Text className="lead">{dish.description}</Card.Text>
          <h4 className="text-primary fw-bold">{dish.price}</h4>
          <Button variant="success" size="lg">
            Order Now
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
