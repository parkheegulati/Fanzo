import React from 'react';
import { CreditCard, Plus, ShieldCheck } from 'lucide-react';

export default function PaymentPage() {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
      <div>
        <h1 style={{ margin: '0 0 0.5rem 0' }}>Payment Methods</h1>
        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Manage your cards and express checkout options.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--primary)' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CreditCard size={24} />
            </div>
            <div>
              <h3 style={{ margin: '0 0 4px 0' }}>Apple Pay</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Connected Device</p>
            </div>
          </div>
          <span style={{ background: 'rgba(56, 189, 248, 0.2)', color: 'var(--text-accent)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>Default</span>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '40px', background: 'linear-gradient(135deg, #1e3a8a, #1ea362)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontStyle: 'italic' }}>
              Visa
            </div>
            <div>
              <h3 style={{ margin: '0 0 4px 0' }}>Visa ending in 4242</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Expires 12/28</p>
            </div>
          </div>
          <button className="btn btn-glass">Edit</button>
        </div>

        <button className="glass-panel" onClick={() => alert('Opening secure Stripe card entry modal...')} style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer', borderStyle: 'dashed' }}>
          <Plus size={20} /> Add New Payment Method
        </button>

      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', justifyContent: 'center', marginTop: '2rem' }}>
        <ShieldCheck size={18} color="var(--success)" /> Payments are securely encrypted and processed by Stripe.
      </div>
    </div>
  );
}
