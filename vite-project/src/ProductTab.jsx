import Product from "./Product";

export default function ProductTab(){
    // let option=["hitech","angel","qwerty"]
    return (
        <>
            <Product title="laptop" price="80000" features={["hitech","angel","qwerty"]}/>
            <Product title="phone" price={20000} />
            <Product title="phone" price={40000} />
            <Product title="phone" price={25000} />
        </>
    );
}