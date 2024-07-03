import Product from "./Product";

export default function ProductTab(){
    // let option=["hitech","angel","qwerty"]
    return (
        <>
            <Product title="laptop" price="80000" features={["hitech","angel","qwerty"]}/>
            <Product title="phone" price={60000} />
            <Product/>
            <Product/>
        </>
    );
}