import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
    <Footer />

  </BrowserRouter>
  );
}

export default App;
