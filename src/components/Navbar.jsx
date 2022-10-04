import { Nav, Navbar, NavDropdown, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavigationBar = ({ navigateToSearchPage }) => {
  // console.log('Type of nav')
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSetSearch = (e) => {
    e.preventDefault()
    navigateToSearchPage(searchTerm)
  }

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
            <Link to='/' style={{ textDecoration: 'none' }} >茶友</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              //remove this useles link later, id rather them click on the logo instead. 
            }

            <Form className="d-flex" onSubmit={handleSetSearch}  >
            <Form.Control
              type="search"
              placeholder="搜索。。。"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={({ target }) => setSearchTerm(target.value)}
            />
            <Button variant="outline-success" type="submit" >搜尋名茶</Button>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
