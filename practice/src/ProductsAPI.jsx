import axios from "axios"
import { useState, useEffect } from "react"

export default function ProductsAPI() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function fetchAPIData() {
        setIsLoading(true)

        axios
            .get("https://dummyjson.com/product")
            .then((res) => {
                setProducts(res.data.products)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                alert(" something went wrong")
            })
    }

    useEffect(() => {
        console.log(" use effect")
        fetchAPIData()
    }, [])

    return (
        <>
            <button onClick={fetchAPIData}> Fetch Products</button>
            {isLoading && <p>is loading...</p>}
            <ul>
                {products.map((el, idx) => {
                    return <li key={idx}>{el.title}</li>
                })}
            </ul>
        </>
    )
}
