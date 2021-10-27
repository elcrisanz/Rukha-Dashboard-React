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
        <div class="col-md-4 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">$ { products.totalAmount }</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Amountproducts;