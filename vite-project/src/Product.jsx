import './Product.css'

export default function Product({ title = "title", price = "price", features = [] }) {
    // let isDiscount=price > 30000 ? "Discount of 5%" : "";
    let isDiscount=price > 30000 && "Discount of 5%";
    let f = features.map((feature, index) => <li key={index}>{feature}</li>);
    return (
        <div className="Product">
            <h4>Product title : {title}</h4>
            <p>product description : {price}</p>
            <p>{isDiscount}</p>
            <p>{f}</p>
        </div>
    );
}