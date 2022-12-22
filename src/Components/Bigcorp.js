import React, { Component } from 'react';
import { useRef, useState, useEffect } from 'react';
import './Bigcorp.css'

const Bigcorp = () => {
    const [products, setProducts] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [shops, setShops] = useState('');
    const [manufacture, setManufacture] = useState('');
    const array = ['Iphone', 'Samsung', 'Huawei', 'Xiaomi'];
    
    const handleProduct = () => {
        console.log(products);
        setProducts(array);
        console.log(products)
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

                        <ul>
                            {
                                products.map(product => (
                                    <li>{product}</li>
                                ))
                            }  
                        </ul>
                    </div>
                </div>
        </section>
    )
}

export default Bigcorp