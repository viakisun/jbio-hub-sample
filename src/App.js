import React from 'react';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🧬 JBio Hub</h1>
        <p>Jeonbuk Bio Web Platform - Molecular Research Hub</p>
      </header>
      <main>
        <section className="welcome-section">
          <h2>Welcome to JBio Hub</h2>
          <p>Your gateway to biotechnology research and molecular data.</p>
          <div className="features">
            <div className="feature-card">
              <h3>🔬 Molecule Database</h3>
              <p>Comprehensive collection of biological molecules</p>
            </div>
            <div className="feature-card">
              <h3>🔍 Advanced Search</h3>
              <p>Find molecules by structure, properties, or function</p>
            </div>
            <div className="feature-card">
              <h3>📊 Research Tools</h3>
              <p>Analyze and visualize molecular data</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}