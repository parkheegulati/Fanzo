import React, { useState } from 'react';
import { Play, Activity, Maximize, Radio } from 'lucide-react';

export default function ReplaysPage() {
  const [activeAngle, setActiveAngle] = useState('cam1');

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Radio color="var(--danger)" /> Live Multi-Angle Replays
          </h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Exclusive in-stadium footage and instant highlights.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Main Video Screen Mock */}
        <div style={{ background: '#000', width: '100%', aspectRatio: '16/9', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.6)', padding: '4px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '6px', color: 'white', fontWeight: 600 }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--danger)', borderRadius: '50%' }}></span> LIVE
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'rgba(255,255,255,0.2)' }}>
            <Play size={48} />
            <span style={{ marginTop: '1rem' }}>Camera Stream {activeAngle === 'cam1' ? '1 (Endzone)' : activeAngle === 'cam2' ? '2 (Sideline)' : '3 (Skycam)' }</span>
          </div>
          <button style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', border: 'none', color: 'white', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}>
            <Maximize size={20} />
          </button>
        </div>

        {/* Controls */}
        <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.4)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          <button 
            className={`btn ${activeAngle === 'cam1' ? 'btn-primary' : 'btn-glass'}`} 
            onClick={() => setActiveAngle('cam1')}
          >Endzone Cam</button>
          <button 
            className={`btn ${activeAngle === 'cam2' ? 'btn-primary' : 'btn-glass'}`} 
            onClick={() => setActiveAngle('cam2')}
          >Sideline Cam</button>
          <button 
            className={`btn ${activeAngle === 'cam3' ? 'btn-primary' : 'btn-glass'}`} 
            onClick={() => setActiveAngle('cam3')}
          >Skycam</button>
          <button className="btn btn-glass" style={{ color: 'var(--text-accent)' }} onClick={() => alert('Opening AR Highlight Tracking View')}>
            <Activity size={18} /> AR Highlights
          </button>
        </div>
      </div>
    </div>
  );
}
