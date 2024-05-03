export default function Products(props) {
  const {thumbnail, title, price}  = props.data;
  return (
    <div className="product">
      <img src={thumbnail} />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}
