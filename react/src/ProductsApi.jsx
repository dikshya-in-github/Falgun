import React, { useState, useEffect } from "react"
import axios from "axios"

export default function ProductsApi() {
    const [products, setProducts] = useState([])
    const [isloading, setIsloading] = useState(false)

    function fetchApiData() {
        setIsloading(true)

        axios
            .get("https://dummyjson.com/products")
            .then((res) => {
                setProducts(res.data.products)
                setIsloading(false)
            })
            .catch((err) => {
                console.log("Please try again later")
            })
    }

    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <>
            <button onClick={fetchApiData}>Fetch Products</button>
            {isloading && <p>is loading...</p>}
            <ul>
                {products.map((el, idx) => {
                    return <li key={idx}>{el.title}</li>
                })}
            </ul>
        </>
    )
}
