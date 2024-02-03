// component
import Banner from "./components/Banner"
import { useDataContext } from '../src/context'

export default function App() {
  const { data, error, loading } = useDataContext()

  function RenderContent() {

    if (error) {
      console.log(error)
    }
    if (loading) {
      return (
        <h3>loading...</h3>
      )
    } else {
      return (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name} - {item.current_price}</li>
          ))}
        </ul>
      )
    }

  }
  return (
    <RenderContent />
  )
}
