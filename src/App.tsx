import NavBar from './components/NavBar'
import Home from './views/Home'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <NavBar />
      <Home />
    </div>
  );
}

export default App
