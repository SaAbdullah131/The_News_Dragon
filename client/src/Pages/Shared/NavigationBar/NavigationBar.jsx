import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const {user} = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                {/* <Nav.Link href="/">Home</Nav.Link> */}
                                <Link to='/' className='text-decoration-none text-black me-3'>Home</Link>
                                <Link to='/about' className='text-decoration-none text-black me-3'>About</Link>
                                <Link to='/contact' className='text-decoration-none text-black'>Contact</Link>

                            </Nav>
                            <Nav>
                                {
                                    user &&
                                    <Nav.Link href="#deets">
                                        <FaUserCircle style={{ width: '50px', height: '30px' }} />
                                    </Nav.Link>
                                }
                                <Nav.Link eventKey={2} href="#memes">
                                    {user ?
                                        <Button variant='secondary'>Log Out</Button> :
                                        <Link to='/login'>Log
                                            <Button variant='primary'>Log In</Button>
                                        </Link>
                                    }
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </Container>
    );
};

export default NavigationBar;