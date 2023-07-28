import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/Home/home';
import LoginPage from './pages/Login/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Navbar /> */}
      {/* <LoginPage /> */}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
