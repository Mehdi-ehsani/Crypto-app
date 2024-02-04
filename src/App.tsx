// component
import Banner from "./components/Banner"
import { useDataContext } from '../src/context'
import { Link } from "react-router-dom"

export default function App() {
  const { data, loading } = useDataContext()

  function RenderContent() {
    if (loading) {
      return (
        <h3>loading...</h3>
      )
    } else {
      return (
        <>
          <Banner />
          <h3><Link to="/products">products</Link></h3>
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.name} - {item.current_price}</li>
            ))}
          </ul>
          
        </>
      )
    }

  }


  return (
    <RenderContent />
  )
}
