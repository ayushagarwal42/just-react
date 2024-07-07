function doSomething(){
    console.log("button clicked");
}

export default function Button(){
    return (
        <>
        <div><button onClick={doSomething}>Click me!</button></div>
        </>
    )
}