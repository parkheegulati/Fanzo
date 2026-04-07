import React from 'react';
import { Camera, Map, Video, Navigation } from 'lucide-react';

export default function WayfindingPage() {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: 'calc(100vh - 150px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ margin: '0 0 0.5rem 0' }}>AR Wayfinding</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Find your seat or meet friends easily.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ flexGrow: 1, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Mock Camera Feed Background */}
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'radial-gradient(circle at 50% 50%, #2a3b5c 0%, #0f172a 100%)',
          zIndex: 0
        }} />
        
        {/* AR Overlay UI */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ 
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', padding: '1rem 2rem', 
            borderRadius: 'var(--radius-full)', display: 'inline-flex', alignItems: 'center', gap: '1rem',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '4rem'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)' }}>
              <Navigation size={20} /> 120ft Straight Ahead
            </span>
          </div>

          <div style={{ 
            width: '0', 
            height: '0', 
            borderLeft: '40px solid transparent',
            borderRight: '40px solid transparent',
            borderBottom: '80px solid rgba(56, 189, 248, 0.8)',
            margin: '0 auto',
            filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.5))',
            animation: 'float 2s ease-in-out infinite'
          }} />
          
          <h2 style={{ marginTop: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Section 104, Row G</h2>
        </div>

        {/* Action Bar */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', zIndex: 1 }}>
          <button onClick={() => alert('Opening 2D Map View (Mock)')} className="btn btn-glass" style={{ padding: '1rem', borderRadius: '50%' }}><Map size={24} /></button>
          <button onClick={() => alert('Location matching link copied to clipboard! (Mock)')} className="btn btn-primary" style={{ padding: '1rem 2rem', borderRadius: 'var(--radius-full)' }}>Share Location</button>
          <button onClick={() => alert('Starting Video Call with Group... (Mock)')} className="btn btn-glass" style={{ padding: '1rem', borderRadius: '50%' }}><Video size={24} /></button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }
      `}} />
    </div>
  );
}
