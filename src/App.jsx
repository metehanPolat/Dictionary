import './App.css'
import Container from './component/container'
import { DictionaryProvider } from './context/DictionaryContext'
import { SearchProvider } from './context/SearchContext'
import { useTheme } from './context/Theme'

function App() {



  const { theme, setTheme } = useTheme()

  return (
    <div style={theme}>
      <SearchProvider>
        <DictionaryProvider>
          <Container />
        </DictionaryProvider>
      </SearchProvider>
    </div>
  )
}

export default App;
