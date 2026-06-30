import { Link } from 'react-router-dom'
import DavoraLogo from './DavoraLogo'

const footerLinks = {
  company: [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/product', name: 'Product' },
    { path: '/pricing', name: 'Pricing' },
    { path: '/contact', name: 'Contact' }
  ],
  legal: [
    { path: '/privacy', name: 'Privacy Policy' },
    { path: '/terms', name: 'Terms of Service' }
  ],
  social: [
    { path: 'https://twitter.com', name: 'Twitter' },
    { path: 'https://linkedin.com', name: 'LinkedIn' },
    { path: 'https://github.com', name: 'GitHub' }
  ]
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <DavoraLogo size={48} />
            <div className="footer-brand-text">
              <h3>Dynamics Inc</h3>
              <p>Building the future of AI</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                {footerLinks.legal.map((link) => (
                  <li key={link.path}>
                    <a href={link.path} target="_blank" rel="noopener noreferrer">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Social</h4>
              <ul>
                {footerLinks.social.map((link) => (
                  <li key={link.path}>
                    <a href={link.path} target="_blank" rel="noopener noreferrer">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dynamics Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
