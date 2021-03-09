import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const NotFound = () => {
    return (
        <div className="mt-5 pt-5">
            <h1 className="bg-dark text-warning text-center m-auto rounded-pill p-3 w-50">Sorry!!! Page not found.</h1>
            <h1 className="bg-dark text-danger text-center m-auto rounded-pill p-3 w-25">404 error</h1>
        </div>
    );
};

export default NotFound;