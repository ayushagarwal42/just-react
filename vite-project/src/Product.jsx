import './Product.css'

export default function Product({title="title",price="price"}) {
    return (
        <div className="Product">
            <h4>Product title : {title}</h4>
            <p>product description : {price}</p>
        </div>
    );
}