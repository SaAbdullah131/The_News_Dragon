import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <Container>
                <h2>Terms & Conditions</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, esse totam rem maxime, mollitia voluptate enim rerum quibusdam eum eius nobis id qui omnis illo non ab, temporibus ea voluptas.</p>
                <p> Go Back to <Link to='/register'>Register</Link></p>
            </Container>
        </div>
    )
}

export default Terms;