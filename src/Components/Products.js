import { useEffect, useState } from "react"

function Products() {
    const [tg, setTg] = useState([]);
    const [products, setProducts] = useState([]);
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState([]);
    const [image, setImage] = useState('');
    const [dateOfWar, setDateOfWar] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {   
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(tg => {
            setProducts(tg);            
            setProducts(tg.products);
            setSuccess(true);
        })
    }, [])


    const renderTableHeader = () => {
        const header = Object.keys(products[0])
        return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
      }

    const renderTableData = () => {
        return products.map(product => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.brand}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.discountPercentage}</td>
                    <td>{product.rating}</td>
                </tr>
            )
        })
    }

    return ( 
        <div>
            <table id='table-pro'>
                <tbody>
                    <tr>{success && renderTableHeader()}</tr>
                    {success && renderTableData()}
                </tbody>
            </table>
        </div>
    )
}


export default Products