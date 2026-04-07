import React, { useState } from 'react';
import { useAuth } from '../App';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('john.doe@example.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
      });
      if (response.ok) {
        const data = await response.json();
        login(data.user);
        navigate('/');
      } else {
        alert('Authentication failed');
      }
    } catch (err) {
      console.error(err);
      alert('Network error connecting to backend');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem'
    }} className="animate-fade-in">
      
      <div className="glass-panel" style={{ width: '100%', maxWidth: '450px', padding: '3rem 2.5rem', textAlign: 'center' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ 
            fontSize: '2rem', 
            fontWeight: 800, 
            background: 'linear-gradient(135deg, var(--text-accent), var(--primary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 0 0.5rem 0'
          }}>
            Fanzo
          </h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Log in to access your smart event experience.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>
              <Mail size={20} />
            </div>
            <input 
              type="email" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Email"
              required
              style={{
                width: '100%', padding: '1rem 1rem 1rem 3rem',
                background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-md)', color: 'white', outline: 'none',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>
              <Lock size={20} />
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{
                width: '100%', padding: '1rem 1rem 1rem 3rem',
                background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-md)', color: 'white', outline: 'none',
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              <input type="checkbox" style={{ accentColor: 'var(--primary)' }} /> Remember me
            </label>
            <a href="#" style={{ color: 'var(--primary)' }}>Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1.1rem' }}>
            Authenticate <ArrowRight size={20} />
          </button>
        </form>

        <p style={{ marginTop: '2.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          By logging in, you agree to our <a href="#" style={{ color: 'white' }}>Terms of Service</a>.
        </p>
      </div>
      
    </div>
  );
}
