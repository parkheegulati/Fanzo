import React, { useState } from 'react';
import { Map, ShoppingBag, Navigation, User, Bell, Users, Video, Navigation2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../App';

export default function Navbar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navItems = [
    { name: 'Live Map', path: '/', icon: <Map size={18} /> },
    { name: 'Order', path: '/order', icon: <ShoppingBag size={18} /> },
    { name: 'Wayfinding', path: '/wayfinding', icon: <Navigation size={18} /> },
    { name: 'Friends', path: '/social', icon: <Users size={18} /> },
    { name: 'Replays', path: '/replays', icon: <Video size={18} /> },
    { name: 'Transit', path: '/transit', icon: <Navigation2 size={18} /> }
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-surface-glass)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: 'var(--glass-border)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            background: 'linear-gradient(135deg, var(--text-accent), var(--primary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            Fanzo
          </h1>
        </Link>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {navItems.map(item => (
            <Link 
              key={item.name} 
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                color: location.pathname === item.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: location.pathname === item.path ? 600 : 500,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) e.currentTarget.style.background = 'transparent';
              }}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '0.8rem', position: 'relative', alignItems: 'center' }}>
        
        {/* Gamification Badge */}
        <div 
          onClick={() => alert('Opening Gamification Hub to redeem Fanzo Points!')}
          style={{ 
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.05))',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          color: 'var(--warning)',
          padding: '4px 10px',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.85rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 0 10px rgba(245, 158, 11, 0.1)',
          cursor: 'pointer'
        }}>
           {user?.points ? user.points.toLocaleString() : 1250} PTS
        </div>

        <button 
          className={`btn ${showNotifications ? 'btn-primary' : 'btn-glass'}`} 
          style={{ padding: '8px', borderRadius: '50%' }}
          onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); }}
        >
          <Bell size={20} />
          <span style={{ position: 'absolute', top: 0, right: '45px', width: '8px', height: '8px', background: 'var(--danger)', borderRadius: '50%' }} />
        </button>
        
        {showNotifications && (
          <div className="glass-panel animate-fade-in" style={{ position: 'absolute', top: '50px', right: '40px', width: '300px', padding: '1rem', zIndex: 110 }}>
            <h4 style={{ margin: '0 0 1rem 0' }}>Notifications</h4>
            <div style={{ background: 'rgba(56, 189, 248, 0.1)', borderLeft: '3px solid var(--text-accent)', padding: '0.5rem 1rem', borderRadius: '4px', marginBottom: '0.5rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Gate D</strong> is now open for your entry window.</p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>2 mins ago</span>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Your order #84920 is ready for pickup.</p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>10 mins ago</span>
            </div>
          </div>
        )}

        <button 
          className={`btn ${showProfile ? 'btn-primary' : 'btn-glass'}`} 
          style={{ padding: '8px', borderRadius: '50%' }}
          onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); }}
        >
          <User size={20} />
        </button>

        {showProfile && (
          <div className="glass-panel animate-fade-in" style={{ position: 'absolute', top: '50px', right: '0', width: '250px', padding: '1.5rem', textAlign: 'center', zIndex: 110 }}>
            <div style={{ width: '60px', height: '60px', background: 'var(--primary)', borderRadius: '50%', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={30} />
            </div>
            <h3 style={{ margin: '0 0 4px 0', textTransform: 'capitalize' }}>{user?.name || 'John Doe'}</h3>
            <span style={{ display: 'inline-block', fontSize: '0.8rem', background: 'var(--warning)', color: '#000', padding: '2px 8px', borderRadius: '12px', fontWeight: 600, marginBottom: '1rem' }}>Season Member</span>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/tickets" onClick={() => setShowProfile(false)} className="btn btn-glass" style={{ width: '100%', justifyContent: 'flex-start' }}>My Tickets</Link>
              <Link to="/payment" onClick={() => setShowProfile(false)} className="btn btn-glass" style={{ width: '100%', justifyContent: 'flex-start' }}>Payment Methods</Link>
              <button 
                onClick={() => { setShowProfile(false); logout(); }} 
                className="btn btn-glass" 
                style={{ width: '100%', justifyContent: 'flex-start', color: 'var(--danger)' }}
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
