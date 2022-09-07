import React, {Fragment} from 'react'
import './home.css'
import Loader from '../../layout/loader/Loader'
import MetaData from '../../layout/MetaData'
import {CgMouse} from 'react-icons/cg'
import ProductCard from '../../components/productCard/ProductCard'
export default function Home(){
    const loading = false
    return (
        <Fragment>
            {
                loading?(
                    <Loader></Loader>
                ):(
                    <Fragment>
                        <MetaData title="ECOMMERCE"></MetaData>
                        <div className='banner'>
                            <p>Welcome to Ecommerce</p>
                            <h1>FIND AMAZING PRODUCTS BELOW</h1>
                            <a href='#container'>
                                <button>
                                    Scroll <CgMouse></CgMouse>
                                </button>
                            </a>
                        </div>

                        <h2 className='homeHeading'>Featured Products</h2>
                        <div className='container' id='container'>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                        </div>
                    </Fragment>
                )
            }
        </Fragment>
    )
}