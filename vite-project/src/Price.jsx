import './Card.css'

export default function Price({ oldprice, newprice }) {
    return (
        <div className='Price'>
            <p><s>old price : {oldprice}</s></p>
            <p>new price : {newprice}</p>
        </div>
    );
}