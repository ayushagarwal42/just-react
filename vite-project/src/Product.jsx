import './Product.css'

export default function Product({ title = "title", price = "price", features = [] }) {
    let styles={backgroundColor:price>30000?"pink":""};
    // let isDiscount=price > 30000 ? "Discount of 5%" : "";
    // let isDiscount=price > 30000 && "Discount of 5%";
    let f = features.map((feature, index) => <li key={index}>{feature}</li>);
    return (
        <div className="Product" style={styles}>
            <h4>Product title : {title}</h4>
            <p>product description : {price}</p>
            {/* <p>{isDiscount}</p> */}
            {price > 30000 ? <p>"Discount of 5%"</p> : null}
            <p>{f}</p>
        </div>
    );
}