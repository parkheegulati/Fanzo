import React from 'react';
import { Navigation2, Car, TrainFront, ShieldAlert } from 'lucide-react';

export default function TransitPage() {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
      <div>
        <h1 style={{ margin: '0 0 0.5rem 0' }}>Transit & Parking</h1>
        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Real-time updates on your journey home.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Parking Panel */}
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><Car size={20} color="var(--primary)" /> Parking Status</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0' }}>Lot A (VIP)</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Pre-booked only</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ color: 'var(--danger)', fontWeight: 600 }}>FULL</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0' }}>Lot B (General)</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>$40 / game</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ color: 'var(--warning)', fontWeight: 600 }}>12% Open</span>
                  <div style={{ height: '4px', width: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '88%', height: '100%', background: 'var(--warning)' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" onClick={() => alert('Handoff to Google Maps/Apple Maps with optimal gate routing...')} style={{ width: '100%', marginTop: '1rem' }}>Get Driving Directions</button>
          </div>

          {/* Ride Share */}
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><Navigation2 size={20} color="var(--primary)" /> Ride Share</h3>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: 'var(--radius-md)', textAlign: 'center', marginBottom: '1rem' }}>
              <p style={{ margin: '0 0 8px 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Current Wait Time</p>
              <h2 style={{ margin: 0, color: 'var(--primary)' }}>12 - 15 mins</h2>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: 'var(--radius-md)', color: 'var(--warning)', fontSize: '0.9rem', display: 'flex', gap: '10px' }}>
              <ShieldAlert size={20} style={{ flexShrink: 0 }} /> High demand expected after the 4th quarter. Surge pricing may apply.
            </div>
          </div>

        </div>

        {/* Right Column (Trains) */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}><TrainFront size={20} color="var(--primary)" /> Local Transit Boards</h3>
          
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {[
              { line: 'Red Line', dest: 'Downtown Metro', time: '4 min', status: 'On Time' },
              { line: 'Blue Line', dest: 'Airport Terminal', time: '12 min', status: 'On Time' },
              { line: 'Red Line', dest: 'Downtown Metro', time: '18 min', status: 'Delayed' },
              { line: 'Green Line', dest: 'South Suburbs', time: '21 min', status: 'On Time' }
            ].map((train, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: train.line.includes('Red') ? 'var(--danger)' : train.line.includes('Blue') ? 'var(--primary)' : 'var(--success)' }}></span>
                    {train.line}
                  </h4>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>To {train.dest}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <h3 style={{ margin: '0 0 4px 0', color: train.status === 'Delayed' ? 'var(--warning)' : 'white' }}>{train.time}</h3>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{train.status}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
