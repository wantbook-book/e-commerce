import React from 'react'
import {Link} from 'react-router-dom'
import {Rating} from '@material-ui/lab'
export default function ProductCard(){
    
    const product = {
        _id: '123',
        images: [
            {
                url:'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg'
            }
        ],
        name:'pizza',
        ratings: 3.5,
        numOfReviews: 2,
        price: 99
    }
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5
    }
    return (
        <Link className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name}></img>
            <p>{product.name}</p>
            <div>
                <Rating {...options}></Rating>
                <span className='productCardSpan'>
                    {" "}
                    ({product.numOfReviews} Reviews)
                </span>
            </div>
            <span>{`$${product.price}`}</span>
        </Link>
    )
}