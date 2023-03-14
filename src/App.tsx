import './App.css'
import { Header, Main } from '@components'

function App() {
  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', height: '100%' }}>
      <Header />
      <Main />
    </div>
  )
}

export default App
