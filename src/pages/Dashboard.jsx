import React, { useState, useEffect } from 'react';

const EventDashboard = () => {
  const [events, setEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Mock Data Fetch
    setEvents([
      { id: 1, name: "Global AI Summit", tickets: "850/1000", revenue: "$42,000", status: "Selling Fast", color: "#6366f1" },
      { id: 2, name: "Midnight Jazz Night", tickets: "120/150", revenue: "$3,600", status: "Almost Full", color: "#ec4899" },
      { id: 3, name: "Crypto Expo 2025", tickets: "2100/5000", revenue: "$150,000", status: "Active", color: "#f59e0b" },
      { id: 4, name: "Vegan Food Fest", tickets: "400/600", revenue: "$8,000", status: "Active", color: "#10b981" },
    ]);

    setNotifications([
      { id: 1, msg: "New ticket purchased by Sarah J.", time: "2 mins ago" },
      { id: 2, msg: "Venue contract signed for AI Summit", time: "1 hour ago" },
      { id: 3, msg: "Payout of $12,000 processed", time: "5 hours ago" },
    ]);
  }, []);

  const styles = {
    wrapper: {
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      paddingBottom: '50px'
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 60px',
      borderBottom: '1px solid #222',
      backgroundColor: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    statGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      marginBottom: '40px'
    },
    statCard: {
      padding: '25px',
      background: 'linear-gradient(145deg, #111, #1a1a1a)',
      borderRadius: '20px',
      border: '1px solid #222'
    },
    contentLayout: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '30px'
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  };

  return (
    <div style={styles.wrapper}>
    <div style={styles.container}>
        {/* --- TOP STATS --- */}
        <div style={styles.statGrid}>
          {[
            { label: 'Revenue', val: '$197.5k', color: '#6366f1' },
            { label: 'Avg. Attendance', val: '94%', color: '#10b981' },
            { label: 'Tickets Sold', val: '3,420', color: '#f59e0b' },
            { label: 'Active Events', val: '12', color: '#ec4899' },
          ].map((s, i) => (
            <div key={i} style={styles.statCard}>
              <div style={{ color: '#666', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px' }}>{s.label}</div>
              <div style={{ fontSize: '28px', fontWeight: '800' }}>{s.val}</div>
              <div style={{ height: '4px', width: '40px', backgroundColor: s.color, marginTop: '15px', borderRadius: '2px' }}></div>
            </div>
          ))}
        </div>

        <div style={styles.contentLayout}>
          {/* --- LEFT COLUMN: EVENT LIST --- */}
          <div>
            <div style={styles.sectionTitle}>Upcoming Events</div>
            {events.filter(e => e.name.toLowerCase().includes(search.toLowerCase())).map(event => (
              <div key={event.id} style={{ 
                backgroundColor: '#111', 
                padding: '20px', 
                borderRadius: '18px', 
                marginBottom: '15px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                border: '1px solid #1a1a1a'
              }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '45px', height: '45px', backgroundColor: '#1a1a1a', border: `2px solid ${event.color}`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '20px' }}>🗓️</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '16px' }}>{event.name}</div>
                    <div style={{ color: '#555', fontSize: '13px' }}>{event.tickets} Tickets Sold</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold', color: '#fff' }}>{event.revenue}</div>
                  <div style={{ color: event.color, fontSize: '11px', fontWeight: 'bold' }}>{event.status}</div>
                </div>
              </div>
            ))}
          </div>

          {/* --- RIGHT COLUMN: ACTIVITY & ACTIONS --- */}
          <div>
            <div style={styles.sectionTitle}>Recent Activity</div>
            <div style={{ backgroundColor: '#111', borderRadius: '20px', padding: '20px', border: '1px solid #1a1a1a' }}>
              {notifications.map(n => (
                <div key={n.id} style={{ marginBottom: '20px', borderLeft: '2px solid #333', paddingLeft: '15px' }}>
                  <div style={{ fontSize: '14px', color: '#eee' }}>{n.msg}</div>
                  <div style={{ fontSize: '11px', color: '#555', marginTop: '4px' }}>{n.time}</div>
                </div>
              ))}
              <button style={{ 
                width: '100%', 
                padding: '12px', 
                backgroundColor: '#1a1a1a', 
                border: '1px solid #333', 
                color: '#fff', 
                borderRadius: '10px', 
                cursor: 'pointer',
                marginTop: '10px'
              }}>
                View All Activity
              </button>
            </div>

            <div style={{ ...styles.sectionTitle, marginTop: '30px' }}>Quick Actions</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button style={{ padding: '15px', backgroundColor: '#6366f1', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 'bold' }}>Add Event</button>
              <button style={{ padding: '15px', backgroundColor: '#333', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 'bold' }}>Export PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;