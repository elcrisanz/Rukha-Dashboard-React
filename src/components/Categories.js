import React from "react";
import { useState, useEffect } from 'react'

function Categories() {

    const [categories, setCategories] = useState([]);
    useEffect(async () => {
       await fetch('http://localhost:3001/api/apiCategorias')
            .then(response => response.json())
            .then(data => {
                setCategories (data.data.category)
            })
            .catch(error => console.error(error))
        console.log(categories);
           
    }, []);
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categorías en Base de Datos</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {categories.length === 0 && <p>Cargando</p>}
                        {categories.map((category, i) => {
                            return (
                                <div key={i} className="col-lg-6 mb-4">
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            {category.category}
                                        </div>
                                    </div>
                                </div>
                                )
                            }) 
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Categories;