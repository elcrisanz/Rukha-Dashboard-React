import React from "react";
import { useState, useEffect } from 'react'

function Totalproducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/api/apiProductos')
            .then(response => response.json())
            .then(data => {
                setProducts (data.data)
            })
            .catch(error => console.error(error))
            console.log(products);
    }, []);

    return (
        <div class="col-md-4 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{ products.count }</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Totalproducts;