import React from 'react';
import { Ticket, Calendar, MapPin, Clock } from 'lucide-react';

export default function TicketsPage() {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ margin: '0 0 0.5rem 0' }}>My Tickets</h1>
        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>View your upcoming events and entry passes.</p>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Ticket Card */}
        <div className="glass-panel" style={{ flex: '1 1 400px', maxWidth: '500px', overflow: 'hidden' }}>
          <div style={{ padding: '2rem', background: 'rgba(59, 130, 246, 0.1)', borderBottom: '1px dashed rgba(255,255,255,0.2)', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem' }}>UPCOMING</span>
                <h2 style={{ margin: '0 0 0.5rem 0' }}>Championship Finals</h2>
                <p style={{ color: 'var(--text-secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> Fanzo Superdome</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <Ticket size={24} color="var(--primary)" />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 4px 0' }}>Date</p>
                <p style={{ margin: 0, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={16} /> Oct 24, 2026</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 4px 0' }}>Time</p>
                <p style={{ margin: 0, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={16} /> 7:00 PM</p>
              </div>
            </div>
            
            {/* Cutouts for ticket effect */}
            <div style={{ position: 'absolute', bottom: '-15px', left: '-15px', width: '30px', height: '30px', background: 'var(--bg-base)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', width: '30px', height: '30px', background: 'var(--bg-base)', borderRadius: '50%' }} />
          </div>

          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem', textAlign: 'left' }}>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 4px 0' }}>Gate</p>
                <h3 style={{ margin: 0, color: 'var(--primary)' }}>D</h3>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 4px 0' }}>Sec</p>
                <h3 style={{ margin: 0 }}>104</h3>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 4px 0' }}>Row</p>
                <h3 style={{ margin: 0 }}>G</h3>
              </div>
            </div>
            
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=entry-pass-12345" alt="Entry QR" style={{ borderRadius: '12px', filter: 'invert(1)', width: '150px' }} />
            <p style={{ margin: '1rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Scan at Gate D for automated entry.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
