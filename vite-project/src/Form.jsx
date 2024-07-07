function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form submitted");
}

export default function Form() {
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" />
                <button>Submit</button>
            </form>
        </>
    );
}