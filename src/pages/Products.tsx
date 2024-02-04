import { Link } from "react-router-dom"


export default function Products() {
    const items = [1, 2, 3, 4, 5]
    return (
       <>
        <ul>
            {items.map(item => (
                <li><Link to={`/products/product/${item}`}>item {item}</Link></li>
            ))}
        </ul>
        <h3>
            <Link to="/">Home</Link>
        </h3>
       </>
    )
}
