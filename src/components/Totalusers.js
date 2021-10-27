import React from "react";
import { useState, useEffect } from 'react'

function Totalusers() {
    const [users, setUsers] = useState([]);
    useEffect(async () => {
       await fetch('http://localhost:3001/api/apiUsuarios')
            .then(response => response.json())
            .then(data => {
                setUsers (data.data)
            })
            .catch(error => console.error(error))
           
    }, []);

    return (
        <div class="col-md-4 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{ users.count}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Totalusers;