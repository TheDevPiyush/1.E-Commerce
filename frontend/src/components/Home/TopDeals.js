import React from 'react'
import { Link } from 'react-router-dom'
import './TopDeals.css'
export default function TopDeals({ products }) {
    return (
        <>
            <div className="TopDeals-parent">
                {products.map((product) => (
                    <Link to={`/product/${product._id}`} key={product._id}>
                        <div className="mycard" style={{ "width": "15rem", "overflow": "hidden" }}>
                            <img className='card-img' src={product.image} alt={product.name}/>
                            <div className="mycard-body">
                                <p className="card-title">{product.name}</p>
                                <p className="card-text">₹{product.price} </p>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </>
    )
}
