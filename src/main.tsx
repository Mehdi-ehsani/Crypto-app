import ReactDOM from 'react-dom/client'
import { CryptoDataContextProvider } from '../src/context.tsx'
import App from './App.tsx'
import "./global.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import Contact from './pages/Contact.tsx'
import Products from './pages/Products.tsx'
import Product from './pages/Product.tsx'

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    errorElement: <NotFound />
},
{
    path: "/contact",
    element: <Contact />
},
{
    path: "/products",
    element: <Products />
},
{
    path: "/products/product/:productId",
    element: <Product />
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CryptoDataContextProvider>
        <RouterProvider router={router} />
    </CryptoDataContextProvider>
)
