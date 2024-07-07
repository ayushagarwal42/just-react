import Card from "./Card";

export default function CardTab() {
    return (
        <div className="cardtab">
            <Card title="hp laptop" descp="hello its a very good looking laptop" idx={0} />
            <Card title="apple laptop" descp="very expensive but great deal for life" idx={1} />
            <Card title="dell laptops" descp="very expensive but great deal for life" idx={2} />
            <Card title="lenovo laptops" descp="very expensive but great deal for life" idx={3} />
        </div>
    );
}