import React from 'react';
import { MapPin, Users, Navigation } from 'lucide-react';

export default function SocialPage() {
  const friends = [
    { name: 'Sarah Jenkins', location: 'Section 104, Row G', isHere: true, avatar: 'SJ' },
    { name: 'Mike Torres', location: 'North Gate Concessions', isHere: true, avatar: 'MT' },
    { name: 'Alex Rivera', location: 'Arriving in 10 mins', isHere: false, avatar: 'AR' }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1.5rem' }}>
        <div>
          <h1 style={{ margin: '0 0 0.5rem 0' }}>Group Sync</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Coordinate and find your friends in the crowd.</p>
        </div>
        <button className="btn btn-primary" onClick={() => alert('Sending a location ping to all active group members.')}>Ping My Location</button>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {friends.map((friend, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: friend.isHere ? 1 : 0.6 }}>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '45px', height: '45px', background: friend.isHere ? 'var(--primary)' : 'var(--text-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                {friend.avatar}
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem' }}>{friend.name}</h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {friend.isHere ? <MapPin size={14} color="var(--success)" /> : null}
                  {friend.location}
                </p>
              </div>
            </div>

            {friend.isHere && (
              <button className="btn btn-glass" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => alert(`Opening AR Wayfinding targeted towards ${friend.name}`)}>
                <Navigation size={16} /> Track with AR
              </button>
            )}
          </div>
        ))}

        <button className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', borderStyle: 'dashed', color: 'var(--text-accent)' }}>
          <Users size={20} /> Invite Friends to Group Session
        </button>
      </div>
    </div>
  );
}
