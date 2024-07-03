import './Product.css'

export default function Product({title="title",price="price",features=[]}) {
    let f=features.map((feature,index)=><li key={index}>{feature}</li>);
    return (
        <div className="Product">
            <h4>Product title : {title}</h4>
            <p>product description : {price}</p>
            <p>{f}</p>
        </div>
    );
}