import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import OrderPage from './pages/OrderPage';
import WayfindingPage from './pages/WayfindingPage';
import LoginPage from './pages/LoginPage';
import TicketsPage from './pages/TicketsPage';
import PaymentPage from './pages/PaymentPage';
import SocialPage from './pages/SocialPage';
import ReplaysPage from './pages/ReplaysPage';
import TransitPage from './pages/TransitPage';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// A simple Route Wrapper for authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <>
      <Navbar />
      <main className="app-container animate-fade-in">
        {children}
      </main>
    </>
  );
};

function App() {
  // Simple auth state for the prototype
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (username) => {
    setIsAuthenticated(true);
    setUser({ name: username || 'John Doe' });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/order" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
          <Route path="/wayfinding" element={<ProtectedRoute><WayfindingPage /></ProtectedRoute>} />
          <Route path="/tickets" element={<ProtectedRoute><TicketsPage /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
          <Route path="/social" element={<ProtectedRoute><SocialPage /></ProtectedRoute>} />
          <Route path="/replays" element={<ProtectedRoute><ReplaysPage /></ProtectedRoute>} />
          <Route path="/transit" element={<ProtectedRoute><TransitPage /></ProtectedRoute>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
