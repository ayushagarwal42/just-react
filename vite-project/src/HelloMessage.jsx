export default function HelloMessage({userName,textColor}){
    let styles={color:textColor};
    return(
        <>
        <h3 style={styles}>Hello {userName}</h3>
        </>
    );
}