const pricingPlans = [
  {
    name: 'Free',
    price: 'Free',
    period: '',
    description: 'Perfect for getting started with AI',
    features: [
      '20-30 messages per day',
      'Basic AI features',
      'Access to standard models',
      'Community support',
      'Web access only'
    ],
    cta: 'Get Started',
    popular: false,
    buttonVariant: 'secondary'
  },
  {
    name: 'Pro',
    price: '$5',
    period: '/month',
    description: 'For power users who need more',
    features: [
      'Unlimited messages',
      'All Free plan features',
      'Priority access to new features',
      'Faster response times',
      'Mobile app access',
      'Email support'
    ],
    cta: 'Upgrade to Pro',
    popular: true,
    buttonVariant: 'primary'
  },
  {
    name: 'Premium',
    price: '$12',
    period: '/month',
    description: 'The complete AI experience',
    features: [
      'All Pro plan features',
      'Full feature access',
      'Advanced AI models',
      'Custom model training',
      'API access',
      '24/7 priority support',
      'Team collaboration features'
    ],
    cta: 'Go Premium',
    popular: false,
    buttonVariant: 'primary'
  }
]

const faqs = [
  {
    question: 'Can I try Davora AI before paying?',
    answer: 'Yes! Our Free plan gives you full access to basic AI features with 20-30 messages per day. No credit card required.'
  },
  {
    question: 'How do I upgrade my plan?',
    answer: 'You can upgrade at any time from your account settings. The upgrade takes effect immediately, and you get a prorated credit for any unused time.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.'
  },
  {
    question: 'Do you offer team or enterprise plans?',
    answer: 'Yes! We offer custom plans for teams and enterprises. Contact our sales team for more information and custom pricing.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
  },
  {
    question: 'Is there a discount for annual billing?',
    answer: 'Yes! Save 20% when you choose annual billing for Pro and Premium plans.'
  }
]

function Pricing() {
  return (
    <div className="pricing-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Pricing</h1>
          <p className="page-subtitle">
            Choose the plan that's right for you
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-section section">
        <div className="container">
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card card fade-in-up ${plan.popular ? 'popular' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <span>Most Popular</span>
                  </div>
                )}
                
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <p className="pricing-description">{plan.description}</p>
                </div>
                
                <div className="pricing-amount">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                
                <ul className="pricing-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`btn btn-${plan.buttonVariant} btn-full`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          
          <div className="pricing-note text-center mt-4">
            <p>* All plans include our 30-day money-back guarantee</p>
            <p>* Save 20% with annual billing</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Compare Plans</h2>
            <p className="section-subtitle">
              Find the perfect plan for your needs
            </p>
          </div>
          
          <div className="comparison-table card">
            <div className="comparison-header">
              <div className="comparison-feature">Feature</div>
              <div className="comparison-plan">Free</div>
              <div className="comparison-plan">Pro</div>
              <div className="comparison-plan">Premium</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">Messages per day</div>
              <div className="comparison-value">20-30</div>
              <div className="comparison-value">Unlimited</div>
              <div className="comparison-value">Unlimited</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">Basic AI Features</div>
              <div className="comparison-value check">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className="comparison-value check">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className="comparison-value check">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">Advanced AI Models</div>
              <div className="comparison-value cross">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </div>
              <div className="comparison-value cross">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </div>
              <div className="comparison-value check">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">Mobile App Access</div>
              <div className="comparison-value cross">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </div>
              <div className="comparison-value check">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className="comparison-value check">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">API Access</div>
              <div className="comparison-value cross">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </div>
              <div className="comparison-value cross">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </div>
              <div className="comparison-value check">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-feature">Priority Support</div>
              <div className="comparison-value cross">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </div>
              <div className="comparison-value cross">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </div>
              <div className="comparison-value check">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Choose your plan and start using Davora AI today. No credit card required for the Free plan.</p>
            <div className="cta-buttons">
              <a href="/product" className="btn btn-primary">
                Try Free Plan
              </a>
              <a href="/contact" className="btn btn-secondary">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
