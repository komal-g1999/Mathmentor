
import React from 'react';

const HomePage = () => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.5rem',
    margin: '1rem',
    flex: 1,
    minWidth: '250px',
    textAlign: 'center',
    backgroundColor: '#fff',
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: 'white' }}>
      {/* Hero Section */}
      <header style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h1 style={{ color: '#1E40AF', fontSize: '3rem' }}>Master Business Statistics with AI</h1>
        <p style={{ color: 'grey', fontSize: '1.2rem' }}>Your personal AI-powered tutor to conquer business statistics.</p>
        <button style={{
          backgroundColor: '#1E40AF',
          color: 'white',
          padding: '0.8rem 1.5rem',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '1rem'
        }}>Get Started</button>
      </header>

      {/* 3 Cards Section */}
      <section style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <h3>AI Guidance</h3>
          <p style={{color: 'grey'}}>Get instant, step-by-step help from our AI doubt solver.</p>
        </div>
        <div style={cardStyle}>
          <h3>Syllabus-Focused</h3>
          <p style={{color: 'grey'}}>Learn with a curriculum designed around your university syllabus.</p>
        </div>
        <div style={cardStyle}>
          <h3>Personalized Progress</h3>
          <p style={{color: 'grey'}}>Track your chapter-wise progress and maintain your learning streak.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
