import React from 'react';
import { Link } from 'react-router-dom';

import notfound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <div>
            <img className='w-50' src={notfound} alt="" />
            <br />
            <Link to='/' >
                <button>Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;