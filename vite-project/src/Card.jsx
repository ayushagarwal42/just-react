import './Card.css'
import Price from './Price';

export default function Card({ title, descp, idx }) {
    let oldprices = ["60,000", "70,000", "80,000", "90,000"]
    let newprices = ["55,000", "65,000", "75,000", "85,000"]
    return (
        <div className="Card">
            <h4>Title : {title}</h4>
            <p>Description : {descp}</p>
            <Price oldprice={oldprices[idx]} newprice={newprices[idx]} />
        </div>
    );
}