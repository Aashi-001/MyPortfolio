import React from "react";

export default function Portfolio() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Aashi</h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>Software Engineer | Developer | Curious Mind</p>
        </header>

        {/* About Section */}
        <section style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '1rem', marginBottom: '2rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>About Me</h2>
          <p>
            I'm Aashi, a passionate software developer who enjoys building efficient systems,
            exploring networks, and turning complex ideas into reality. Currently diving into distributed
            systems, protocol switching, and AI-powered applications.
          </p>
        </section>

        {/* Projects Section */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Projects</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '1rem', flex: '1 1 45%', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontWeight: 'bold' }}>Programmable Proxy</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                A protocol-switching proxy for multi-cloud microservices using HTTP & MQTT.
              </p>
              <a href="#">View Code</a>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '1rem', flex: '1 1 45%', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontWeight: 'bold' }}>SweetPred</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                A web app to predict sweetness of molecules using a custom-trained ML model.
              </p>
              <a href="#">Try It</a>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '1rem', flex: '1 1 45%', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontWeight: 'bold' }}>Graph Visualizer</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>
                Visualizes shortest paths and graph traversals like Dijkstra and BFS.
              </p>
              <a href="#">Explore</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Get in Touch</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="mailto:aashi@example.com">Email</a>
            <a href="https://github.com/Aashi-001">GitHub</a>
            <a href="https://linkedin.com/in/aashi">LinkedIn</a>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.9rem', color: '#777' }}>
          &copy; {new Date().getFullYear()} Aashi. Built with React and ❤️.
        </footer>
      </div>
    </div>
  );
}
