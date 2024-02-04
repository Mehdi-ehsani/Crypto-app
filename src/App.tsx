// component
import Banner from "./components/Banner"
import Cards from "./components/Cards"
import { useDataContext } from '../src/context'
import { Link } from "react-router-dom"
import Loading from "./components/Loading"

export default function App() {
  const { data, loading } = useDataContext()

  function RenderContent() {
    if (loading) {
      return (
        <Loading />
      )
    } else {
      return (
        <>
          <Banner />
          <Cards />
          <h3><Link to="/products">products</Link></h3>
         

        </>
      )
    }

  }


  return (
    <RenderContent />
  )
}
