// component
import Banner from "./components/Banner"
import Cards from "./components/Cards/Cards"
import { useDataContext } from '../src/context'
import { Link } from "react-router-dom"
import Loading from "./components/Loading"

export default function App() {
  const { data, loading , isDark , setTheme } = useDataContext()
  isDark ? document.body.classList.remove("lite") : document.body.classList.add("lite")

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
          <button onClick={() => setTheme()}>{isDark ? "liteMode" : "darkMode" }</button>
          {console.log(isDark)}
        </>
      )
    }

  }


  return (
    <RenderContent />
  )
}
