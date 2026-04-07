import React, { useState, useEffect } from 'react';
import { Users, Timer, ArrowRight, Activity, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [densities, setDensities] = useState({
    'North Gate': 'green',
    'South Gate': 'red',
    'East Gate': 'yellow',
    'West Gate': 'green',
    'Section 101-105 Concessions': 'yellow',
    'Section 106-110 Restrooms': 'green',
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const gates = ['North Gate', 'South Gate', 'East Gate', 'West Gate'];
      const statuses = ['green', 'yellow', 'red'];
      const randomGate = gates[Math.floor(Math.random() * gates.length)];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      
      setDensities(prev => ({
        ...prev,
        [randomGate]: randomStatus
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'green': return 'var(--success)';
      case 'yellow': return 'var(--warning)';
      case 'red': return 'var(--danger)';
      default: return 'var(--text-secondary)';
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
      {/* Left Column: Live Map & Main Stats */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Header Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Users size={24} color="var(--primary)" />
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Venue Capacity</p>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>84%</h3>
            </div>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Timer size={24} color="var(--success)" />
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Avg. Wait Time</p>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>4 min</h3>
            </div>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <Activity size={24} color="var(--warning)" />
            </div>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Active Hawkers</p>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>124</h3>
            </div>
          </div>
        </div>

        {/* Live Map Area */}
        <div className="glass-panel animate-fade-in animate-delay-1" style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={24} color="var(--text-accent)" /> Live Density Map
            </h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem' }}><span className="status-dot status-green"></span> Low</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem' }}><span className="status-dot status-yellow"></span> Medium</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem' }}><span className="status-dot status-red"></span> High</span>
            </div>
          </div>
          
          <div style={{ 
            background: 'rgba(0,0,0,0.2)', 
            borderRadius: 'var(--radius-md)', 
            border: '1px solid rgba(255,255,255,0.05)',
            flexGrow: 1,
            minHeight: '400px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Abstract Stadium Graphic */}
            <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%', maxWidth: '350px' }}>
              {/* Field */}
              <rect x="150" y="100" width="100" height="200" rx="20" fill="#1e293b" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              
              {/* North Gate */}
              <path d="M120 50 L280 50 Q300 50 300 70 L300 80 L100 80 L100 70 Q100 50 120 50 Z" 
                    fill={getStatusColor(densities['North Gate'])} opacity="0.6" style={{ transition: 'fill 1s ease' }} />
              
              {/* South Gate */}
              <path d="M120 350 L280 350 Q300 350 300 330 L300 320 L100 320 L100 330 Q100 350 120 350 Z" 
                    fill={getStatusColor(densities['South Gate'])} opacity="0.6" style={{ transition: 'fill 1s ease' }} />
              
              {/* West Gate */}
              <path d="M80 100 L50 120 L50 280 L80 300 Z" 
                    fill={getStatusColor(densities['West Gate'])} opacity="0.6" style={{ transition: 'fill 1s ease' }} />
              
              {/* East Gate */}
              <path d="M320 100 L350 120 L350 280 L320 300 Z" 
                    fill={getStatusColor(densities['East Gate'])} opacity="0.6" style={{ transition: 'fill 1s ease' }} />
            </svg>

            {/* Pulsing rings */}
            <div style={{ position: 'absolute', top: '20%', left: '30%', width: '20px', height: '20px', background: 'var(--text-accent)', borderRadius: '50%', opacity: 0.8, boxShadow: '0 0 20px var(--text-accent)', animation: 'pulse 2s infinite' }} />
            <div style={{ position: 'absolute', bottom: '30%', right: '25%', width: '15px', height: '15px', background: 'var(--success)', borderRadius: '50%', opacity: 0.8, boxShadow: '0 0 15px var(--success)' }} />
          </div>
        </div>
      </div>

      {/* Right Column: Routing & Queues */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <div className="glass-panel animate-fade-in animate-delay-2" style={{ padding: '1.5rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Optimal Entry Route
            <span style={{ fontSize: '0.8rem', background: 'rgba(56, 189, 248, 0.2)', color: 'var(--text-accent)', padding: '4px 8px', borderRadius: 'var(--radius-full)' }}>Smart Ticket</span>
          </h3>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Your Assigned Gate</p>
            <h1 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0', color: 'var(--primary)' }}>Gate D</h1>
            <p style={{ margin: 0 }}>Entry Window: <strong>6:15 PM - 6:30 PM</strong></p>
          </div>
          <button onClick={() => navigate('/wayfinding')} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '12px' }}>
            View Walking Directions <ArrowRight size={18} />
          </button>
        </div>

        <div className="glass-panel animate-fade-in animate-delay-3" style={{ padding: '1.5rem', flexGrow: 1 }}>
          <h3 style={{ margin: '0 0 1.5rem 0' }}>Live Facility Queues</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Object.entries(densities).map(([name, status]) => (
              <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '0.95rem' }}>{name}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {status === 'green' ? '< 2 min' : status === 'yellow' ? '5-10 min' : '15+ min'}
                  </span>
                  <span className={`status-dot status-${status}`}></span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.8; }
        }
      `}} />
    </div>
  );
}
