import React, { useContext, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import authenticationImage from '../../../assets/authentication-bro.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location',location);
    const from = location.state?.from?.pathname || '/category/0';

    // user login function
    const handleLogin =(event)=> {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess('');
        setError('');
        logIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('Login Successful');
            navigate(from ,{replace:true});
            setError('');
            form.reset();
        })
        .catch(error=> {
            setError(error.message);
        })
    }
    return (
        <div>
            <h3 className="text-center mt-4">Please Login</h3>
            <Container className="d-flex g-5">
                <img className="me-10" style={{ width: '45%', height: '40%' }} src={authenticationImage} />
                <Form onSubmit={handleLogin} className="my-auto ms-10 w-50" style={{ height: '50%' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br></br>
                    <Form.Text className='text-secondary'> 
                        Don't Have An Account ? 
                        <Link to='/register'>Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success">
                       <p className='h5'>{success}</p>
                    </Form.Text>
                    <Form.Text className="text-danger">
                       <p className='h5'>{error}</p>
                    </Form.Text>
                </Form>
            </Container>
        </div>
    )

}

export default Login;