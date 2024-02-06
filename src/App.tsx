// component
import Banner from "./components/Banner"
import Cards from "./components/Cards/Cards"
import { useDataContext } from '../src/context'
import { Link } from "react-router-dom"
// import Loading from "./components/Loading"
import CircularProgress from '@mui/material/CircularProgress';

export default function App() {
  const { data, loading , isDark , setTheme } = useDataContext()

  function RenderContent() {
    if (loading) {
      return (
        <div className="flex items-center justify-center">
          <CircularProgress className="mt-10" />
        </div>
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
