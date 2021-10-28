import React from "react";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Lastproduct() {
    const [products, setProducts] = useState([]);
    useEffect(async () => {
        await fetch('http://localhost:3001/api/apiProductos')
            .then(response => response.json())
            .then(data => {
                setProducts(data.data.lastProduct)                
                console.log(products);            })
            .catch(error => console.error(error))
    }, []);    

    return (
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Último producto en la base de datos: </h6>
          </div>
          <div className="card-body">
            <h4>{products.name} </h4>
            <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={"http://localhost:3001/img/"+products.image} alt="pepe" />
            </div>
            <a href={"http://localhost:3001/products/detalle/" + products.id}>Ver producto en detalle</a>
          </div>
        </div>
      </div>
        )
    }
export default Lastproduct