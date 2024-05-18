import Products from "./Products"

let trendingProducts = [
    {
        id: 25,
        title: "Gulab Powder 50 Gram",
        price: 70,
        rating: 4.87,
        thumbnail: "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
    },
    {
        id: 26,
        title: "Plant Hanger For Home",
        price: 41,
        rating: 4.08,
        thumbnail: "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
    },
    {
        id: 27,
        title: "Flying Wooden Bird",
        price: 51,
        rating: 4.41,
        thumbnail: "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
    },
    {
        id: 28,
        title: "3D Embellishment Art Lamp",
        price: 20,
        rating: 4.82,
        thumbnail: "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
    },
]

export default function TrendingProducts() {
    return (
        <>
            <h2>Trending Products</h2>
            {trendingProducts.map((el) => {
                return <Products key={el.id} name={el} />
            })}
        </>
    )
}
