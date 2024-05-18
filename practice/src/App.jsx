import TrendingProducts from "./TrendingProducts"
import LatestProducts from "./LatestProducts"
import Counter from "./Counter"
import Todos from "./Todos"
import ProductsAPI from "./ProductsAPI"

let title = "React Fundamentals"
title = "React State"
title = "Link API"
title = "Componenet Life Cycle"

export default function App() {
    return (
        <>
            <h1>{title}</h1>
            {/* <TrendingProducts /> */}
            {/* <LatestProducts /> */}
            {/* <Counter /> */}
            {/* <Todos /> */}
            <ProductsAPI/>
        </>
    )
}
