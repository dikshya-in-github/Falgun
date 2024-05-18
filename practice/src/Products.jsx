export default function Products(props) {
    let { thumbnail, title, price } = props.name
    return (
        <>
            <img src={thumbnail} />
            <p>{title}</p>
            <p>{price}</p>
        </>
    )
}
