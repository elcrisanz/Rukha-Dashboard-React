import React from "react";
import { useState, useEffect } from 'react'

function Amountproducts() {
        const [products, setProducts] = useState([]);
        useEffect(async () => {
            await fetch('http://localhost:3001/api/apiProductos')
                .then(response => response.json())
                .then(data => {
                    setProducts (data.data)
                })
                .catch(error => console.error(error))
                console.log(products);
        }, []);
    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Suma en productos </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">$ { products.totalAmount }</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Amountproducts;