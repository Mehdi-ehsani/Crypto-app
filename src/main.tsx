import ReactDOM from 'react-dom/client'
import { CryptoDataContextProvider } from '../src/context.tsx'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <CryptoDataContextProvider>
        <App />
    </CryptoDataContextProvider>
)
