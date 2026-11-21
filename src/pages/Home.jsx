import { Link } from 'react-router-dom';
import { useSeo } from '../seo';
import './Home.css';

// TODO(Deep): edit these placeholder stats — values below come from the
// resume so the cards look right, but swap in whatever proof points you want.
const highlights = [
  {
    figure: '15+',
    label: 'Years',
    title: 'Experience',
    body: 'Full-stack engineering and leadership across healthcare and fintech.',
  },
  {
    figure: '3 → 8',
    label: 'Engineers',
    title: 'Team Growth',
    body: 'Scaled the In-Care Experience team with onboarding and mentoring frameworks.',
  },
  {
    figure: '100K+',
    label: 'Users',
    title: 'Scale & Impact',
    body: 'Full-stack systems delivering content, notifications, and analytics.',
  },
  {
    figure: '38%',
    label: 'Cost Saved',
    title: 'Technical Efficiency',
    body: 'Migrated React application assets to a CloudFront CDN, cutting cost.',
  },
];

const approaches = [
  {
    title: 'People-First Leadership',
    body: 'Built inclusive environments where engineers thrive, with onboarding plans, mentoring frameworks, and promotion success stories.',
  },
  {
    title: 'Technical Excellence',
    body: 'Expertise in distributed systems, GenAI capabilities, and scaling performance-critical applications across React, AWS, and Kubernetes.',
  },
  {
    title: 'Process Innovation',
    body: 'Revamped sprint processes and automated workflows, cutting story rollover by 30% and content delivery time by 40%.',
  },
];

function Home() {
  useSeo({
    title: 'Deep Pancholi | Engineering Leader',
    description:
      'Deep Pancholi is a software engineering leader focused on building teams and scalable products in healthcare and fintech.',
    path: '/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Deep Pancholi',
      url: 'https://deepintheai.com/',
      jobTitle: 'Senior Software Engineering Manager',
      sameAs: ['https://www.linkedin.com/in/deeppancholi/', 'https://x.com/DPancs'],
    },
  });

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-photo">
          <img src="/profile.jpg" alt="Deep Pancholi" />
          <nav className="home-social-links" aria-label="Contact and social links">
            <a href="https://www.linkedin.com/in/deeppancholi/" target="_blank" rel="noopener noreferrer" aria-label="Deep Pancholi on LinkedIn">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5.2 3.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM3.8 9h2.9v11H3.8V9Zm4.8 0h2.8v1.5h.1a3.1 3.1 0 0 1 2.8-1.7c3 0 3.6 2 3.6 4.5V20H15v-5.9c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V20H8.6V9Z" /></svg>
            </a>
            <a href="https://x.com/DPancs" target="_blank" rel="noopener noreferrer" aria-label="Deep Pancholi on Twitter">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" /></svg>
            </a>
            <a href="mailto:dpancholi@duck.com" aria-label="Email Deep Pancholi at dpancholi@duck.com">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L20 7H4l8 5.2Zm-8 4.9 5.5-4-5.5-3.6v7.6Zm16 0V9.5l-5.5 3.6 5.5 4Zm-7.1-2.8L12 15l-1.9-.7L4 18h16l-7.1-3.7Z" /></svg>
            </a>
          </nav>
        </div>
        <div className="home-hero-text">
          <h1>
            Deep <span className="home-hero-accent">Pancholi</span>
          </h1>
          <p className="home-hero-role">
            Lyra Health — Senior Software Engineering Manager
          </p>
          <p className="home-hero-intro">
            Results-driven engineering leader with 15 years of experience in
            full-stack development, system architecture, and team leadership.
            Proven track record of scaling teams, driving agile delivery, and
            building scalable, customer-centric platforms in healthcare and
            fintech.
          </p>
          <div className="home-hero-pills">
            <span>Engineering Leader</span>
            <span>GenAI &amp; Healthcare</span>
            <span>Team Builder</span>
          </div>
        </div>
      </section>

      <section className="home-section home-section-alt">
        <div className="home-container">
          <h2>Career Highlights</h2>
          <div className="home-highlight-grid">
            {highlights.map((item) => (
              <article className="home-card" key={item.title}>
                <p className="home-card-figure">{item.figure}</p>
                <p className="home-card-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-container">
          <h2>Leadership Approach</h2>
          <div className="home-approach-grid">
            {approaches.map((item) => (
              <article className="home-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-alt home-connect">
        <div className="home-container">
          <h2>Let&apos;s Connect</h2>
          <div className="home-connect-buttons">
            <Link className="home-button home-button-primary" to="/resume">
              View Resume
            </Link>
            <Link className="home-button home-button-secondary" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
