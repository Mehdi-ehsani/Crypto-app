// component
import Home from './pages/Home';
// context
import { useDataContext } from '../src/context'
// loading
import CircularProgress from '@mui/material/CircularProgress';

import { Link } from "react-router-dom"

export default function App() {
  const { data, loading , isDark , setTheme } = useDataContext()
  isDark ? document.body.classList.remove("lite") : document.body.classList.add("lite")

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
          <Home/>
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
