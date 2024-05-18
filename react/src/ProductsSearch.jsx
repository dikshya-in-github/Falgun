import axios from "axios"
import React, { useEffect, useState } from "react"

export default function ProductsSearch() {
    const [products, setProducts] = useState([])
    const [searchInput, setSearchInput] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
    }

    function fetchProducts() {
        axios
            .get(`https://dummyjson.com/products/search?q=${searchInput}`)
            .then((res) => {
                setProducts(res.data.products)
            })
            .catch((err) => {})
    }

    useEffect(() => {
        fetchProducts()
    }, [searchInput])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}
                    type="text"
                />
                <button>Search</button>
            </form>
            {products.length == 0 && (
                <p>
                    <b>Products not found</b>
                </p>
            )}
            <ul>
                {products.map((el) => {
                    return <li key={el.id}>{el.title}</li>
                })}
            </ul>
        </>
    )
}
