import React, { useState } from 'react';
import { Coffee, Pizza, Beer, Package, Check, CreditCard } from 'lucide-react';

export default function OrderPage() {
  const [activeTab, setActiveTab] = useState('menu');
  const [addedItems, setAddedItems] = useState({});
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: 'Classic Hot Dog', price: '$6.50', category: 'Food', icon: <Pizza /> },
    { id: 2, name: 'Loaded Nachos', price: '$8.00', category: 'Food', icon: <Pizza /> },
    { id: 3, name: 'Craft Beer IPA', price: '$12.00', category: 'Drink', icon: <Beer /> },
    { id: 4, name: 'Premium Coffee', price: '$4.50', category: 'Drink', icon: <Coffee /> }
  ];

  const handleAddToOrder = (item) => {
    setCart(prev => [...prev, item]);
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  const handleCheckout = () => {
    alert("Checkout flow initiated!");
    setCart([]);
    setActiveTab('orders');
  };

  const totalCartValue = cart.reduce((acc, curr) => acc + parseFloat(curr.price.replace('$', '')), 0);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ margin: '0 0 0.5rem 0' }}>In-Seat Ordering</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Order to your seat, or pick up from an express locker.</p>
        </div>
        <div style={{ display: 'flex', background: 'var(--bg-surface-glass)', padding: '0.5rem', borderRadius: 'var(--radius-lg)', border: 'var(--glass-border)' }}>
          <button 
            onClick={() => setActiveTab('menu')}
            style={{ background: activeTab === 'menu' ? 'rgba(255,255,255,0.1)' : 'transparent', border: 'none', color: 'white', padding: '8px 24px', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all 0.2s' }}
          >Menu</button>
          <button 
            onClick={() => setActiveTab('cart')}
            style={{ background: activeTab === 'cart' ? 'rgba(255,255,255,0.1)' : 'transparent', border: 'none', color: 'white', padding: '8px 24px', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all 0.2s' }}
          >Cart ({cart.length})</button>
          <button 
            onClick={() => setActiveTab('orders')}
            style={{ background: activeTab === 'orders' ? 'rgba(255,255,255,0.1)' : 'transparent', border: 'none', color: 'white', padding: '8px 24px', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all 0.2s' }}
          >Active Orders (1)</button>
        </div>
      </div>

      {activeTab === 'menu' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {menuItems.map(item => (
            <div key={item.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  {item.icon}
                </div>
                <span style={{ fontWeight: 600, fontSize: '1.2rem', color: 'var(--primary)' }}>{item.price}</span>
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px 0' }}>{item.name}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>{item.category}</span>
              </div>
              <button 
                className={`btn ${addedItems[item.id] ? 'btn-glass' : 'btn-primary'}`} 
                style={{ width: '100%', marginTop: 'auto', background: addedItems[item.id] ? 'var(--success)' : '' }}
                onClick={() => handleAddToOrder(item)}
              >
                {addedItems[item.id] ? <><Check size={18} /> Added!</> : 'Add to Order'}
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'cart' && (
        <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ margin: '0 0 1.5rem 0' }}>Your Cart</h2>
          {cart.length === 0 ? (
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '2rem' }}>Your cart is empty.</p>
          ) : (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {cart.map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '8px' }}>{item.icon}</div>
                      <span>{item.name}</span>
                    </div>
                    <span style={{ fontWeight: 600 }}>{item.price}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 700 }}>
                <span>Total</span>
                <span style={{ color: 'var(--primary)' }}>${totalCartValue.toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
                <CreditCard size={20} /> Checkout with Apple Pay
              </button>
            </>
          )}
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <Package size={32} color="var(--success)" />
            </div>
            <h2>Order #84920 Ready!</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Your order has been placed in an express locker.</p>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Pickup Location</p>
            <h1 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0', color: 'var(--text-accent)' }}>Locker 14-B</h1>
            <img src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=unlock-14b"} alt="QR Code" style={{ margin: '1rem 0', borderRadius: '8px', filter: 'invert(1)' }} />
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Scan this code at the locker to unlock.</p>
          </div>
        </div>
      )}
    </div>
  );
}
