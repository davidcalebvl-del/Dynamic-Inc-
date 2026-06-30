import DavoraLogo from '../components/DavoraLogo'

const features = [
  {
    title: 'Natural Conversations',
    description: 'Engage in fluid, natural conversations with Davora AI. Our advanced NLP understands context and nuance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  },
  {
    title: 'Multi-Platform',
    description: 'Access Davora AI on web, mobile, and desktop. Seamlessly sync your conversations across all devices.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    )
  },
  {
    title: 'Smart Memory',
    description: 'Davora remembers your preferences and past conversations, providing personalized responses.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 8v-1a4 4 0 0 0-8 0 5 5 0 0 1 9.9 2"/>
        <path d="M3 12a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z"/>
        <path d="M7 12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2z"/>
      </svg>
    )
  },
  {
    title: 'Code Generation',
    description: 'Need help with coding? Davora can write, explain, and debug code in multiple programming languages.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
      </svg>
    )
  },
  {
    title: 'Content Creation',
    description: 'From emails to essays, Davora helps you create high-quality content faster than ever.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
      </svg>
    )
  },
  {
    title: 'Language Translation',
    description: 'Break language barriers with real-time translation across 50+ languages.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  }
]

function Product() {
  return (
    <div className="product-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Davora AI</h1>
          <p className="page-subtitle">
            Your Intelligent AI Assistant
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="product-hero section">
        <div className="container">
          <div className="product-hero-content">
            <div className="product-hero-text">
              <div className="product-badge">
                <span>AI Assistant</span>
              </div>
              
              <h2>Meet Davora AI</h2>
              <p className="product-hero-description">
                Davora AI is your personal AI assistant, designed to help you with any task,
                answer any question, and make your digital life easier. Whether you need help
                with work, study, or creative projects, Davora is here to assist.
              </p>
              
              <p className="product-comparison">
                In the same category as ChatGPT and Claude, Davora AI offers a unique blend of
                intelligence, speed, and user-friendly design.
              </p>
              
              <div className="product-hero-cta">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.dynamicsinc.davora" 
                  className="btn btn-primary"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.43,14.05l-1-1.73c0-.3-.19-.56-.44-.69l-1.35-.63c-.28-.13-.59-.19-.89-.19l-1.56,0c-.5,0-.93.15-1.25.45l-2.1,1.48c-.35.24-.55.66-.55,1.15l0,2.5c0,.5.2,1,.55,1.15l2.1,1.48c.32.24.75.45,1.25.45l1.56,0c.3,0,.61-.06.89-.19l1.35-.63c.25-.13.44-.39.44-.69l1-1.73c0-.3-.19-.56-.44-.69L18.07,15.2c-.28-.13-.59-.19-.89-.19l-1.56,0c-.5,0-.93.15-1.25.45l-2.1,1.48c-.35.24-.55.66-.55,1.15l0,1.25c0,.5.2,1,.55,1.15l2.1,1.48c.32.24.75.45,1.25.45l1.56,0c.3,0,.61-.06.89-.19l1.35-.63c.25-.13.44-.39.44-.69l1-1.73c0-.3-.19-.56-.44-.69l-1.35-.63c-.28-.13-.59-.19-.89-.19l-1.56,0c-.5,0-.93.15-1.25.45l-2.1,1.48c-.35.24-.55.66-.55,1.15l0,1.25c0,1.1-.9,2-2,2s-2-.9-2-2v-10c0-1.1.9-2 2-2s2,.9,2,2l0,2.5c0,.5.2,1,.55,1.15l2.1,1.48c.32.24.75.45,1.25.45l1.56,0c.3,0,.61-.06.89-.19l1.35-.63c.25-.13.44-.39.44-.69l1-1.73c0-.3-.19-.56-.44-.69l-1.35-.63c-.28-.13-.59-.19-.89-.19l-1.56,0c-.5,0-.93.15-1.25.45L10.32,12.8c-.35.24-.55.66-.55,1.15l0,2.5c0,.5.2,1,.55,1.15l2.1,1.48z"/>
                  </svg>
                  Download on Google Play
                </a>
                <a href="/contact" className="btn btn-secondary">
                  Contact Sales
                </a>
              </div>
            </div>
            
            <div className="product-hero-visual">
              <div className="product-mockup card">
                <div className="mockup-header">
                  <DavoraLogo size={32} />
                  <div className="mockup-title">Davora AI</div>
                </div>
                <div className="mockup-chat">
                  <div className="chat-message user">
                    <p>What's the capital of France?</p>
                  </div>
                  <div className="chat-message ai">
                    <p>The capital of France is Paris. It's known as the "City of Light" and is famous for landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.</p>
                  </div>
                  <div className="chat-message user">
                    <p>Tell me more about Paris</p>
                  </div>
                  <div className="chat-input">
                    <input type="text" placeholder="Type your message..." readOnly />
                    <button className="send-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="product-features section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-subtitle">
              Everything you need in an AI assistant
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How People Use Davora AI</h2>
          </div>
          
          <div className="use-cases-grid">
            <div className="use-case-card card fade-in-up">
              <div className="use-case-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Students</h3>
              <p>Get instant help with homework, research, and understanding complex concepts.</p>
            </div>
            
            <div className="use-case-card card fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="use-case-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <h3>Developers</h3>
              <p>Write, debug, and optimize code with AI-powered assistance.</p>
            </div>
            
            <div className="use-case-card card fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="use-case-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Professionals</h3>
              <p>Boost productivity with AI assistance for writing, analysis, and decision-making.</p>
            </div>
            
            <div className="use-case-card card fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="use-case-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
              </div>
              <h3>Creatives</h3>
              <p>Generate ideas, write content, and overcome creative blocks with AI inspiration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Users Say</h2>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card card fade-in-up">
              <div className="testimonial-content">
                <p>"Davora AI has transformed how I work. It's like having a brilliant assistant available 24/7."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>JS</span>
                </div>
                <div className="author-info">
                  <h4>James Smith</h4>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card card fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="testimonial-content">
                <p>"As a student, Davora helps me understand complex topics and complete assignments faster than ever."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>EM</span>
                </div>
                <div className="author-info">
                  <h4>Emma Martinez</h4>
                  <p>Computer Science Student</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card card fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="testimonial-content">
                <p>"The code generation feature is incredible. Davora saves me hours of development time every week."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>DL</span>
                </div>
                <div className="author-info">
                  <h4>David Lee</h4>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Experience Davora AI Today</h2>
            <p>Join the AI revolution. Download Davora AI and discover what's possible.</p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.dynamicsinc.davora" 
              className="btn btn-primary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.43,14.05l-1-1.73c0-.3-.19-.56-.44-.69l-1.35-.63c-.28-.13-.59-.19-.89-.19l-1.56,0c-.5,0-.93.15-1.25.45l-2.1,1.48c-.35.24-.55.66-.55,1.15l0,2.5c0,.5.2,1,.55,1.15l2.1,1.48c.32.24.75.45,1.25.45l1.56,0c.3,0,.61-.06.89-.19l1.35-.63c.25-.13.44-.39.44-.69l1-1.73c0-.3-.19-.56-.44-.69L18.07,15.2c-.28-.13-.59-.19-.89-.19l-1.56,0c-.5,0-.93.15-1.25.45l-2.1,1.48c-.35.24-.55.66-.55,1.15l0,1.25c0,.5.2,1,.55,1.15l2.1,1.48c.32.24.75.45,1.25.45l1.56,0c.3,0,.61-.06.89-.19l1.35-.63c.25-.13.44-.39.44-.69l1-1.73c0-.3-.19-.56-.44-.69l-1.35-.63c-.28-.13-.59-.19-.89-.19l-1.56,0c-.5,0-.93.15-1.25.45L10.32,12.8c-.35.24-.55.66-.55,1.15l0,2.5c0,.5.2,1,.55,1.15l2.1,1.48c.32.24.75.45,1.25.45l1.56,0c.3,0,.61-.06.89-.19l1.35-.63c.25-.13.44-.39.44-.69l1-1.73c0-.3-.19-.56-.44-.69l-1.35-.63c-.28-.13-.59-.19-.89-.19l-1.56,0c-.5,0-.93.15-1.25.45L10.32,12.8c-.35.24-.55.66-.55,1.15"/>
              </svg>
              Download on Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
