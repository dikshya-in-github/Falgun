import Product from "./Product"

let products = [
    {
        id: 1,
        title: "iPhone 9",
        price: 549,
        rating: 4.5,
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
        id: 2,
        title: "iPhone X",
        price: 899,
        rating: 4.5,
        thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        price: 1249,
        rating: 4.5,
        thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    },
    {
        id: 4,
        title: "OPPOF19",
        price: 280,
        rating: 4.5,
        thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    },
    {
        id: 5,
        title: "Huawei P30",
        price: 499,
        rating: 4.5,
        thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
    },
]

export default function LatestProducts() {
    return (
        <div>
            <h2>Latest Products</h2>
            {products.map((el) => {
                return <Product key={el.id} data={el} />
            })}
        </div>
    )
}
