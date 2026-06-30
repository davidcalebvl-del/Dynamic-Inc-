function About() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Dynamics Inc</h1>
          <p className="page-subtitle">
            Building accessible, powerful AI tools for everyone
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Mission</h2>
              <p className="story-lead">
                At Dynamics Inc, we believe that artificial intelligence should be accessible to everyone,
                not just the privileged few. We're on a mission to democratize AI and put its power in the
                hands of individuals and businesses worldwide.
              </p>
              
              <p>
                Founded in 2024, Dynamics Inc emerged from a simple observation: while AI technology
                was advancing at an unprecedented pace, most people were being left behind. Complex
                interfaces, steep learning curves, and prohibitive costs created barriers that prevented
                the average person from harnessing AI's full potential.
              </p>
              
              <p>
                We set out to change that. Our flagship product, Davora AI, represents our commitment to
                creating AI tools that are powerful yet intuitive, sophisticated yet approachable, and
                innovative yet reliable.
              </p>
            </div>
            
            <div className="story-visual">
              <div className="story-card card">
                <div className="story-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>Vision</h3>
                <p>A world where AI empowers every individual to achieve their full potential.</p>
              </div>
              
              <div className="story-card card">
                <div className="story-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>Pushing the boundaries of what's possible with AI technology.</p>
              </div>
              
              <div className="story-card card">
                <div className="story-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <h3>Passion</h3>
                <p>Driven by a deep love for technology and its power to transform lives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The brilliant minds behind Dynamics Inc
            </p>
          </div>
          
          <div className="team-grid">
            {/* Founder 1 */}
            <div className="team-card card fade-in-up">
              <div className="team-avatar">
                <div className="avatar-placeholder">
                  <span>JD</span>
                </div>
              </div>
              <div className="team-info">
                <h3>John Davidson</h3>
                <p className="team-role">CEO & Co-Founder</p>
                <p className="team-bio">
                  Serial entrepreneur with 15+ years in AI and machine learning. Previously led AI research at a Fortune 500 tech company.
                </p>
              </div>
            </div>
            
            {/* Founder 2 */}
            <div className="team-card card fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="team-avatar">
                <div className="avatar-placeholder">
                  <span>SM</span>
                </div>
              </div>
              <div className="team-info">
                <h3>Sarah Mitchell</h3>
                <p className="team-role">CTO & Co-Founder</p>
                <p className="team-bio">
                  AI engineer and product architect. Expert in natural language processing and conversational AI systems.
                </p>
              </div>
            </div>
            
            {/* Team Member 1 */}
            <div className="team-card card fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="team-avatar">
                <div className="avatar-placeholder">
                  <span>AL</span>
                </div>
              </div>
              <div className="team-info">
                <h3>Alex Liu</h3>
                <p className="team-role">Lead Engineer</p>
                <p className="team-bio">
                  Full-stack developer specializing in scalable AI applications and cloud infrastructure.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="team-card card fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="team-avatar">
                <div className="avatar-placeholder">
                  <span>MR</span>
                </div>
              </div>
              <div className="team-info">
                <h3>Maria Rodriguez</h3>
                <p className="team-role">Product Designer</p>
                <p className="team-bio">
                  UX/UI designer focused on creating intuitive and beautiful AI interfaces that users love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="text-center mb-4">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>User First</h3>
              <p>We always prioritize the needs and experience of our users.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We push boundaries and challenge the status quo.</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We build trust through transparency and honesty.</p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>We strive for the highest quality in everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
