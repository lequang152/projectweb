import React, { Component } from 'react';
import { useRef, useState, useEffect } from 'react';
import './Bigcorp.css';
import Products from './Products';

function Bigcorp() {
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [shops, setShops] = useState('');
    const [manufacture, setManufacture] = useState('');
    
    // const array = ['Iphone', 'Samsung', 'Huawei', 'Xiaomi'];
    
    const handleProduct = () => {
        setShow(true);
    }
       

    return(
        <section>
                <div className='background'>
                    <div className='container'>
                        <button onClick={handleProduct} className='product'>
                            Product
                        </button>
                            
                        <button className='account'>
                            Account
                        </button>

                        <button className='manufacture'>
                            Manufacture
                        </button>

                        <button className='shop'>
                            Shop
                        </button>

                        <button className='warranty'>
                            Warranty
                        </button>

                        <div>{show && <Products/>}</div>
                        {/* <ul>
                            {
                                products.map(product => (
                                    <li>{product}</li>
                                ))
                            }  
                        </ul> */}
                    </div>
                </div>
        </section>
    )
}

export default Bigcorp