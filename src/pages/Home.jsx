import { Link } from 'react-router-dom'
import DavoraLogo from '../components/DavoraLogo'

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>Next Generation AI</span>
            </div>
            
            <h1 className="hero-title">
              Redefining Intelligence,<br />
              <span className="hero-title-highlight">One Interaction at a Time</span>
            </h1>
            
            <p className="hero-subtitle">
              Dynamics Inc. builds cutting-edge AI tools that empower everyone to achieve more.
              Meet Davora AI - your intelligent companion for the digital age.
            </p>
            
            <div className="hero-cta">
              <Link to="/product" className="btn btn-primary">
                Try Davora AI
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="logo-showcase">
              <DavoraLogo size={200} />
            </div>
            <div className="hero-pattern"></div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="features-preview section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Makes Davora AI Different</h2>
            <p className="section-subtitle">
              Experience AI that understands context, learns from interactions, and adapts to your needs.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card card fade-in-up">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Lightning Fast</h3>
              <p>Get instant responses with our optimized AI engine.</p>
            </div>
            
            <div className="feature-card card fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Secure & Private</h3>
              <p>Your data stays yours. We never sell or share your information.</p>
            </div>
            
            <div className="feature-card card fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Always Available</h3>
              <p>Access Davora AI 24/7 from any device, anywhere.</p>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/product" className="btn btn-secondary">
              Explore All Features
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Future?</h2>
            <p>Join thousands of users who are already transforming their workflow with Davora AI.</p>
            <Link to="/product" className="btn btn-primary">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
