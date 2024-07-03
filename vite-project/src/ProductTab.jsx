import Product from "./Product";

export default function ProductTab(){
    return (
        <>
            <Product title="laptop" price="80000"/>
            <Product title="phone" price={60000} />
            <Product/>
            <Product/>
        </>
    );
}