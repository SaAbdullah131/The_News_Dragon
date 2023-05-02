import React, { useContext, useState } from 'react';
import RegisterImage from '../../../assets/register_img.png';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted,setAccepted] = useState(false);

    const handleAccepted = (event) => {
        const checked = (event.target.checked);
        setAccepted(checked);
    }
    //
    const handleRegisterUser = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name,photo,email,password);
        createUser(email,password)
        .then(result=> {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error=> {
            console.log(error.message);
        })

    }
    return (
        <div>
            <h3 className="text-center mt-4">Please Register</h3>
            <Container className="d-flex g-5">
                <img className="me-10" style={{ width: '45%', height: '40%' }} src={RegisterImage} />
                <Form onSubmit={handleRegisterUser} className="my-auto ms-10 w-50" style={{ height: '50%' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name="photoURL" placeholder="Enter Photo URL"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                        onClick={handleAccepted}
                         type="checkbox"
                         name="accept"
                         label={<>Accepts <Link to='/terms'>Terms and Conditions</Link></>} />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={!accepted}>
                        Register
                    </Button>
                    <br></br>
                    <Form.Text className='text-secondary'>
                        Already Have An Account ?
                        <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Container>

        </div>
    )
}

export default Register;