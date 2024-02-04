import { useParams } from "react-router-dom"


export default function Product() {
    const params = useParams<{ productId: string }>()
    
    return (
        <div>
            <h2>item {params.productId}</h2>
        </div>
    )
}
