import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'




function App() {
    return (
        <Router>
            <Routes>
           
                <Route path="/" element={<Layout />}>
                    
                    </Route>
                  </Routes>
        </Router>
    )
}
export default App
