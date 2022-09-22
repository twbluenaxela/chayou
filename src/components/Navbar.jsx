import { 
    Nav, 
    Navbar, 
    NavDropdown,
    Container } from 'react-bootstrap'

    const NavigationBar = () => {
        return (
            <Navbar bg='light' variant='light' >
                <Container>
                    <Navbar.Brand>茶友</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav' >
                        <Nav className='me-auto' >
                            <Nav.Link href='#'>首页</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

export default NavigationBar