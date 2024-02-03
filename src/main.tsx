import ReactDOM from 'react-dom/client'
import { CryptoDataContextProvider } from '../src/context.tsx'
import App from './App.tsx'

import "./global.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
    <CryptoDataContextProvider>
        <App />
    </CryptoDataContextProvider>
)
