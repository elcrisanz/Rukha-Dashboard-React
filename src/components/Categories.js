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
        <div class="col-lg-6 mb-4">						
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        {categories.length === 0 && <p>Cargando</p>}
                        {categories.map((category, i) => {
                            return (
                                <div key={i} class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
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