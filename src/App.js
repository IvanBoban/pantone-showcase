import './App.css'
import Controls from './components/Controls'
import { ImagesContextProvider } from './context/ImageContext'
function App() {
    return (
        <div className="App">
            <ImagesContextProvider>
                <Controls />
            </ImagesContextProvider>
        </div>
    )
}

export default App
