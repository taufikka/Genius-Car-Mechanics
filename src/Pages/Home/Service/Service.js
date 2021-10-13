import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = (props) => {
    const { id, name, price, description, img } = props.service
    return (
        <div className='service pb-3'>
            <img className='image' src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <p className='px-3'>{description}</p>

            <Link to={`/booking/${id}`}>
                <button className='btn btn-warning'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;