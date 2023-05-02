import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRouters = ({children}) => {
    const{user ,loading} = useContext(AuthContext);

    const location = useLocation();
    console.log('user in private route',user);
   if(loading) {
    return (
        <div className='d-flex justify-between'>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        </div>
        )
}

    if(user) {
        return children;
    }
  
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRouters;

/**-------------------------------
 *            STEPS
 * ------------------------------
 * 1.Check user is logged in or not
 * 2.if user is logged in , then allow them to visit the route
 * 3.Else redirect the user to the log in page.
 * 4.setup the private router
 * 5.handle loading
 * 
*/