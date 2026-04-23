import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Members from './pages/Members';
import Cheki from './pages/Cheki';
import Checkout from './pages/Checkout';
import Receipt from './pages/Receipt';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/cheki" element={<Cheki />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
