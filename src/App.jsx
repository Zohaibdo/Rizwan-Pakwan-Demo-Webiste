import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";  
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Fresh romaine with Caesar dressing, croutons, and parmesan.",
    price: "$9",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Served with lemon butter sauce and seasonal vegetables.",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Tiramisu",
    description: "Traditional Italian dessert with mascarpone and espresso.",
    price: "$7",
    image:
      "https://th.bing.com/th/id/R.4031a9f1b1546909684a5ee1159ca97c?rik=fzY%2bNyXfFM%2bYEg&pid=ImgRaw&r=0",
  },
  // Pakistani dishes added below:
  {
    id: 5,
    name: "Biryani",
    description: "Spiced rice dish with tender chicken, fragrant basmati, and herbs.",
    price: "$14",
    image:
      "https://th.bing.com/th/id/OIP.fDWEOEHk6trKCevpKK8-LgHaEO?rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    name: "Nihari",
    description: "Slow-cooked beef stew with rich spices, served with naan.",
    price: "$16",
    image:
      "https://th.bing.com/th/id/R.5b35f0adcd157e0bd78d1cce182d82d3?rik=FSxwz22I70NJTQ&pid=ImgRaw&r=0",
  },
  {
    id: 7,
    name: "Chapli Kebab",
    description: "Spiced minced meat patties fried to perfection, a Pashtun delicacy.",
    price: "$10",
    image:
      "https://foodiection.com/wp-content/uploads/2023/07/Chapli-Kabab.jpg",
  },
  {
    id: 8,
    name: "Gulab Jamun",
    description: "Sweet milk-solid balls soaked in rose-flavored syrup.",
    price: "$5",
    image:
      "https://thumbs.dreamstime.com/b/sweet-bliss-gulab-jamun-milk-based-dumpling-beloved-treat-indian-pakistani-festivities-vertical-mobile-wallpaper-291736452.jpg",
  },
];


// DishDetails Component
function DishDetails() {
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

// Menu Component (your current menu code with small edit to link details page)
function Menu() {
  return (
    <Container id="menu" className="my-5">
      <h2 className="text-center fw-bold mb-5">Our Menu</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {dishes.map(({ id, name, description, price, image }) => (
          <Col key={id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={image}
                alt={name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-semibold">{name}</Card.Title>
                <Card.Text className="flex-grow-1 text-muted">
                  {description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 text-primary fw-bold">{price}</span>
                  <Button
                    as={Link}
                    to={`/dish/${id}`}
                    variant="outline-primary"
                    size="sm"
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default function App() {
  return (
    <Router>
      <>
        {/* Navbar */}
        <Navbar
          bg="light"
          expand="lg"
          sticky="top"
          className="shadow-sm"
          collapseOnSelect
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
             <img width={100} height={84} src="/rp-logo.png" alt="" />  <span>Rizwan Pakwan</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#menu" className="mx-2 fw-semibold">
                  Menu
                </Nav.Link>
                <Nav.Link href="#about" className="mx-2 fw-semibold">
                  About
                </Nav.Link>
                <Nav.Link href="#contact" className="mx-2 fw-semibold">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero Section */}
        <section
          className="d-flex align-items-center text-center text-white"
          style={{
            minHeight: "75vh",
            backgroundImage:
              'url("https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1400&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
          }}
        >
          <Container>
            <h1 className="display-3 fw-bold mb-3">Welcome to Rizwan Pakwan</h1>
            <p className="lead fs-4 mb-4">
              Savor the taste of authentic, fresh, and delicious food.
            </p>
            <Button href="#menu" size="lg" variant="primary" className="px-4">
              Explore Our Menu
            </Button>
          </Container>
        </section>

        {/* Routes for menu and dish details */}
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/dish/:id" element={<DishDetails />} />
        </Routes>

        {/* About Section */}
        <Container
          id="about"
          className="my-5 text-center"
          style={{ maxWidth: "700px" }}
        >
          <h2 className="fw-bold mb-4">About Us</h2>
          <p className="lead text-muted">
            Delicious Eats was founded with a passion for authentic flavors and
            fresh ingredients. Our chefs craft every dish with love and care to
            bring you a memorable dining experience.
          </p>
        </Container>

        {/* Contact Section */}
        <Container
          id="contact"
          className="my-5 text-center"
          style={{ maxWidth: "600px" }}
        >
          <h2 className="fw-bold mb-4">Contact Us</h2>
          <p className="mb-2">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-decoration-none text-primary"
            >
              +1 (234) 567-890
            </a>{" "}
            | Email:{" "}
            <a
              href="mailto:info@deliciouseats.com"
              className="text-decoration-none text-primary"
            >
              info@deliciouseats.com
            </a>
          </p>
          <p className="text-muted">Address: 123 Flavor Street, Food City</p>
        </Container>

        {/* Footer */}
        <footer className="bg-light text-center text-muted py-4 mt-5 border-top">
          <Container>
            &copy; {new Date().getFullYear()} Rizwan Pakwan. All rights reserved.
          </Container>
        </footer>
      </>
    </Router>
  );
}
