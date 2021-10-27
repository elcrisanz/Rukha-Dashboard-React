import React from "react";
import { useState, useEffect } from 'react'

function Lastproduct() {
    const [products, setProducts] = useState([]);
    let lastProduct={}
    useEffect(() => {
        fetch('http://localhost:3001/api/apiProductos')
            .then(response => response.json())
            .then(data => {
                setProducts(data.data.products)
                console.log(products);
            })
            .catch(error => console.error(error))
            console.log(products);
    }, []);
   

 
    

    return (
        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                </div>
                <div class="card-body">
                    <div class="text-center">
                        <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost3001/img/"+lastProduct.image} alt="pepe" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
        )
    }
export default Lastproduct