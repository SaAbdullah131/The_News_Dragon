import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaLinkedin,FaTwitter,FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <div className='mb-2 py-2'>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mr-2 p-2 mb-2' variant='outline-primary'><FaGoogle /> Login With Google</Button>
            <Button className='mr-2 p-2' variant='outline-info'> <FaGithub />   Login With Github</Button>
            </div>
            <div className='mb-3'>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin/>Linkedin</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;