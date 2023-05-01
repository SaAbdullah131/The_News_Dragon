
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <div>
            <Container className='mt-4'>
                <div className='text-center'>
                    <img src={logo} alt="" />
                    <p className='text-secondary'>
                        <small>Journalism Without Fear or Favor</small>
                    </p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
                <div className='d-flex bg-secondary p-2'>
                    <Button className='rounded' variant="danger">Latest</Button>
                    <Marquee className='text-warning' speed={70} pauseOnHover>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
                
            </Container>

        </div>
    );
};

export default Header;